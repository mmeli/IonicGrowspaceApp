import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { SMS } from '@ionic-native/sms/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-bevarages',
  templateUrl: './bevarages.page.html',
  styleUrls: ['./bevarages.page.scss'],
})
export class BevaragesPage {
  public tea: boolean=false;
  public coffee: boolean=false;
  public water: boolean=false;

  key5:string = 'tea';
  key6:string = 'coffee';
  key7:string = 'water';

  

  constructor(private storage: Storage, public router: Router, public sms: SMS, public androidPermissions: AndroidPermissions) { }

  doneBeverage(){
    //this.tea === true ? this.storage.set(this.key5,'Tea'): return false;
    this.storage.set(this.key5,this.tea).then( (teaVal) =>{
      this.tea = teaVal;
    });
    this.storage.set(this.key6,this.coffee).then( (coffeeVal) =>{
      this.coffee= coffeeVal;
    });
    this.storage.set(this.key7,this.water).then( (waterVal) =>{
      this.water = waterVal;
    });
    this.SMSTO();
    

    this.router.navigate(['welcome']);
  }
  SMSTO(){
    let phoneNumber: any;
    phoneNumber ='0767424870';
    let textMessage: string;
    textMessage = 'Please prepare the following for the client: \n'+this.tea+' Tea'+' \n'+this.coffee+' Coffee'+'\n'+this.water+' Water \n \n Thank you Sylvia';
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
       //this.sms.send(phoneNumber.toString(), textMessage, options);
       this.sms.send(phoneNumber.toString(), textMessage, options);
      
    }
    catch(e){
      alert(JSON.stringify(e));
      alert(e)
    }
  }

}
