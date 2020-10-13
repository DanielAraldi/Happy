import express from 'express';

import './database/connection';

const app = express();

app.use(express.json())

app.post('/orphanages', (request, response) => {
    console.log(request.body)
    return response.json({ message: 'Hello World!' })
});

app.listen(3333);