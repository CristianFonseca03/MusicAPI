const express = require('express');
const app = express();
const port = 3000;
//API
const apiInfo = require('./routes/apiInfo');
const songsAPI = require('./routes/songs');
//middleware
const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

// body parser
app.use(express.json());

//routes
apiInfo(app);
songsAPI(app);

// catch 404
app.use(notFoundHandler);

//middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});
