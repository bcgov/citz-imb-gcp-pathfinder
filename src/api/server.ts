const express = require('express');
const app = express();

const port = process.env.PORT || 5050;


app.listen(port, (err) => {
    if (err) console.log(err);
    console.info (`Server started on port ${port}`)
})
