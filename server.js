const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path')

app.set("view engine", "ejs");

// CONFIGURAÇÕES DE ROTAS DO SERVIDOR----------------------------------------------------------------------

app.use(express.static('public'));

// app.get("/public", function(req, res){

//   res.render("views/public/styleMenu")
// })

app.get("/", function(req, res){

  res.render("pages/index");
  
});

app.get("/about", function(req, res){

  res.render("pages/about");

});

app.listen(8080);

console.log('Servidor funcionando.');

// FIM CONFIGURAÇÕES DE ROTAS DO SERVIDOR----------------------------------------------------------------------

// RENDERIZAÇÃO LOGO--------------------------------------------------------------------------

app.get('/logo', function(req, res) {
    fs.readFile('views/assets/logotipo.png', function(err, data) {
        if (err) throw err;
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.end(data);
    });
  });

// FIM RENDERIZAÇÃO LOGO--------------------------------------------------------------------------


// RENDERIZAÇÃO PINTURAS-----------------------------------------------------------------------------

const directoryPath1 = path.join(__dirname, 'views/assets/paintings');
const filesArray1 = fs.readdirSync(directoryPath1);



  fs.readdir(directoryPath1, function(err, files) {

    if (err) {
        return console.log('Erro ao ler a pasta: ' + err);
    }


});


filesArray1.forEach(function(file, index) {
  app.get(`/paintings${index}`, function(req, res) {
    const filePath = path.join(directoryPath1, file);
    const fileStream = fs.createReadStream(filePath);
    res.setHeader('Content-Type', 'image/jpg');
    fileStream.pipe(res);
  });
});

// FIM RENDERIZAÇÃO PINTURAS-----------------------------------------------------------------------------

// RENDERIZAÇÃO FOTOGRAFIAS-----------------------------------------------------------------------------

const directoryPath2 = path.join(__dirname, 'views/assets/photographs');
const filesArray2 = fs.readdirSync(directoryPath2);



  fs.readdir(directoryPath2, function(err, files) {

    if (err) {
        return console.log('Erro ao ler a pasta: ' + err);
    }


});

filesArray2.forEach(function(file, index) {
  app.get(`/photographs${index}`, function(req, res) {
    const filePath = path.join(directoryPath2, file);
    const fileStream = fs.createReadStream(filePath);
    res.setHeader('Content-Type', 'image/jpg');
    fileStream.pipe(res);
  });
});

// FIM RENDERIZAÇÃO FOTOGRAFIAS-----------------------------------------------------------------------------

// RENDERIZAÇÃO ESCULTURAS -----------------------------------------------------------------------------
const directoryPath3 = path.join(__dirname, 'views/assets/sculptures');
const filesArray3 = fs.readdirSync(directoryPath3);



  fs.readdir(directoryPath3, function(err, files) {

    if (err) {
        return console.log('Erro ao ler a pasta: ' + err);
    }

});

filesArray3.forEach(function(file, index) {
  app.get(`/sculptures${index}`, function(req, res) {
    const filePath = path.join(directoryPath3, file);
    const fileStream = fs.createReadStream(filePath);
    res.setHeader('Content-Type', 'image/jpg');
    fileStream.pipe(res);
  });
});

// FIM RENDERIZAÇÃO ESCULTURAS -----------------------------------------------------------------------------







