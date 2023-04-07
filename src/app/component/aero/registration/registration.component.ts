import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  reg = new FormGroup({
    fname: new FormControl(''),
    eml: new FormControl(''),
    pass: new FormControl(''),
  });
constructor(private router:Router) {}

  ngOnInit(): void {}

  OnRegistration(){
  

    // let temp= this.reg.value;
    
    
    localStorage.setItem('frmgrp',JSON.stringify(this.reg.value))
    
    this.router.navigateByUrl('templog')

  }

}
