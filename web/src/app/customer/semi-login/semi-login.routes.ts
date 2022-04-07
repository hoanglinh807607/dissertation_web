import {Routes} from '@angular/router';
import {SemiComponent} from './layout/semi.component';

export const routes: Routes = [
  {
    path: '',
    component: SemiComponent,
    children: [
      {path: 'auth', loadChildren: () => import('../pre-login/pre-login.module').then(m => m.PreLoginModule)},
      {path: '', loadChildren: () => import('../post-login/post-login.module').then(m => m.PostLoginModule)},
    ]
  },
];
