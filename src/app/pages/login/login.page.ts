import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit, ViewChild, Component } from '@angular/core';
import { IonSlides, ToastController, MenuController, LoadingController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { timeout } from 'q';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;

  public formLogin: FormGroup;
  public loading;
  public login: string;
  public senha: string;



  constructor(public formBuilder: FormBuilder,
    public toastCtrl: ToastController,
    private router: Router,
    public menuCtrl: MenuController,
    public loadingController: LoadingController,
    private http: HTTP) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      login: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  /* ao pressionar 'Cadastrar' eh redirecionado para a tela de cadastro*/
  public registrar() {
    this.slides.slideNext();
  }

  // caso na tela de Cadastroo pressione 'Cancelar', eh redirecionado para a tela de login.
  public cancelar() {
    this.formLogin.reset();
    this.slides.slidePrev();
  }

  //bloqueia o scroll
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }


  //Salvar usuario no localStorege
  public salvar() {
    let user: Array<any> = [];
    let userStorage = localStorage.getItem('user');

    if (userStorage) {
      user = JSON.parse(userStorage);
    }

    user.push(this.formLogin.value);

    localStorage.setItem('user', JSON.stringify(user));

    this.cancelar();
    this.mostrarMensagem('Usuario salvo com sucesso');

  }

  public dismiss() {
    return this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  presentLoadingWithOptions() {
    this.loading = this.loadingController.create({
      spinner: 'bubbles',
      duration: 4000,
      message: 'Aguarde...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
    });

  }

  public logar() {
    this.presentLoadingWithOptions();
    /*http, no constructor do 'Login.ts'.
    derivado de um metodo privado em Services>> api.ts*/
    this.http.get('192.168.1.31:9090', {}, {})
      .then(data => {
        console.log('Success: ', data);
        //this.router.navigate(['home']);
      })
      .catch(error => {
        console.log('Error: ', error);
      });

    let userStorage = localStorage.getItem('user');
    let user: Array<any> = new Array();

    if (userStorage) {
      user = JSON.parse(userStorage);
    }

    let encontrouUsuario = false;
    user.forEach((user, index) => {
      if (user.senha === this.senha && user.login === this.login) {
        encontrouUsuario = true;
        localStorage.setItem('logado', JSON.stringify(user));
      }
    });

    if (encontrouUsuario) {

      this.mostrarMensagem('Login realizado com sucesso');
      this.dismiss()
      //'HOME' VEM DO  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' }, DO APP-ROUTING.MODULE.TS
      this.router.navigate(['home'])
    } else {
      this.mostrarMensagem('Usuario ou Senha Invalidos');

      this.dismiss()


    }
  }


  // Exibe as mensagens apos chamar o metodo
  public mostrarMensagem(msg: string) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => {
      toast.present();
    });
  }

}