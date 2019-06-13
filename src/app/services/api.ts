import { HTTP } from '@ionic-native/http/ngx';
import { Injectable } from '@angular/core';

@Injectable()
export class api {
    constructor(private http: HTTP) { }

    /*requisicao com o HTTP, httpRequest
    classe chamada no 'Login.ts'
    no constructor como privado
    IONIC MODEL(Object)// IONIC BINDJson
    */
    public request() {
        return new Promise((resolve, reject) => {
            this.http.get('http://192.168.1.31:9090/?FUNCAO=2&TIPRET=JSON&VERSAO=20190508&USUARI=1', {}, {})
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    }

    public changeButtonStatus(_prCommand: any) {
        return new Promise((resolve, reject) => {
            this.http.get(`http://192.168.1.31:9090/?FUNCAO=102&TIPRET=JSON&VERSAO=20190508&USUARI=1&RQUERY=${_prCommand}`, {}, {})
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        })
    }
}