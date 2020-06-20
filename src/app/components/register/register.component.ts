import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { passwordValidation } from 'src/app/validations/validations';
import { RegisterService } from './../../service/register.service';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/interface/register-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  hide = true;
  hide1 = true;
  allUsers: RegisterModel;
  get userName() {
    return this.myForm.get('UserName');
  }

  get mobile() {
    return this.myForm.get('Mobile');
  }

  get email() {
    return this.myForm.get('Email');
  }

  get password() {
    return this.myForm.get('Password');
  }

  get confirmPassword() {
    return this.myForm.get('ConfirmPassword');
  }
  // FormBuilder has FormFroup & FormControl.
  constructor(formBuilder: FormBuilder, private registerService: RegisterService, private router: Router) {
    this.myForm = formBuilder.group(
      {
        UserName: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern('^[a-zA-Z]+$'),
          ],
        ],
        Mobile: [
          '',
          [
            Validators.required,
            Validators.pattern('^(0|91|\\+91)?-?[789]\\d{9}$'),
          ],
        ],
        Email: ['', [Validators.required, Validators.email]],
        Password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '((?=.*[a-z])(?=.*\\d)(?=.*[A-Z])(?=.*[@#$%!]).{8,40})'
            ),
          ],
        ],
        ConfirmPassword: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '((?=.*[a-z])(?=.*\\d)(?=.*[A-Z])(?=.*[@#$%!]).{8,40})'
            ),
          ],
        ],
      },
       { validator: passwordValidation }
    );
  }

  ngOnInit(): void {
    this.getLatestUser();
    // This is to render in HTML file
  }

  submitDetails(formObj) {
    console.log(formObj);
    this.registerService.createUser(formObj).subscribe((response) =>
    {
      this.getLatestUser();   // This is to render in HTML file
    });
    this.router.navigate(['/login']);
  }

  getLatestUser(){
    this.registerService.getAllUsers().subscribe((response) =>
      this.allUsers = response);
  }
}
