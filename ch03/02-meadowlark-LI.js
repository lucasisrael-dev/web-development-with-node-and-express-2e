const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main-LI'
}));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('home-LI');
});


app.get('/about', (req, res) => {
    const fortunes = [
        "Você vai engravidar este ano.",
        "Um bilhete da mega sena lhe espera este ano.",
        "O amor da sua vida vai se render ao seu charme este ano.",
        "Você receberá uma grata surpresa.",
        "Matenha a casa limpa, alguem muito querido está vindo de longe."
    ];
    const randonFortune = fortunes[Math.floor(Math.random()*fortunes.length)];
    res.render('about-LI', {fortune: randonFortune});
});

// página 404 personalisada
app.use((req, res) => {
    res.status(404);
    res.render('404-LI');
});

// página 500 personalisada
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500);
    res.render('500-LI');
});

app.listen(port, () => {
    console.log(`Express started on http://172.29.123.153:${port}; ` + `press CTRL-C to terminate.`);
});