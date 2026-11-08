# ANTBRO × GRP INTERNATIONAL — Bureau PRO V5

Application web mobile et ordinateur pour le bureau d'Antbro et GRP International, conçue en collaboration avec MEYDEN.

## Modules

- DJ : fiches, progression, historique, liens TikTok/Hedliner.
- Gestion des espaces GRP : répertoire des groupes, missions, liens et règles.
- Entrevues : préparation des 50 questions, rendez-vous, dossiers.
- Booking : opportunités, propositions, suivis.
- Communications : annonces, journal, courriels et rapports.
- **ANTBRO TV** : moniteur des entrevues via playlist YouTube et moniteur des directs YouTube/Twitch, avec sélection manuelle du mode public.

## Installation

Déployer la racine du dépôt comme site statique sur Vercel. Le fichier d'entrée est `index.html`. La configuration n'exige aucun secret ni framework.

## Limites importantes

Les dossiers sont stockés **dans le navigateur** (`localStorage`), sans synchronisation entre appareils. Exporter les sauvegardes JSON et les conserver hors de ce dépôt public. Les courriels sont préparés dans la messagerie de l'utilisateur mais ne partent pas automatiquement. Les groupes TikTok ne sont pas administrés directement et les directs TikTok ne sont pas intégrés. Pour une exploitation multiutilisateur : authentification, base sécurisée et permissions sont à développer.

Les lecteurs vidéo nécessitent des liens autorisant l'intégration. Les images proviennent des visuels de référence fournis pour Antbro.

MEYDEN : partenaire de conception. La gestion et les décisions internes restent sous la responsabilité de GRP International.
