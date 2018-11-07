import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewAddPage } from '../addPage/addPage';
import { NewReadPage } from '../readPage/readPage';
import { NewReadAllPage } from '../readAllPage/readAllPage';
import { NewUpdatePage } from '../updatePage/updatePage';
import { NewDeletePage } from '../deletePage/deletePage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToAddPage(){
    this.navCtrl.push(NewAddPage);
  }

  goToReadPage(){
    this.navCtrl.push(NewReadPage);
  }

  goToReadAllPage(){
    this.navCtrl.push(NewReadAllPage);
  }

  goToUpdatePage(){
    this.navCtrl.push(NewUpdatePage);
  }

  goToDeletePage(){
    this.navCtrl.push(NewDeletePage);
  }
  

}
