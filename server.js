const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3300;

const usersFilePath = path.join(__dirname, 'data', 'users.json');
const docsFilePath = path.join(__dirname, 'data', 'docs.json');

const readJSONFile = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        JSON.parse(data);
        return data;
    } catch (err) {
        console.error(`Erro ao ler o arquivo ${filePath}: ${err.message}`);
        return null;
    }
};

const usersData = readJSONFile(usersFilePath);
const docsData = readJSONFile(docsFilePath);

app.get('/api/users', (req, res) => {
    if (usersData) {
        try {
            const parsedData = JSON.parse(usersData);
            res.status(200).json(parsedData);
        } catch (err) {
            res.status(500).send('Erro ao analisar dados dos usuários.');
        }
    } else {
        res.status(500).send('Erro ao carregar dados dos usuários.');
    }
});

app.get('/api/docs', (req, res) => {
    if (docsData) {
        try {
            const parsedData = JSON.parse(docsData);
            res.status(200).json(parsedData);
        } catch (err) {
            res.status(500).send('Erro ao analisar dados dos documentos.');
        }
    } else {
        res.status(500).send('Erro ao carregar dados dos documentos.');
    }
});

app.use((req, res) => {
    res.status(404).send('404 Página não encontrada');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
