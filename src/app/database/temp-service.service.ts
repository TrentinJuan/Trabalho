import { Injectable } from '@angular/core';
import { database } from './database';
import { AddTempo } from '../../models/temporizador';

@Injectable({
  providedIn: 'root'
})
export class TempServiceService {

  constructor(public database: database) { }


  public salvar(add: AddTempo) {
    const sql = `INSERT INTO temporizador(saida, acao, dia, mes, hora, minuto)
    VALUES(?, ?, ?, ? ,? ,?)`;
    const params = [
      add.saida, add.acao, add.dia, add.mes, add.hora, add.minuto
    ]

    return this.database.db.executeSql(sql, params);
  }

  public alterar(add: AddTempo) {
    const sql = `UPDATE temporizador SET
    saida = ?, acao = ?, dia = ?, mes = ?, hora = ?, minuto = ?
    WHERE id = ?`;

    const params = [
      add.saida, add.acao, add.dia, add.mes, add.hora, add.minuto, add.id
    ]

    return this.database.db.executeSql(sql, params);
  }

  public buscarTodos(): Promise<AddTempo[]> {
    return new Promise((resolve, reject) => {


      const sql = `SELECT * FROM temporizador`;

      const lista: AddTempo[] = [];

      this.database.db.executeSql(sql, []).then(data => {

        for (let i = 0; i < data.rows.length; i++) {
          const item = data.rows.item(i);

          lista.push(this.montarProprierade(item));
        }
        resolve(lista);
      }).catch(err => {
        reject(err);
      });
    });
  }

  public montarProprierade(item: any) {
    const add = new AddTempo();
    add.saida = item.saida;
    add.acao = item.acao;
    add.dia = item.dia;
    add.id = item.id;
    add.mes = item.mes;
    add.hora = item.hora;
    add.minuto = item.minuto;
    return add;
  }

  public buscarPorId(id: number): Promise<AddTempo> {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM temporizador WHERE id = ?`;
      this.database.db.executeSql(sql, [id]).then(data => {

        if (data.rows.length > 0) {
          const add = this.montarProprierade(data.rows.item(0));
          resolve(add);
        }
        resolve(null);
      }).catch(err => reject(err));
    });
  }

  public excluir(id: number) {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM temporizador WHERE id = ?`;
      this.database.db.executeSql(sql, [id]).then(data => {
        if (data.rows.length > 0) {
          const add = this.montarProprierade(data.rows.items(0));
          resolve(add);
        }
        resolve(null);
      }).catch(err => reject(err));

    });
  }
}
