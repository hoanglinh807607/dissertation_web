import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './status-code-site/page-not-found/page-not-found.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {AngularFirestore, AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireDatabase, AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {SharedModule} from "./shared/shared.module";

// export interface ISdeState {
//   [authFeatureKey]?: AuthState;
//   [alertFeatureKey]?: AlertState;
// }
// const reducerKeys = [authFeatureKey];
// const reducers: ActionReducerMap<ISdeState> = {
//   [authFeatureKey]: authReducer,
//   [alertFeatureKey]: alertReducer,
// };

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    NgbModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'cloud'),
    StoreModule.forRoot({}, {}),  //Khi cài store nó sẽ tự thêm
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }), //Khi cài store nó sẽ tự thêm
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    SharedModule
  ],
  exports: [RouterModule],
  providers: [AngularFirestore, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
