const express = require('express');
const cors = require('cors');
const port = 5000;
const app = express();
const db = require('./mongoDb')
app.use(cors());
app.use(express.json())
app.get('/api/products', (req, res) => {
    db.getAllProducts()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Internal Server Error");
        });
});
app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    db.posteprod(newProduct)
        .then((result) => {
            res.status(201).json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        });
});
app.delete('/api/products/:_id', (req, res) => {
    const productId = req.params._id;
    db.deleteprod(productId)
        .then((result) => {
            res.status(204).send("product deleted");
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send({ error: "Internal Server Error" });
        });
});
app.put('/api/products/:_id', (req, res) => {
    const productId = req.params._id;
    const updatedProduct = req.body;
    db.updateprod(productId, updatedProduct)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        });
});
app.post('/api/user/add', (req, res) => {
    db.addUSer(req.body).then((result) => {
        res.status(200).json(result)
    }).catch((err) => { res.status(200).json(err) })
})
app.post('/api/login', (req, res) => {
    db.getUser(req.body.email).then((result) => {
        if (result) {
            if (result.password) {
                res.json("success")
            } else {
                res.json("the password is incorrect")
            }
        } else {
            res.json("no record exist ")
        }
    }).catch((err) => res.status(500).json)
})
app.listen(port, () => {
    console.log(`listening on ${port}`);
})






