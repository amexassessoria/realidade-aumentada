import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  ngOnInit(){

  }

  close(){
    // this.modalCtrl.dismiss();
  }

}
