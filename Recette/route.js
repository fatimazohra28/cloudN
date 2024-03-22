const express = require('express');
const router = express.Router();
const Recette = require('./recette');

// Route pour récupérer la liste de toutes les recettes
router.get('/all', (req, res) => {
  Recette.find({})
    .then(recettes => {
      res.json(recettes);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la récupération des recettes' });
    });
});

// Route pour ajouter une recette
router.post('/add', (req, res) => {
  const newRecette = new Recette({
    libelle: req.body.libelle
  });

  newRecette.save()
    .then(() => {
      res.status(201).json({ message: 'Recette ajoutée avec succès' });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de l\'ajout de la recette' });
    });
});

// Route pour mettre à jour les informations d'une recette
router.put('/update/:name', (req, res) => {
  const recetteName = req.params.name;
  const updatedRecetteData = {
    libelle: req.body.libelle
  };

  Recette.findOneAndUpdate({ libelle: recetteName }, updatedRecetteData)
    .then(() => {
      res.json({ message: 'Informations de la recette mises à jour avec succès' });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la mise à jour des informations de la recette' });
    });
});

// Route pour supprimer une recette
router.delete('/delete/:name', (req, res) => {
  const recetteName = req.params.name;

  Recette.findOneAndDelete({ libelle: recetteName })
    .then(() => {
      res.json({ message: 'Recette supprimée avec succès' });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la suppression de la recette' });
    });
});

module.exports = router;
