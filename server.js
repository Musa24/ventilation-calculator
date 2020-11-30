import express from 'express';
import exphbs from 'express-handlebars';

const app = express();

// Handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Express Handlebars
app.use(express.json());

//Static files
app.use(express.static('public'));

// Route Calculating Costç
app.get('/', (req, res) => {
  res.render('home');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`The server is running at ${PORT}`);
});
