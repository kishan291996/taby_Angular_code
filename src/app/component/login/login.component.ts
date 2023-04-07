import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  txtLength: any;
  txt2: any;
  lengthOfTxt: any;
  reversetxt: any;
  buildArray: any = [];
  copiedBuildArray: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    
    
    
    let obj = {
      peron: 'Taby',
      age: '33'
    };

    // console.log("Shallow Output :",obj.age);
    //   console.log("Shallow Output :",obj.peron);

    let shelow = Object.assign(obj);
      shelow.age='20'
      shelow.peron="kishan"
      // console.log("Shallow Output :",obj.age);
      // console.log("Shallow Output :",obj.peron);

      console.log("Shallow Output :",shelow.age);
      console.log("Shallow Output :",shelow.peron);
      

      let deep = JSON.parse(JSON.stringify(obj))
        deep.peron="Kishu";
        deep.age='32';

        console.log("Shallow Output :",obj.age);
      console.log("Shallow Output :",obj.peron);

        console.log("Deep Output :",deep.age);
      console.log("Deep Output :",deep.peron);


  }
  onNavigate() {
    this.router.navigateByUrl('/register');
  }
  onSubmit() {
    // console.log('try',this.txtLength);
    // this.txtLength.length;
    // this.lengthOfTxt = this.txtLength.length;
    // this.reversetxt = this.txtLength.split('').reverse('').join('');
    // console.log(this.txtLength.split(''))
    // console.log(this.txtLength.split('').reverse(''))
    // console.log(this.txtLength.split('').reverse('').join(''))

    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    console.log('fname:', this.txt2);

    // if (this.txtLength=!undefined && this.txt2=!undefined) {
    // }
    if (
      this.txtLength != undefined &&
      this.txt2 != undefined &&
      this.txtLength != '' &&
      this.txt2 != ''
    ) {
      // console.log('try',this.txtLength.length);
      this.copiedBuildArray = { fname: this.txtLength, lname: this.txt2 };
      this.buildArray.push({
        fname: this.txtLength,
        lname: this.txt2,
        color: randomColor,
      });

      var filter = this.buildArray.filter((a:any) => a.fname=="")
      console.log("Filter",filter)
      var find = this.buildArray.find((a:any)=>a.fname="")
      var every= this.buildArray.every((a:any)=>a.fname="")
      var some= this.buildArray.some((a:any)=>a.fname="")

      // this.buildArray.forEach((element : any)=> {
      //   element.length;
      //   console.log("Length is: ",element.length)
      // });
      console.log('buildarray', this.buildArray);
      console.log('copiedbuildarray', this.copiedBuildArray);
      this.txtLength = '';
      this.txt2 = '';
    }
  }
}
