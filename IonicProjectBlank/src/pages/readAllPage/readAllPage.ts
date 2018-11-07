import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-readAllPage',
  templateUrl: 'readAllPage.html'
})
export class NewReadAllPage {
  gymnastics: Array<any>;
  constructor(public navCtrl: NavController, public servicio: UserServiceProvider) {

  }

  ionViewDidLoad(){
    this.servicio.getAllGymnastics().subscribe(
      (data) => {
        this.gymnastics = data;
      },
      (error) =>{
        console.error(error);
      }
      )
  }

}
