import { Injectable } from '@angular/core';
import { database } from 'src/app/database/database';
import { ip } from 'src/models/ip';

@Injectable({
  providedIn: 'root'
})
export class IpconfigService {

  constructor(public database: database) { }

  public salvar(ip: ip) {
    const sql = `INSERT INTO configurar(ip, porta)
    VALUES(?, ?)`
    const params = [
      ip.ip, ip.porta
    ]
    return this.database.db.executeSql(sql, params);
  }

  public alterar(ip: ip) {
    const sql = `UPDATE configurar SET ip = ?, porta = ? WHERE id = ?`
    const params = [
      ip.ip, ip.porta, ip.id
    ]
    return this.database.db.executeSql(sql, params);
  }

  public buscarTodos(): Promise<ip[]> {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM configurar`;

      const lista: ip[] = [];

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
    const add = new ip();
    add.id = item.id;
    add.ip = item.ip;
    add.porta = item.porta
    return add;
  }

  public buscarPorId(id: number): Promise<ip> {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM configurar WHERE id = ?`;
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
      const sql = `DELETE FROM configurar WHERE id = ?`;
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