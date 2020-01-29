import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/_validators/custom-validators';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.scss']
})
export class Demo8Component implements OnInit {

  formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(8),
        //Validators.pattern('')
      ])),
      confirm: new FormControl(null),
      siteUrl: new FormControl(null, Validators.compose([
        Validators.pattern(/^(http|https):\/\/(www.)?.+/)
      ])),
      birthDate: new FormControl(new Date(),
        CustomValidators.notBeforeToday
      ),
      cgu: new FormControl(false, Validators.requiredTrue),
    }, Validators.compose([
        CustomValidators.compare('password','confirm')
    ]));
  }
}
