import { Component, Directive, ElementRef, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-employeeregistration',
  templateUrl: './employeeregistration.component.html',
  styleUrls: ['./employeeregistration.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EmployeeregistrationComponent implements OnInit {
  constructor(private employeeService: EmployeeService, private router: Router, private elementRef: ElementRef,private datePipe: DatePipe) {
  }
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;
  submitted = false;
  isDisable = false
  employeeRegistration: FormGroup
  element: HTMLElement
  showMessage = "";
  departments: any = [
    {
      name: "Admininstration",
      code: "AD"
    },
    {
      name: "Information Technology",
      code: "IT"
    },
    {
      name: "Help Desk",
      code: "HD"
    },
    {
      name: "Human Resource",
      code: "HR",
    },
    {
      name: "Operation",
      code: "OP"
    }];
  employee: Employee = new Employee();
  ngOnInit() {
    this.employeeRegistration = new FormGroup({
      employeeNo: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      employeeName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      department: new FormControl('', [Validators.required]),
      salary: new FormControl("", [Validators.required, Validators.maxLength(10)]),
      dateOfJoining: new FormControl(new Date(), [Validators.required]),
    })
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.employeeRegistration.controls[controlName].hasError(errorName);
  }
  onSubmit() {
    this.showMessage = "";
    this.submitted = true;
    if (this.employeeRegistration.valid) {
      this.isDisable = true;
      this.element = document.getElementById("dvSpinner") as HTMLElement;
      this.element.style.display = "";
      this.employee = this.employeeRegistration.value;
      this.employee.dateOfJoining = this.updateDateOfJoining(this.employee.dateOfJoining);
      this.employeeService.createEmployee(this.employee).subscribe(data => {
        this.employee = new Employee();
        this.goToSucceessPage();
      },
        error => {
          console.log(error)
          this.isDisable = false;
          this.element.style.display = "none";
          this.showMessage = "Unable to Register.Internal server Error"
        });
    }
  }
  updateDateOfJoining(dateObject) {
    var objDate = document.getElementById("dateOfJoining") as  HTMLInputElement
    return objDate.value;
  }


  onClkReset() {
    this.formGroupDirective.resetForm();
  }
  numericOnly(event): boolean {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }
  goToSucceessPage() {
    this.router.navigate(['successReg']);
  }
}
