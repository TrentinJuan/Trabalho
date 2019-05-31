import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-saida',
  templateUrl: './tipo-saida.page.html',
  styleUrls: ['./tipo-saida.page.scss'],
})
export class TipoSaidaPage implements OnInit {
  public formtipoSaida: FormGroup;

  //SEL == ion-select
  public selBtn1: string;
  public selBtn2: string;
  public selBtn3: string;
  public selBtn4: string;
  public selBtn5: string;
  public selBtn6: string;
  public selBtn7: string;
  public selBtn8: string;
  public selBtn9: string;
  public selBtn10: string;
  public selBtn11: string;
  public selBtn12: string;
  public selBtn13: string;
  public selBtn14: string;


  constructor(public formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.formtipoSaida = this.formBuilder.group({
      //combustivel: ['1']
      selBtn1: ['0'],
      selBtn2: ['0'],
      selBtn3: ['0'],
      selBtn4: ['0'],
      selBtn5: ['0'],
      selBtn6: ['0'],
      selBtn7: ['0'],
      selBtn8: ['0'],
      selBtn9: ['0'],
      selBtn10: ['0'],
      selBtn11: ['0'],
      selBtn12: ['0'],
      selBtn13: ['0'],
      selBtn14: ['0']

    })
  }

  public salvar() {

    if (this.salvar) {
      console.log('salvando botao');
      this.router.navigate(['home']);
    }
  }

}