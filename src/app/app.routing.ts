import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'slist/login', component: LoginComponent }, { path: '', redirectTo: '/slist/login', pathMatch: 'full' },
  { path: 'slist/logout', component: LoginComponent },
  
  {
    path: 'slist/home', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: HomeComponent }

    ]
  },
];

export const routing = RouterModule.forRoot(routes);
