const db = require('../models')
const Product = db.products
const OP = db.Sequelize.Op

exports.create = (req, res) => {
    //console.log(req.body)
    Product.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || 'Could not insert the data'
            })
        })
}

exports.findAll = (req, res) => {
    Product.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || 'Some error occurred'
        })
    })
}