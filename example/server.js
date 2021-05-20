const express = require('express');
const fileUpload = require('../lib/index');
const app = express();
const { exec } = require("child_process");
const PORT = 80;
app.use('/form', express.static(__dirname + '/index.html'));

// default options
app.use(fileUpload());

app.get('/ping', function(req, res) {
  res.send('pong');
});

app.post('/upload', function(req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send('No files were uploaded.');
    return;
  }

  console.log('req.files >>>', req.files); // eslint-disable-line

  sampleFile = req.files.sampleFile;

  uploadPath = __dirname + '/uploads/' + sampleFile.name;
  console.log(`uploadPath: ${uploadPath}`)

  sampleFile.mv(uploadPath, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
   exec(`bash script.sh ` + uploadPath, (error, stdout, stderr) => {
      if (error) {
         console.log(`error: ${error.message}`);
     }
     if (stderr) {
         console.log(`stderr: ${stderr}`);
     }
      console.log(`stdout: ${stdout}`);
    res.send(stdout);
    });


  });
});

app.listen(PORT, function() {
  console.log('Express server listening on port ', PORT); // eslint-disable-line
});
