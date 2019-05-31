import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-links',
  templateUrl: './links.page.html',
  styleUrls: ['./links.page.scss'],
})
export class LinksPage implements OnInit {

  public formUser: FormGroup;

  public nome: string;
  public endereco: string;
  // estado de Ativo ou Inativo, nao de estado.
  public estado: string

  constructor(public menuCtrl: MenuController,
    public formBuilder: FormBuilder,
    public router: Router) { }

  ngOnInit() {
    this.formUser = this.formBuilder.group({
      nome: [null, Validators.required],
      endereco: [null, Validators.required],
      estado: ['0']
    })
  }

  public salvar(){
    if(this.salvar){
      console.log('salvou bb');
      this.router.navigate(['home']);
    }
  }
  
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
}
