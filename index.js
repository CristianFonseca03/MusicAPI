const express = require('express');
const app = express();
const port = 3000;
//API
const songsAPI = require('./routes/songs');

// body parser
app.use(express.json());

//routes
songsAPI(app);

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});
