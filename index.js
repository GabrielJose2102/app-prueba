const express = require('express');

const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
    const htmlResponse = '<html> '+
     '<head><title></title></head>' +
       '<body><h1>Ejecucion de proyecto, subida de backen en vercel</h1>'+
       '</body>' +
       '</html>';
       res.send(htmlResponse);
});

app.listen(port, () => {
    console.log(`port runing in http://localhost:${port}`);
})