require('dotenv').config();
const express = require('express');
const cors = require('cors');
const accountRepo = require("./src/repository/account.repository");
const productRepo = require("./src/repository/products.repository");
const cartRepo = require("./src/repository/cart.repository");
const historyRepo = require("./src/repository/history.repository");

const db = require('./src/config/db.config');
const app = express();
const port = process.env.PORT;

//connect to database
db.connectDB();

//middleware
app.use(cors());
app.use(express.urlencoded({extended: true}));

//Endpoint for account
app.post('/signUp', accountRepo.signUp);
app.post('/login', accountRepo.login);
app.delete('/deleteAccount', accountRepo.deleteAccount);
app.get('/ViewUser', accountRepo.getAccountById);

//Endpoint for product
app.post('/registerProduct', productRepo.registerProduct);
app.get('/getProductById', productRepo.getProductById);
app.get('/getProductsByName', productRepo.getProductsByName);
app.get('/getProductsByCategory', productRepo.getProductsByCategory);
app.get('/getProductsByType', productRepo.getProductsByType);
app.get('/getProductsByUserId', productRepo.getProductsByUserId);
app.delete('/removeProduct', productRepo.removeProduct);

//Endpoint for cart
app.post('/addProductToCart', cartRepo.addProductToCart);
app.get('/getCart', cartRepo.getCart);
app.delete('/removeProductFromCart', cartRepo.removeProductFromCart);

//Endpoint for history
app.post('/addCartToHistory', historyRepo.addCartToHistory);
app.update('/finishedTransaction', historyRepo.finishedTransaction);

//Starting server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



