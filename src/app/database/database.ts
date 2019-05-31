import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class database {

    public db: SQLiteObject;

    constructor(private sqlite: SQLite) { }

    /*Funca que retorna a criacao das tabelas*/
    public criarBanco() {
        return new Promise((resolve, reject) => {
            this.sqlite.create({
                name: 'tjautomacao',
                location: 'default'
            }).then((db: SQLiteObject) => {
                this.db = db;
                this.tableConfig(db).then(() => {
                    this.tableTemp(db).then(() => {
                        this.tableLiberacao(db).then(() => {
                            this.tableUsuario(db).then(() => {
                                resolve();
                            }).catch(err => reject(err));
                        }).catch(err => reject(err));
                    }).catch(err => reject(err));
                }).catch(err => reject(err));
            }).catch(err => {
                reject(err);
            });
        });
    }

    /* Tabela de Usuario */
    public tableUsuario(db: SQLiteObject) {
        return db.executeSql(`CREATE TABLE IF NOT EXISTS usuario(id_user INTEGER PRIMARY KEY, nome VARCHAR(100), senha VARCHAR(50))`,
            []);

    }
    /* Tabela de Configuracao de ip, porta...*/
    public tableConfig(db: SQLiteObject) {
        return db.executeSql(
            `CREATE TABLE IF NOT EXISTS configurar(
                    id_config INTEGER PRIMARY KEY, ip VARCHAR(50), porta VARCHAR(50))`,
            []);
    }


    /* Tabela Temporizador */
    public tableTemp(db: SQLiteObject) {
        return db.executeSql(
            `CREATE TABLE IF NOT EXISTS temporizador(
            id_temp INTEGER PRIMARY KEY,
            saida integer,
            acao integer,
            dia integer,
            mes integer,
            hora integer,
            minuto integer
        )`, []);
    }

    public tableLiberacao(db: SQLiteObject) {
        return db.executeSql(
            `CREATE TABLE IF NOT EXISTS au_liberacao(
                id_temp INTEGER PRIMARY KEY,
                usuario_lib integer,
                botoes_lib integer,
                descri_lib VARCHAR(50),
                sensor_lib integer,
                libera_lib integer
            )`, []);
    }



    // /*Tabela de Tipo-Saida*/
    // public tableTipoSaida(db: SQLiteObject) {
    //     return db.executeSql(
    //         `CREATE TABLE IF NOT EXISTS tiposaida(
    //             id_tiposaida INTEGER PRIMARY KEY,
    //             tipo_saida1 INTEGER,
    //             tipo_saida2 INTEGER,
    //             tipo_saida3 INTEGER,
    //             tipo_saida4 INTEGER,
    //             tipo_saida5 INTEGER,
    //             tipo_saida6 INTEGER,
    //             tipo_saida7 INTEGER,
    //             tipo_saida8 INTEGER,
    //             tipo_saida9 INTEGER,
    //             tipo_saida10 INTEGER,
    //             tipo_saida11 INTEGER,
    //             tipo_saida12 INTEGER,
    //             tipo_saida13 INTEGER,
    //             tipo_saida14 INTEGER
    //         )`, []);
    // }

    // /* Tabela Link */
    // public tableLink(db: SQLiteObject) {
    //     return db.executeSql(
    //         `CREATE TABLE IF NOT EXISTS link(
    //             id_link INTEGER PRIMARY KEY,
    //             nome VARCHAR(100),
    //             endereco VARCHAR(100),
    //             estado INTEGER
    //         )`, []);
    // }


}