// import { Injectable } from '@angular/core';
// import { database } from 'src/app/database/database';
// import { lstBotao } from 'src/models/botoes';

// @Injectable({
//   providedIn: 'root'
// })
// export class BotaoServiceService {

//   constructor(public database: database) { }


//   public listarBotoes(): Promise<lstBotao[]> {
//     return new Promise((resolve, reject) => {


//       const sql = `SELECT * FROM au_liberacao`;
//       const lista: lstBotao[] = [];
//       console.log('Caiu no SQL libera');
//       this.database.db.executeSql(sql, []).then(data => {
//         for (let i = 0; i < data.rows.length; i++) {
//           const item = data.rows.item(i);
//           lista.push(this.montarProprierade(item));
//         }
//         resolve(lista);
//       }).catch(err => {
//         reject(err);
//       });
//     });
//   }

//   public montarProprierade(item: any) {
//     const add = new lstBotao();
//     add.id = item.id;
//     add.botao = item.botao;
//     add.descricao = item.descricao;
//     add.liberacao = item.liberacao;
//     add.usuario = item.usuario;
//     add.sensor = item.sensor;
//     return add;
//   }
// }
