const Competitor = require('../models/Competitor');

module.exports = {
    getIndex: function (req, res) {
        Competitor.find({}).then((competitors) => {
            res.render('index', {
                competitors
            });
        });
    },
    getCreate: function (req, res) {
        res.render('create')
    },
    postCreate: function (req, res) {
        let race = req.body;
        Competitor.create(race).then(() => {
            res.redirect('/');
        })
    },
    getEdit: function (req, res) {
        let id = req.params.id;
        Competitor.findById(id).then((competitor) => {
            res.render('edit', {
                competitor
            })
        })
    },
    postEdit: function (req, res) {
        let id = req.params.id;
        let newRace = req.body;
        Competitor.findByIdAndUpdate(id, newRace).then(() => {
            res.redirect('/');
        })
    },
    getDelete: function (req, res) {
        let id = req.params.id;
        Competitor.findById(id).then((competitor) => {
            res.render('delete', {
                competitor
            })
        })
    },
    postDelete: function (req, res) {
        let id = req.params.id;
        Competitor.findByIdAndRemove(id).then(() => {
            res.redirect('/');
        })
    }
};