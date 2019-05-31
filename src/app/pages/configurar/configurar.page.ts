import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { database } from 'src/app/database/database';

@Component({
  selector: 'app-configurar',
  templateUrl: './configurar.page.html',
  styleUrls: ['./configurar.page.scss'],
})
export class ConfigurarPage implements OnInit {

  public formIp: FormGroup;

  public ip: number;
  public porta: number;



  constructor(public formBuilder: FormBuilder,
    public toastCtrl: ToastController,
    private router: Router,
    public menuCtrl: MenuController,
    public db: database) { }

  ngOnInit() {
    this.formIp = this.formBuilder.group({
      ip: [null, Validators.required],
      porta: [null, Validators.required]
    });
  }


  public salvar() {
    if (this.salvar) {
      this.db.criarBanco() 
        .then( () => this.router.navigate(['login']))
        .catch( (err) => alert(console.log(err)))
    }
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

}
