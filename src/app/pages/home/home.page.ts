import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { api } from 'src/app/services/api';


import { formatResponse, enCripta, MD5 } from './funcao';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public formBotoes: FormGroup;

  public sensor1: string;// Portao Rua
  public sensor2: string;// Portao Garagem
  public sensor3: string;// Porta Social


  // public lista = [{ BOTOES_LIB: "6", DESCRI_LIB: "S6", ENABLE_LIB: "0" },
  // { BOTOES_LIB: "7", DESCRI_LIB: "S7", ENABLE_LIB: "0" }];


  // Lista dos botoes puxados do servidor
  public listaBotao: any = [];


  constructor(public formBuilder: FormBuilder,
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public api: api,
    public toastCtrl: ToastController) {
    // Chamada do metodo public request()
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


  // Criar um response com eval
  //jogar em um array
  public request() {
    this.api.request()
      .then(response => {
        //this.lista = response;
        this.listaBotao = formatResponse(String(response));
      })
      .catch(err => console.log('Error: ', err));
  }

  public isExecutionOperation: false;

  handlerExecuteAction = (_prButton, _prData) => {
    const paramSeparator = '<#>';

    let codigoUser = '1';

    if (this.isExecutionOperation) return;

    let command = String(_prData.BOTOES_LIB);
    command += paramSeparator;

    command += codigoUser;
    command += paramSeparator;
    command += MD5('ZeBala159');

    command += paramSeparator;
    console.log('command ' + command);
    command = enCripta(command);
    console.log(command);
    console.log(enCripta(command));
    command = command.replace(/#/g, '%23');

    try {
      this.api.changeButtonStatus(command.replace(/ /g, ''))
        .then(response => {
          console.log('Response: ', response);
          if (response === 'OK') {
            let buttons = [... this.listaBotao];
            buttons.map(btn => {
              if (btn.BOTOES_LIB == _prData.BOTOES_LIB) {
                btn.active = !btn.active;
                if (_prButton.color === 'secondary')
                  _prButton.color = 'primary';
                else
                  _prButton.color = 'secondary';
              }
              return btn;
            });
          } else {
            this.mostrarMensagem('Não foi possível realizar a ação');
          }
        })
        .catch(err => {
          this.mostrarMensagem('Erro ao se comunicar com o servidor')
        });
    } catch (err) {
      this.mostrarMensagem('Não foi possível realizar a ação');
    }
  }


  public mostrarMensagem(msg: string) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => {
      toast.present();
    });
  }




  //Ao clicar, muda de cor
  /*public clicar(ionicButton) {
    if (this.clicar) {
      this.api.request()
        .then(response => {
          this.listaBotao = MD5(enCripta((response)));
        })
        .catch(err => console.log('Errou ', err));
    }
   
    if (ionicButton.color === 'secondary')
      ionicButton.color = 'primary';
    else
      ionicButton.color = 'secondary';
  }*/

  isSelected(event) {
    console.log(event);
    return 'primary';
    //event.target.getAttribute('selected') ? 'primary' : '';
  }
}