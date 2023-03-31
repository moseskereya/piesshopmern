const express = require('express');
const connectDB = require('./Config/db');
const cors = require('cors');
const app = express();
const pies = require('./routes/api/pies')

connectDB();
app.use(cors({ origin: true, credentials: true }));
app.get('/', (req, res) => res.send('Hello world'));
app.use(express.json({ extended: false }));
app.use('/api/pies', pies)
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server Listeining on port ${port}`));

if (process.env.NODE_ENV === 'production') {
    //*Set static folder up in production
    app.use(express.static('frontend/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}