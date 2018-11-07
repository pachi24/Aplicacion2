import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-readPage',
  templateUrl: 'readPage.html'
})
export class NewReadPage {

  gymnastic: any = {name: '', year: ''};
  idGymnastic : number;

  constructor(public navCtrl: NavController, public servicioRead: UserServiceProvider) {

  }

  getGymnastic(id){
    console.log(id);
    this.servicioRead.get(id).subscribe(
      (gymnastic: {name: string, year: number}) => {
        this.gymnastic = gymnastic;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getGymnasticFromWeb(){
    console.log(this.idGymnastic);
    this.getGymnastic(this.idGymnastic);
  }

}
