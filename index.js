const express = require('express');
const app = express();
const studentsRoutes = require('./routes/studentsRoutes');
const teachersRoutes = require('./routes/teachersRoutes');

app.get('/', (req, res) => {
    res.send('Hello world!!');
});

app.use('/students', studentsRoutes);
app.use('/teachers', teachersRoutes);

app.listen(6500, () => {
    console.log('Active Server...');
});