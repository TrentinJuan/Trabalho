import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public paginas = [
    {
      label: 'Renomear Botões',
      url: '/configuracao',
      icon: 'book'
    },

    {
      label: 'Tipo de Saida',
      url: '/tipo-saida',
      icon: 'bulb'
    },

    {
      label: 'Temporizador',
      url: '/temporizador',
      icon: 'timer'
    },
    {
      label: 'Links',
      url: '/links',
      icon: 'create'
    },

    {
      label: 'Configurar IP',
      url: '/configurar',
      icon: 'key'
    }
  ];

  public showSplash = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router
  ) {
    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide(); // <-- hide static image
      timer(2000).subscribe(() => this.showSplash = false) // <-- hide animation after 3s
    });
  }

  sair(){
    if(this.sair){
      localStorage.removeItem('logado');
      this.router.navigate(['login']);
    }
  }
}
