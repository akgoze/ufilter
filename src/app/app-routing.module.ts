import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { LoginComponent } from './components/login/login.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { AddTestComponent } from './components/add-test/add-test.component';
import { TestsComponent } from './components/tests/tests.component';
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'new-user', component: AddUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-detail/:id', component: UserDetailComponent },
  { path: 'add-new-test', component: AddTestComponent },
  { path: 'all-tests', component: TestsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
