import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-template-driven-login',
  templateUrl: './template-driven-login.component.html',
  styleUrls: ['./template-driven-login.component.css'],
})
export class TemplateDrivenLoginComponent implements OnInit {
  u_name: any;
  psd: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onsubmit() {
    if (
      (this.u_name == '' && this.psd == '') ||
      (this.u_name == undefined && this.psd == undefined)
    ) {
      alert('Required Field');
    } else if (this.u_name == '' || this.u_name == undefined) {
      alert('User Name Required');
    } else if (this.psd == '' || this.psd == undefined) {
      alert('Password Required');
    } else if (
      (this.u_name != undefined && this.psd != undefined) ||
      (this.u_name != '' && this.psd != '')){

        let reg_value = JSON.parse(localStorage.getItem('frmgrp') || '{}')
        console.log("data: ",reg_value);
        
        if (this.u_name==reg_value.fname && this.psd==reg_value.pass) {

          this.router.navigateByUrl('reg');
          
        }else
        {
          alert("Please Register First")
        }

      

    }
  }
  onRegister(){
    this.router.navigateByUrl('reg')
  }
}
