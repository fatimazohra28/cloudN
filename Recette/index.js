const express = require('express');const app = express();
const port = 3001
app.use(express.json());
app.get('/', (req, res) => {
res.send("Hello world");
});
app.listen(port, (error)=> {
if(!error)
console.log(`Ecoute dans le port ${port}`);
else
console.log(`Erreur de lancement`);});