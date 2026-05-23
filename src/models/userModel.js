const db = require('../config/db');

const User = {

    getAll: (callback) => {
        const sql = 'SELECT * FROM users';
        db.query(sql, callback);
    },

    create: (data, callback) => {

        const sql = `
            INSERT INTO users
            (nome, email, senha, idade, area_interesse)
            VALUES (?, ?, ?, ?, ?)
        `;

        db.query(
            sql,
            [
                data.nome,
                data.email,
                data.senha,
                data.idade,
                data.area_interesse
            ],
            callback
        );
    },

    update: (id, data, callback) => {

        const sql = `
            UPDATE users
            SET nome = ?, email = ?, idade = ?, area_interesse = ?
            WHERE id = ?
        `;

        db.query(
            sql,
            [
                data.nome,
                data.email,
                data.idade,
                data.area_interesse,
                id
            ],
            callback
        );
    },

    delete: (id, callback) => {

        const sql = 'DELETE FROM users WHERE id = ?';

        db.query(sql, [id], callback);
    }
};

module.exports = User;