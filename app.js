const express = require('express');
const bodyParser = require('body-parser');
const app = express();





const usersDatabase = [
    { facultyId: 'TTS19265', password: '19265' },
    { facultyId: 'TTS19292', password: '21292' },
    { facultyId: 'TTS19233', password: '19233' },
    
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

app.post('/dash', (req, res) => {
    const facultyId = req.body.username;
    const password = req.body.password;
    console.log(password)   
    console.log(facultyId)
    
    const user = usersDatabase.find((user) => user.facultyId === facultyId && user.password === password);
    for(i=0;i<4;i++){
        if (user) {
            res.sendFile(__dirname + '/public/dash.html');
        } else {
            res.status(401).send('Login failed. Check your credentials.');
        }
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
