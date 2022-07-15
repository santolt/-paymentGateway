import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  paytmentForm: FormGroup
  constructor(private fb: FormBuilder, private router: Router) { 
    this.paytmentForm = fb.group({
      nomberCard: ['', Validators.required],
      cardNomber: ['', Validators.required],
      expiry: ['', Validators.required],
      cw: ['', Validators.required],
      billingAddress: ['', Validators.required],
      streetAdress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      
      

    })
  }

  ngOnInit(): void {
  }

}