import express from 'express';
import { fileURLToPath } from 'node:url';

const app = express();
app.set('view engine', 'ejs');
app.set('views', fileURLToPath(new URL('./views/', import.meta.url)));
app.use(express.json());

const citations = [{ id: 1, texte: 'Apprendre en pratiquant.', auteur: 'Équipe du TP' }];
let prochainId = 2;

app.get('/', (req, res) => {
    res.render('index', { citations });
});

app.get('/ping', (req, res) => {
    res.type('text/plain').send('Serveur de citations prêt.');
});

app.get('/citations', (req, res) => {
    res.json(citations);
});

app.get('/citations/:id', (req, res) => {
    // TODO : convertir l’ID en nombre, chercher la citation et gérer son absence.
    const id = Number(req.params.id);
    const citation = citations.find((element) => element.id === id);
    if (!citation) {
        res.status(404).json({ message: 'errore 404' });
    }
    res.json({ citation });
});

app.post('/citations', (req, res) => {
    // TODO : valider req.body, créer une citation et incrémenter prochainId.
    let citation = req.body;
    citations.push({ id: citations.length + 1, texte: citation.texte, auteur: citation.auteur });
    res.json({ message: citations[citations.length - 1] });
});

app.put('/citations/:id', (req, res) => {
    // TODO : retrouver la citation et remplacer texte et auteur après validation.
    const id = Number(req.params.id);
    let citation = req.body;

    citations[id - 1].texte = citation.texte;
    citations[id - 1].auteur = citation.auteur;

    res.json({ message: citations[id - 1] });
});

app.delete('/citations/:id', (req, res) => {
    // TODO : retirer la citation du tableau et terminer la réponse.
    const id = Number(req.params.id);

    delete citations[id - 1].texte;
    delete citations[id - 1].id;
    delete citations[id - 1].auteur;

    res.json({ message: citations[id - 1] });
});

app.listen(3000, () => {
    console.log('API disponible sur http://localhost:3000');
});
