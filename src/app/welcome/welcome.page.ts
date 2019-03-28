import { Component, OnInit } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
//import { async } from '@angular/core/testing';
import { SMS } from '@ionic-native/sms/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})

export class WelcomePage implements OnInit  {
  public dataTea: string = 'Tea';
  public dataCoffee: string = 'Coffee';
  public dataWater: string = 'Water';
    data:any;
    data1:any;
    data2:any;
    //////////
    bdata:boolean=false;
    bdata1:boolean=false;
    bdata2:boolean=false;
  constructor(public androidPermissions: AndroidPermissions, public sms: SMS, private storage: Storage, public router: Router) { }

  ngOnInit(){
 
    Promise.all([

    this.storage.get('fullName').then((d)=>{this.data=d;}),
    this.storage.get('phone').then((d1)=>{this.data1=d1;}),
    this.storage.get('email').then((d2)=>{this.data2=d2;}),

    this.storage.get('tea').then((bd) =>{
      //bd = 'Tea';
      this.bdata=bd;
      
    }),
    this.storage.get('coffee').then((bd1) =>{
      //bd1 = 'Coffee';
      this.bdata1=bd1;
      //this.bdata1 = 'Coffee';
    }),
    this.storage.get('water').then((bd2) =>{
      //bd2 = 'Water';
      this.bdata2=bd2;
      //this.bdata2 = 'Water';
    })

  ]);
    
    // console.log(this.data.toString()); 
    // console.log(this.data1.toString()); 
    // console.log(this.data2.toString()); 
     console.log(JSON.stringify(this.bdata));
    console.log(this.bdata1);
    console.log(this.bdata2);
    

}
checkedItem(te, cof, wat){
     if(te == true){
       console.log(te);
       this.bdata = true;
     } 
     if(cof == true){
       console.log(cof);
       this.bdata1= true;
       
     }
     if(wat==true){
       console.log(wat);
       this.bdata2=true;
     }

}

  async sendSMS(){

    let sendTea:string;
    let sendCoffee:string;
    let sendWater:string;

    let phoneNumber: any;
    phoneNumber =this.data1;
    let textMessage: string;
    textMessage = 'Welcome to Groworx '+this.data+' \n \n Wifi: Growspace \n Password: Gr0w5p@c3 \n \n Enjoy';
    let phoneNumber2: any;
    phoneNumber2 ='0760837038';
    let textMessage2: string;
    //textMessage2= 'Please prepare the ff: \n'+ this.bdata?this.dataTea:''+'\n'+this.bdata1?this.dataCoffee:''+'\n'+this.bdata2?this.dataWater:''+'\n'+'for :'+this.data;
    textMessage2 ='Please prepare the ff : ';

    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.SEND_SMS).then(
      result => console.log('Has Permission?'+result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS)
    );
    var options = {
      replaceLineBreaks: true,
      android: {
        intent: ''
      }
    };

    try{
      await this.sms.send(phoneNumber.toString(), textMessage, options);
      //await this.sms.send(phoneNumber2.toString(), textMessage2, options);
      alert('Thank you '+this.data);
      
    }
    catch(e){
      alert(JSON.stringify(e));
      alert(e)
    }
    this.router.navigate(['home']);
  }

  // ngOnInit() {
 

  // }

}

