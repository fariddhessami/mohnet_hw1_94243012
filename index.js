const express = require('express');
const app = express();
//question : what does this line do ?

const PORT = 3000;

var say_sth_hi = module.require('./test_module_1');
say_sth_hi();

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(PORT, () => console.log(`port is listening right now : ${PORT}`));