import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-addPage',
  templateUrl: 'addPage.html'
})
export class NewAddPage {

  gymnastic: any = {name: '', year: ''};
  nameGymnastic: string;
  year: number;


  constructor(public navCtrl: NavController, public navParams: NavParams, public servicioAad: UserServiceProvider, public toastCtrl: ToastController) {

  }

  addGymnastic(){
    this.gymnastic= {name: this.nameGymnastic, year: this.year};
    
    this.servicioAad.add(this.gymnastic).subscribe(response =>{
      let toast = this.toastCtrl.create({
        message: 'The gymnastic: "' + this.gymnastic.name + '"has been added.',
        duration: 2000,
        position: 'bot'
      });
      toast.present();
    });
  }

}
