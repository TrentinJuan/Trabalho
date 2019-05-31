import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import { api } from 'src/app/services/api';

import { formatResponse } from './funcao.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public formBotoes: FormGroup;

  //jogar a requisicao dento do Array
  public response: formatResponse[] = [];


  public sensor1: string;// Portao Rua
  public sensor2: string;// Portao Garagem
  public sensor3: string;// Porta Social

  constructor(public formBuilder: FormBuilder,
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public api: api,
    public funcao: formatResponse) {
    this.request();
  }

  ngOnInit() {

    this.formBotoes = this.formBuilder.group({

      sensor1: [null, Validators.required],
      sensor2: [null, Validators.required],
      sensor3: [null, Validators.required]

    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  //criar um response com eval
  //jogar em um array
  // // e jogar no lstBotao
  public request() {
    this.api.request()
      .then(response => {
        console.log('caiu no api request', this.funcao);
      })
      .catch(err => console.log('Error: ', err))
  }



  //Ao clicar, muda de cor
  public clicar(ionicButton) {
    if (this.clicar) {
      console.log('Tikando nos botao')

      if (ionicButton.color === 'secondary')
        ionicButton.color = 'primary';
      else
        ionicButton.color = 'secondary';
    }

  }

  isSelected(event) {
    console.log(event);
    return 'primary';
    //event.target.getAttribute('selected') ? 'primary' : '';
  }
}