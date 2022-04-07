import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListHouseComponent} from './list-house/list-house.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 's', component: ListHouseComponent},
];
