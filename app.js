const express = require('express');
const app = express();

const port = app.listen(process.env.PORT || 3000);

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Running on ${port}`);
})