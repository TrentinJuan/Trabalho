import { Injectable } from '@angular/core';
import { database } from 'src/app/database/database';
import { tipoSaida } from '../../models/tipoSaida';

@Injectable({
  providedIn: 'root'
})
export class TipoSaidaService {

  constructor(public database: database) { }

  public salvar(tipo: tipoSaida) {
    const sql = `INSERT INTO tiposaida
    (tipoSaida1,
      tipoSaida2,
      tipoSaida3,
      tipoSaida4,
      tipoSaida5,
      tipoSaida6,
      tipoSaida7,
      tipoSaida8,
      tipoSaida9,
      tipoSaida10,
      tipoSaida11,
      tipoSaida12,
      tipoSaida13,
      tipoSaida14)`;

    const params = [
      tipo.tipoSaida1,
      tipo.tipoSaida2,
      tipo.tipoSaida3,
      tipo.tipoSaida4,
      tipo.tipoSaida5,
      tipo.tipoSaida6,
      tipo.tipoSaida7,
      tipo.tipoSaida8,
      tipo.tipoSaida9,
      tipo.tipoSaida10,
      tipo.tipoSaida11,
      tipo.tipoSaida12,
      tipo.tipoSaida13,
      tipo.tipoSaida14,
    ]
    return this.database.db.executeSql(sql, params);
  }

  public alterar(tipo: tipoSaida) {
    const sql = `UPDATE tiposaida SET
    tipoSaida1 = ?, 
    tipoSaida2 = ?, 
    tipoSaida3 = ?,
    tipoSaida4 = ?,
    tipoSaida5 = ?, 
    tipoSaida6 = ?,
    tipoSaida7 = ?
    tipoSaida8 = ?
    tipoSaida9 = ?
    tipoSaida10 = ?
    tipoSaida11 = ?
    tipoSaida12 = ?
    tipoSaida13 = ?
    tipoSaida14 = ?
    WHERE id = ?`;

    const params = [
      tipo.id,
      tipo.tipoSaida1,
      tipo.tipoSaida2,
      tipo.tipoSaida3,
      tipo.tipoSaida4,
      tipo.tipoSaida5,
      tipo.tipoSaida6,
      tipo.tipoSaida7,
      tipo.tipoSaida8,
      tipo.tipoSaida9,
      tipo.tipoSaida10,
      tipo.tipoSaida11,
      tipo.tipoSaida12,
      tipo.tipoSaida13,
      tipo.tipoSaida14,
    ]
    return this.database.db.executeSql(sql, params);
  }

  public montarProprierade(item: any) {
    const add = new tipoSaida();
    add.id = item.id;
    add.tipoSaida1 = item.tipoSaida1,
    add.tipoSaida2 = item.tipoSaida2,
    add.tipoSaida3 = item.tipoSaida3,
    add.tipoSaida4 = item.tipoSaida4,
    add.tipoSaida5 = item.tipoSaida5,
    add.tipoSaida6 = item.tipoSaida6,
    add.tipoSaida7 = item.tipoSaida7,
    add.tipoSaida8 = item.tipoSaida8,
    add.tipoSaida9 = item.tipoSaida9,
    add.tipoSaida10 = item.tipoSaida10,
    add.tipoSaida11 = item.tipoSaida11,
    add.tipoSaida12 = item.tipoSaida12,
    add.tipoSaida13 = item.tipoSaida13,
    add.tipoSaida14 = item.tipoSaida14
    return add;
  }

  public buscarTodos(): Promise<tipoSaida[]> {
    return new Promise((resolve, reject) => {


      const sql = `SELECT * FROM tiposaida`;

      const lista: tipoSaida[] = [];

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

  public buscarPorId(id: number): Promise<tipoSaida> {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM tiposaida WHERE id = ?`;
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
