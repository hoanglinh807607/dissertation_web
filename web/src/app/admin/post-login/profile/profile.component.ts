// @ts-ignore

import {Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {IObject} from "../../../api/Interface.Utils";
import {CustomValidators, MyErrorStateMatcher} from "../../../api/validator";
import {BsDatepickerConfig} from "ngx-bootstrap/datepicker";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Constants} from "../../../shared/helper/constants";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {NgxSpinnerService} from "ngx-spinner";
import {ImageCroppedEvent} from "ngx-image-cropper";
import {FirebaseService} from "../../../services/firebase.service";
import {LocalStorageService} from "../../../core/service/local-storage.service";
import {Gallery, ImageSize, ThumbnailsPosition} from "ng-gallery";
import {Lightbox} from "ng-gallery/lightbox";
import {UserModel} from "../../../core/models/userModel";
import {UserService} from "../../../core/service/user.service";
import {Store} from '@ngrx/store';
import {authQuery} from "../../../core/store/auth/auth.selector";
import {Subject, takeUntil} from "rxjs";
import {Destroyable} from "../../../shared/provider/directive/destroyable.directive";

export interface IGender {
  label: string;
  value: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends Destroyable implements OnInit, OnDestroy {

  public dpConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();
  @ViewChild('uploadFileModalRef') private uploadFileModalRef: TemplateRef<any>;
  @ViewChild('profileRef') private profileRef: ElementRef;

  formErrors: IObject = {} as IObject;
  matcher = new MyErrorStateMatcher();
  uploadFailedMsg: string;
  modalRef: BsModalRef;
  imageChangedEvent: any;
  oldImage = '/assets/images/login/no_avatar.png';
  newImage = '';
  croppedImage: string = '';

  listUrlCard: string[] = [];

  formGroup: FormGroup;

  userLoginInfo: UserModel;

  destroy$ = new Subject();

  genderList: IGender[] = [
    { label: 'Nam', value: 'Male' },
    { label: 'Nữ', value: 'Female' },
  ];

  constructor(private modalService: BsModalService,
              private spinner: NgxSpinnerService,
              private firebaseService: FirebaseService,
              private localStorageService: LocalStorageService,
              public gallery: Gallery,
              public lightbox: Lightbox,
              private userService: UserService,
              private store: Store<UserModel>,
              private fb: FormBuilder) {
    super();
  }
  ngOnDestroy(): void {
    this.localStorageService.removeListPictureUrls();
  }

  ngOnInit(): void {
    this.configLightBoxRef();
    this.localStorageService.removeListPictureUrls();
    this.getUserLoginInfo();
  }

  getUserLoginInfo() {
    this.store.select(authQuery.getState).pipe(takeUntil(this.destroy$)).subscribe(authState => {
      console.log(authState);
      // this.userLoginInfo = authState.payload!;
      if (this.userLoginInfo) {
        this.initForm();
      }
    });
  }

  initForm() {
    this.formErrors = {} as IObject;
    this.formGroup = this.fb.group({
      fullName: [
        this.userLoginInfo.fullName,
        [Validators.required, Validators.maxLength(50), CustomValidators.noWhiteSpace]
      ],
      phoneNumber: [
        this.userLoginInfo.phoneNumber,
        [Validators.required, Validators.maxLength(20), CustomValidators.noWhiteSpace]
      ],
      gender: [this.userLoginInfo.gender],
      birthDate: [this.userLoginInfo.birthDate],
      emailAddress: [
        this.userLoginInfo.phoneNumber,
        [Validators.required, Validators.email, Validators.maxLength(50)]
      ],
      address: [this.userLoginInfo.address],
      introduceYourself: [this.userLoginInfo.introduceYourself],
      fullNameCard: [
        this.userLoginInfo.fullNameCardOwner,
        [Validators.required]
      ],
      cardNumber: [
        this.userLoginInfo.cardNumber,
        [Validators.required], Validators.maxLength(20)
      ],
      cardCreateDate: [
        this.userLoginInfo.cardCreateDate,
        [Validators.required], Validators.maxLength(20)
      ],
      pictureCard: '',
      profilePicture: ''
    })
  }

  configLightBoxRef() {
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Bottom,
    });

    // Load items into the lightbox gallery ref
    // lightboxRef.load(this.listUrlCard);
  }

  isShowError(fieldControl: string) {
    const frmControl = this.formGroup.controls;
    return frmControl[fieldControl].invalid;
  }

  onUpload() {
    this.profileRef.nativeElement.value = '';
    this.profileRef.nativeElement.click();
  }

  fileChangeEvent(event: any): void {
    console.log('fileChangeEvent');
    this.uploadFailedMsg = '';
    this.imageChangedEvent = event;
    const target = event.target as HTMLInputElement;
    if (target.files!.length <= 0) { return; }
    if (!this.isValidFileUpload(target.files![0])) {
      this.croppedImage = '';
      return;
    }
    this.openDialogUploadImg();
  }

  isValidFileUpload(file: File) {
    if (!Constants.IMAGE_TYPE_SUPPORT_ARRAY.includes(file.type)) {
      this.uploadFailedMsg =
        'The allowable file types are JPEG, PNG, JPG, BMP.';
      return false;
    }
    if (file.size >= 10485760) {
      this.uploadFailedMsg = 'The allowable file size is 10MB.';
      return false;
    }
    return true;
  }

  openDialogUploadImg() {
    this.modalRef = this.modalService.show(this.uploadFileModalRef, {
      class: 'modal-dialog modal-dialog-centered',
    });
  }

  async uploadImg() {
    this.spinner.show();
    const target = this.imageChangedEvent.target as HTMLInputElement;
    await this.firebaseService.UpdateImageToFirebase(target.files![0], false);
    this.spinner.hide();
    this.modalRef.hide();
    this.oldImage = '';
    this.newImage = this.croppedImage;
    // console.log(this.newImage);
  }

  imageCropped(event: ImageCroppedEvent) {
    // console.log(target.files);
    this.croppedImage = event.base64 as string;
  }

  imageLoaded() {
    console.log('imageLoaded');
  }

  cropperReady() {
    console.log('cropperReady');
  }

  loadImageFailed() {
    console.log('loadImageFailed');
  }

  closeImageUploadModal() {
    this.modalRef.hide();
  }

  async previewImage(event: any) {
    this.previewImageAsBase64(event);
    this.spinner.show();
    this.firebaseService.uploadListImageToFirebase((event.target as HTMLInputElement).files!);
    this.spinner.hide();
  }

  previewImageAsBase64(e: any) {
    for (
      let idx = 0;
      idx < (e.target as HTMLInputElement).files!.length;
      idx++
    ) {
      const reader = new FileReader();
      reader.onload = () => {
        this.listUrlCard.push(reader.result as string);
      };
      reader.readAsDataURL((e.target as HTMLInputElement).files![idx]);
    }
  }

  removePicture(index: number) {
    this.listUrlCard.splice(index, 1);
    const pictures = this.localStorageService.getListPictureUrl();
    pictures.splice(index, 1);
    this.localStorageService.setListPictureUrls(pictures);
  }
}
