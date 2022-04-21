import {Injectable} from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {LocalStorageService} from "../core/service/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  pictures: string[] = [];

  constructor(private storage: AngularFireStorage,
              private localStorage: LocalStorageService) { }

  async uploadListImageToFirebase(files: FileList) {
    this.pictures = this.localStorage.getListPictureUrl();
    for (let i = 0; i < files.length; i++) {
      await this.UpdateImageToFirebase(files[i], true);
    }
  }

  async UpdateImageToFirebase(file: File, isFileList: boolean) {
    const metadata = {
      contentType: 'image/jpeg'
    }
    const filePath = 'img/'+ Date.now();
    const fileRef = this.storage.ref(filePath);
    await this.storage.upload(filePath, file);
    await fileRef.getDownloadURL().subscribe(url => {
      if (url && isFileList) {
        this.pictures.push(url);
        this.localStorage.setListPictureUrls(this.pictures);
      } else if (url && !isFileList) {
        this.localStorage.setPicture(url);
      }
    });
  }

}
