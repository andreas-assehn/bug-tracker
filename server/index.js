const express = require('express');
const app = express();
const port = 3001;
const router = require('./router');
const cors = require('cors');




app.use(cors());
app.use(router);

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));