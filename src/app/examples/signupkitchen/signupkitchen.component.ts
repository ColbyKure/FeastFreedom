import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//import { FormArray, Validators } from '@angular/forms';
//import { ApiServiceService } from '../../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupkitchen',
  templateUrl: './signupkitchen.component.html',
  styleUrls: ['./signupkitchen.component.css']
})
export class SignupkitchenComponent implements OnInit {

  // public kitchenForm;
  
  constructor(private router: Router) {
    
   }

   ngOnInit(): void {
  //  ngOnInit(): void {
    //  this.kitchenForm = this.fb.group({
    //     KitchenName: ['', [Validators.required, Validators.minLength(3)]],
    //     Email: ['', [Validators.required, Validators.minLength(3)]],
    //     Password: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    //     KitchenType: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    //     WorkingDays: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    //     OpenTime: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    //     CloseTime: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    //     ImagePath: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
  //  });
      //});
    }

    onSubmit(){

          this.router.navigate(['/createitem']);

  }

    

}

// @Component({
//   selector: 'app-addemployee',
//   templateUrl: './addemployee.component.html',
//   styleUrls: ['./addemployee.component.css']
// })
// export class AddemployeeComponent implements OnInit {

//   public employeeForm;
//   employees;
//   errorMsg;

//   constructor(private fb: FormBuilder, private empService: EmployeeService, private router: Router) { }

//   ngOnInit(): void {
//      this.employeeForm = this.fb.group({
//       firstName: ['', [Validators.required, Validators.minLength(3)]],
//       lastName: ['', [Validators.required, Validators.minLength(3)]],
//       Salary: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
//     });
//   }

//   onSubmit(employeeForm){
//     console.log(this.employeeForm.value);
//     this.empService.postEmployee(this.employeeForm.value).subscribe(
//       (data) => {
//         this.employees = data; 
//         console.log(this.employees);
//         this.empService.getEmployees().subscribe(
//           (data) => this.employees = data,
//           (error) => this.errorMsg = error
//         )
//       },
//       (error) => this.errorMsg = error
//     )
//     this.router.navigate(['/employeelist']);
//     this.employeeForm.reset();
//   }

//   get firstName() {
//     return this.employeeForm.get('firstName');
//   }

//   get lastName() {
//     return this.employeeForm.get('lastName');
//   }

//   get Salary() {
//     return this.employeeForm.get('Salary');
//   }


// }

