const express = require('express');
const cors = require('cors');
const app = express();
const studentsRoutes = require('./routes/studentsRoutes');
const teachersRoutes = require('./routes/teachersRoutes');
const coursesRoutes = require('./routes/coursesRoutes');

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello world!!');
});

app.use('/students', studentsRoutes);
app.use('/teachers', teachersRoutes);
app.use('/courses', coursesRoutes);

app.listen(6500, () => {
    console.log('Active Server...');
});