import express from 'express';
import exphbs from 'express-handlebars';
import path from "path";

// Iniciar
const app = express();

// Settings
app.set('port', process.env.PORT || 3002);
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts' ),
    partialsDir: path.join(app.get('views'), 'partials' ),
    helpers: require('./lib/helpers')
}));

app.set('view engine', '.hbs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Routes
app.get('/books', (req,res)=>{
    return res.send('BOOKS')
})

// Static files
app.use(express.static(path.join(__dirname, 'public')))


// start server
app.listen(app.get('port'),()=>{
    console.log('Server  en el puerto '+ app.get('port'));
})