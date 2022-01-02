import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeregistrationComponent } from './employeeregistration/employeeregistration.component';
import { EmployeeregsuccessComponent } from './employeeregsuccess/employeeregsuccess.component';


const routes: Routes = [
  { path: '', redirectTo: 'employeeRegister', pathMatch: 'full' },
  { path: 'employeeRegister', component: EmployeeregistrationComponent },
  {path:'successReg',component:EmployeeregsuccessComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
