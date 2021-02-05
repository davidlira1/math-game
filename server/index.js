const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
// app.use(express.static('node_modules/react'));
// app.use(express.static('node_modules/react-dom'));

app.listen(port, (err) => {
    if(err) console.error(err);
    console.log(`Listening on port ${port}`);
})
