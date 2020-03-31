import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

  categories: any;
  category: string;


  

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.categories= ['Combo' , 'Açais', 'Macarrão' , 'Café da Manhã' , 'Tapioca' , 'PCs'];
    this.category = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaPage');
  }

  abrirProduto(): void {
    this.navCtrl.setRoot('TabsPage');
  }

}
