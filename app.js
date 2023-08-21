const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')

const session = require('express-session')
const SessionStore = require('connect-mongodb-session')(session)
const flash = require('connect-flash')

const app = express()

const homeRouter = require('./routes/home.route');
const productRouter = require('./routes/product.route')
const authRouter = require('./routes/auth.route')

const cartRouter = require('./routes/cart.route')
app.use(express.static(path.join(__dirname, "assets")));
app.use(express.static(path.join(__dirname, "images")));
app.use(flash())
const STORE = new SessionStore({

  uri: 'mongodb://localhost:27017/online-shop',
  collection: "sessions"
})

app.use(session({
  secret: 'this is my secret secret to hach express sessions ....',
  saveUninitialized: true,
  store: STORE
}))

app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});


app.set('view engine', 'ejs')
app.set('views', 'views') //default 

app.use(bodyParser.urlencoded({ extended: true }))
app.use("/product", productRouter)
// app.use("/products", productsRouter)
app.use('/cart', cartRouter)
app.use('/', homeRouter)
app.use('/', authRouter)

app.listen(3000, (err) => {
  console.log("server listen on port 3000");
});

