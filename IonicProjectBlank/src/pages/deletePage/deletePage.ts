import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-deletePage',
  templateUrl: 'deletePage.html'
})
export class NewDeletePage {

  gymnastics: Array<any>;

  gymnastic: any = {id: '',name: '', year: ''};
  idGymnastic: number;

  constructor(public navCtrl: NavController, public gymnasticService : UserServiceProvider, public toastCtrl: ToastController) {

  }

  getGymnastic(id){
    console.log(id);
    this.gymnasticService.get(id).subscribe(
      (gymnastic: {id: number, name: string, year: number}) => {
        this.gymnastic = gymnastic;
      },
      (error) => {
        console.log(error);
      }
    );
    return this.gymnastic;
  }

  delete(id) {
    this.gymnastic = this.getGymnastic(id);
      
    this.gymnasticService.remove(id).subscribe(response => {
      let toast = this.toastCtrl.create({
               message: 'Gymnastic: "' + this.gymnastic.name + '"Has been successfully erased.',
               duration: 2000,
               position: 'bot'
             });
             toast.present();
    });
  }

  deleteGymnasticFromWeb(){
    this.delete(this.idGymnastic);
    console.log("has been successfully erased ")
  }


}
