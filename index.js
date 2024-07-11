const express = require('express')
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');
const app = express()

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// routes
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send('Hello frome the Node API Server Updated');
});



mongoose.connect("mongodb+srv://workjayantjyoti:hY70xe3XdXSDoH7G@backenddb.f4xlmyp.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(
        () => {
            console.log('Database Connected');
            app.listen(3000, () => {
                console.log('Server is running on port 3000')
            });
        }
    )
    .catch(
        () => {
            console.log('Database Connection Failed')
        }
    )