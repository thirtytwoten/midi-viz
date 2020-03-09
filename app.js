let path = require('path'),
    express = require('express'),
    exphbs = require('express-handlebars')
    helpers = require('./lib/helpers');

let app = express();
let port = process.argv[2] || process.env.PORT || 3000;
let hostname = process.env.IP || "0.0.0.0";
let hbs = exphbs.create({
      defaultLayout: 'main',
      helpers: helpers,
      partiailsDir: 'views/partials'
    });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('home', {
    song: helpers.findSongByName(req.query.songName) || helpers.featuredSongs[0]
  });
});

app.get('/stacked', function (req, res) {
  res.render('stacked', {
    graph: {
      id: 'bwv846',
      data: helpers.getGraphData(__dirname + '/public/songs/bwv-846.midi.json')
    }
  });
});

app.get('/ksp', function (req, res) {
  res.render('ksp', {
  });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, hostname);
console.log(`app listening on ${hostname}:${port}`);
