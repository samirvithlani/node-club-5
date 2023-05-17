const FormsSchema = require('../model/FormsModel');

exports.getForms = (req, res) => {
    FormsSchema.find({}, (err, forms) => {
        if (err) {
            res.send(err);
        }
        res.json(forms);
    });
}

exports.createForm = (req, res) => {
    const newForm = new FormsSchema(req.body);
    newForm.save((err, form) => {
        if (err) {
            res.send(err);
        }
        res.json(form);
    });
}