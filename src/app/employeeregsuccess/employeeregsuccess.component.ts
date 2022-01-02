import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeregsuccess',
  templateUrl: './employeeregsuccess.component.html',
  styleUrls: ['./employeeregsuccess.component.scss']
})
export class EmployeeregsuccessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClkRegister()
  {
    this.router.navigate(['employeeRegister']);
  }

}
