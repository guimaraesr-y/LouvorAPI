const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const userRouter = require('./user.route');
const apiRouter = require('./api.route');

app.use(express.json());
app.use('/user', userRouter);
app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.json({'status':'running'})
})

app.listen(port, () => console.log('[+] server listening on port', port));