import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage  {
  public fullName: any;
  public phone: any;
  public email:any;

  key:any = 'fullName';
  key1:any = 'phone';
  key2:any = 'email';
  constructor(private storage: Storage, public router: Router) { }

  signIn(){
    this.storage.set(this.key,this.fullName);
    this.storage.set(this.key1,this.phone);
    this.storage.set(this.key2,this.email);

    this.router.navigate(['bevarages']);
  }
  backToHome(){
    this.router.navigate(['home']);
  }
  loadData(){
    this.storage.get(this.key).then((val) => {
      console.log('Your name is', val);
    });
    this.storage.get(this.key1).then((val1) => {
      console.log('Your phone no. is', val1);
    });
    this.storage.get(this.key2).then((val2) => {
      console.log('Your email address is', val2);
    });
  }

}
