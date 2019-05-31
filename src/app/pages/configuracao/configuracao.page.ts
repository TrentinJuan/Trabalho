import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {

  public formRename: FormGroup;

  public portao1: string;
  public portao2: string;
  public portao3: string;
  public portao4: string;
  public portao5: string;
  public portao6: string;
  public portao7: string;
  public portao8: string;
  public portao9: string;
  public portao10: string;
  public portao11: string;
  public portao12: string;
  public portao13: string;
  public portao14: string;
  public portao15: string;

  public sensor1: string;
  public sensor2: string;
  public sensor3: string;

  constructor(public formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.formRename = this.formBuilder.group({
      portao1: [null, Validators.required],
      portao2: [null, Validators.required],
      portao3: [null, Validators.required],
      portao4: [null, Validators.required],
      portao5: [null, Validators.required],
      portao6: [null, Validators.required],
      portao7: [null, Validators.required],
      portao8: [null, Validators.required],
      portao9: [null, Validators.required],
      portao10: [null, Validators.required],
      portao11: [null, Validators.required],
      portao12: [null, Validators.required],
      portao13: [null, Validators.required],
      portao14: [null, Validators.required],
      portao15: [null, Validators.required],

      sensor1: [null, Validators.required],
      sensor2: [null, Validators.required],
      sensor3: [null, Validators.required]
    })
  }

  public salvar() {
    if (this.salvar) {
      console.log('salvando botao');
      this.router.navigate(['home']);
    }
  }

}