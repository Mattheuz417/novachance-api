const Opportunity = require('../models/opportunityModel');

const opportunityController = {

    getOpportunities: (req, res) => {

        Opportunity.getAll((err, results) => {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json(results);
            }
        });
    },

    createOpportunity: (req, res) => {

        Opportunity.create(req.body, (err, result) => {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json({
                    message: 'Oportunidade criada com sucesso!'
                });
            }
        });
    },

    updateOpportunity: (req, res) => {

        const { id } = req.params;

        Opportunity.update(id, req.body, (err, result) => {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json({
                    message: 'Oportunidade atualizada com sucesso!'
                });
            }
        });
    },

    deleteOpportunity: (req, res) => {

        const { id } = req.params;

        Opportunity.delete(id, (err, result) => {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json({
                    message: 'Oportunidade deletada com sucesso!'
                });
            }
        });
    }
};

module.exports = opportunityController;