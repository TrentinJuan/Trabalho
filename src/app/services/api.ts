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
        })
    }

    /*
        public request = function () {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', 'http://192.168.1.31:9090/?FUNCAO=2&TIPRET=JSON&VERSAO=20190508&USUARI=1');
                xhr.send(null);
    
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            resolve(JSON.parse(xhr.response));
                            //console.log(resolve);
                        } else {
                            reject('Errow');
                        }
                    }
                }
            });
        }
        */



}