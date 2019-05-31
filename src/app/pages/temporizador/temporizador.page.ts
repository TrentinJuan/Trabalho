import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AddTempo } from '../../../models/temporizador';
import { TempServiceService } from '../../database/temp-service.service';

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.page.html',
  styleUrls: ['./temporizador.page.scss'],
})
export class TemporizadorPage implements OnInit {

  public tempo: AddTempo[] = [];


  constructor(
    private router: Router,
    /*private formBuilder: FormBuilder,*/
    public menuCtrl: MenuController,
    public temp: TempServiceService
  ) { }

  ngOnInit() { }

  public adicionar() {
    console.log('Abriu Add');
    this.router.navigate(['addtemporizador']);
  }

  ionViewDidEnter() {
    this.buscar();
  }

  buscar() {
    
    this.temp.buscarTodos()
      .then(data => {
        this.tempo = data;
      }).catch(err => console.error(err));
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

}
