const express = require('express'); 
const app = express(); 
const port = 3030;
const db = require('./queries.js');


app.get('/', (request, response) => { response.json({ info: 'Node.js, Express and Postgres API'}) })

app.get('/contacts', db.getContacts);

app.use(express.json());

app.listen(port, () => { console.log(`App running on port ${port}.`) })

