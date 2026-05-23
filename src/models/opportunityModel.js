const db = require('../config/db');

const Opportunity = {

    getAll: (callback) => {

        const sql = 'SELECT * FROM opportunities';

        db.query(sql, callback);
    },

    create: (data, callback) => {

        const sql = `
            INSERT INTO opportunities
            (titulo, descricao, empresa, tipo, data_publicacao)
            VALUES (?, ?, ?, ?, ?)
        `;

        db.query(
            sql,
            [
                data.titulo,
                data.descricao,
                data.empresa,
                data.tipo,
                data.data_publicacao
            ],
            callback
        );
    },

    update: (id, data, callback) => {

        const sql = `
            UPDATE opportunities
            SET titulo = ?, descricao = ?, empresa = ?, tipo = ?, data_publicacao = ?
            WHERE id = ?
        `;

        db.query(
            sql,
            [
                data.titulo,
                data.descricao,
                data.empresa,
                data.tipo,
                data.data_publicacao,
                id
            ],
            callback
        );
    },

    delete: (id, callback) => {

        const sql = 'DELETE FROM opportunities WHERE id = ?';

        db.query(sql, [id], callback);
    }
};

module.exports = Opportunity;