import {Routes} from '@angular/router';
import {LayoutPreLoginComponent} from './layout-pre-login/layout-pre-login.component';
import {LayoutPostLoginComponent} from './layout-post-login/layout-post-login.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: LayoutPreLoginComponent,
    children: [
      {path: '', loadChildren: () => import('../pre-login/pre-login.module').then(m => m.PreLoginModule)},
    ]
  },
  {
    path: '',
    component: LayoutPostLoginComponent,
    children: [
      {path: '', loadChildren: () => import('../post-login/post-login.module').then(m => m.PostLoginModule)},
    ]
  }
];
