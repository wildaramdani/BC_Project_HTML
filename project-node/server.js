const express = require('express');
const app = express();
const path = require('path');

// app.get('/', function(req,res){
//}

// cara baru route halaman index
app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, 'index.html'));
});

//create public folder
    app.use(express.static(__dirname + '/public'));


// create server
const port = process.env.PORT || 3000;
app.listen(port,() =>{
    console.log(`server berjalan pada port ${port}`);
});