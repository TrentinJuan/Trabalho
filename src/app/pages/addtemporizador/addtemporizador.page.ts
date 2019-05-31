import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { AddTempo } from '../../../models/temporizador';
import { database } from '../../database/database';

@Component({
  selector: 'app-addtemporizador',
  templateUrl: './addtemporizador.page.html',
  styleUrls: ['./addtemporizador.page.scss'],
})
export class AddtemporizadorPage implements OnInit {


  public formAdd: FormGroup;
  public idAlteracao: string;

  public saida: string;
  public acao: string;
  public dia: string;
  public mes: string;
  public hora: string;
  public minuto: string;


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    public tempService: database,
    public menuCtrl: MenuController,
  ) { }

  ngOnInit() {

    this.formAdd = this.formBuilder.group({
      saida: [null, Validators.required],
      acao: [null, Validators.required],
      dia: [null, Validators.required],
      mes: [null, Validators.required],
      hora: [null, Validators.required],
      minuto: [null, Validators.required]
    });

  }

  public salvar() {
    if (this.salvar) {
      console.log('salvando botao');
      const values = this.formAdd.value;
      const temp = new AddTempo();

  
      temp.saida = parseInt(values.saida);
      temp.acao = parseInt(values.acao);
      temp.dia = parseInt(values.dia);
      temp.mes = parseInt(values.mes);
      temp.hora = parseInt(values.hora);
      temp.minuto = parseInt(values.minuto);

      this.router.navigate(['/temporizador']);

      /*if(this.idAlteracao){
        temp.id = this.idAlteracao;

      }*/
    }
  }

}
