import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import {
  LayoutComponent
} from './layouts/layout.component';

// Auth
import {
  AuthGuard
} from './core/guards/auth.guard';
import { Role } from './core/models/role.module';

const routes: Routes = [{
    path: '',
    redirectTo: "user",
    "pathMatch": "full"
  },
  {
    path: 'auth',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
    //canActivate:[AuthGuard]
  },
  {
    path: 'admin',
    component: LayoutComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate:[AuthGuard],
    data:{roles:Role.Admin}
  },
  {
    path: 'user',
    component: LayoutComponent,
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canActivate:[AuthGuard],
    data:{roles:Role.User}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}