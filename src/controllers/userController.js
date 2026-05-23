const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const userController = {

    getUsers: (req, res) => {

        User.getAll((err, results) => {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json(results);
            }
        });
    },

    createUser: async (req, res) => {

        const {
            nome,
            email,
            senha,
            idade,
            area_interesse
        } = req.body;

        const senhaHash = await bcrypt.hash(senha, 10);

        User.create(
            {
                nome,
                email,
                senha: senhaHash,
                idade,
                area_interesse
            },
            (err, result) => {

                if (err) {
                    res.status(500).json(err);
                } else {
                    res.json({
                        message: 'Usuário criado com sucesso!'
                    });
                }
            }
        );
    },

    updateUser: (req, res) => {

        const { id } = req.params;

        User.update(id, req.body, (err, result) => {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json({
                    message: 'Usuário atualizado com sucesso!'
                });
            }
        });
    },

    deleteUser: (req, res) => {

        const { id } = req.params;

        User.delete(id, (err, result) => {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json({
                    message: 'Usuário deletado com sucesso!'
                });
            }
        });
    }
};

module.exports = userController;