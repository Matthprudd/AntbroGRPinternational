/* ANTBRO × GRP — bilingual UI. Translating labels never modifies form option values or artist records. */
(() => {
  'use strict';
  const PREF='antbro_grp_interface_language';
  const DATA='grp_antbro_bureau_pro_v5_20261107';
  let lang='fr';
  try {
    const saved=localStorage.getItem(PREF);
    const backup=JSON.parse(localStorage.getItem(DATA)||'null');
    lang=['fr','en'].includes(saved)?saved:(backup?.settings?.language==='en'?'en':'fr');
  }catch{}
  const strings={
    // Navigation and chrome
    'QUARTIER GÉNÉRAL':'HEADQUARTERS','Tableau de bord':'Dashboard','DJ & artistes':'DJs & artists',
    'Groupes GRP':'GRP groups','Entrevues LIVE':'LIVE interviews','ANTBRO TV · Moniteurs':'ANTBRO TV · Monitors',
    'Babillard':'Noticeboard','Journal & suivis':'Activity & follow-ups','Courriels & dossiers':'Emails & files',
    'Bilans':'Reports','Réglages':'Settings','Accueil':'Home','Groupes':'Groups',
    'BUREAU ARTISTIQUE PRO':'PRO ARTIST OFFICE','Conçu par MEYDEN · Partenaire technique':'Designed by MEYDEN · Technical partner',
    'Décisions internes : GRP International':'Internal decisions: GRP International',
    "Les décisions, adhésions et validations demeurent sous l'autorité de GRP.":'All internal decisions, memberships and approvals remain with GRP.',
    'Infrastructure et conception MEYDEN':'Infrastructure and design by MEYDEN',
    'Rechercher un DJ...':'Search for a DJ...','Rechercher un DJ':'Search for a DJ',
    'Exporter une sauvegarde':'Export a backup','Ouvrir le menu':'Open menu','Fermer':'Close',
    'Enregistrer les réglages':'Save settings','Enregistrer':'Save','Annuler':'Cancel','Supprimer':'Delete','Modifier':'Edit','Créer':'Create',
    'Langue de l’interface':'Interface language','Choisir la langue':'Choose language',
    // Home
    'LE BUREAU CENTRAL DE GRP':'GRP CENTRAL OFFICE','Un réseau.':'One network.','Un seul bureau.':'One office.',
    "Regrouper les espaces TikTok, accompagner les DJ et préparer chaque communication sans perdre l'historique du travail.":
      'Connect the TikTok communities, support DJs and organize every communication while keeping a complete work history.',
    'Ajouter un DJ':'Add a DJ','Préparer un dossier':'Prepare a file',
    'ARTISTES SUIVIS':'TRACKED ARTISTS','ESPACES RÉPERTORIÉS':'LISTED SPACES',
    'ENTREVUES PLANIFIÉES':'SCHEDULED INTERVIEWS','OPPORTUNITÉS':'OPPORTUNITIES',
    'DJ & ARTISTES':'DJS & ARTISTS','Voir tous les DJ':'View all DJs',
    'Aucun artiste dans le bureau':'No artists in the office yet',
    'Ajoutez la première fiche : elle alimentera ensuite les entrevues, le booking et les dossiers courriel.':
      'Create the first artist profile to connect interviews, booking and email dossiers.',
    'Créer une fiche DJ':'Create a DJ profile','GROUPES GRP':'GRP GROUPS','Gérer les espaces':'Manage groups',
    'Organisation':'Organization','Apprentissage':'Learning','Communauté':'Community','Émission':'Show',
    'Coordination':'Coordination','Autre':'Other','Groupe':'Group','lien à ajouter':'add a link',
    'lien configuré':'link configured','ANTBRO LIVE':'ANTBRO LIVE','Toutes les entrevues':'All interviews',
    'La prochaine entrevue se prépare ici':'Prepare the next interview here',
    'Planifiez les invités, produisez les 50 questions et exportez leur dossier.':
      'Schedule guests, prepare 50 interview questions and export their dossiers.',
    'Préparer une entrevue':'Prepare an interview','Questions / dossiers':'Questions / files',
    'PARCOURS & BOOKING':'ARTIST JOURNEY & BOOKING','Voir les progressions':'View progress',
    'Parcours à créer':'No artist journeys yet',
    'Chaque DJ aura son suivi individuel en huit étapes, de la découverte au booking.':
      'Each DJ receives an individual eight-stage journey, from discovery to booking.',
    'Nouvelle opportunité':'New opportunity','Bilan général':'Overall report',
    'ANTBRO TV · LES MONITEURS':'ANTBRO TV · MONITORS','Ouvrir la régie':'Open control room',
    'Les entrevues et les directs, au même endroit.':'Interviews and live streams in one place.',
    'Playlist YouTube, lien de direct, régie et écran de diffusion.':
      'YouTube playlist, live stream URL, broadcast controls and viewing screen.',
    'ARCHIVES À L’ANTENNE':'REPLAYS ON AIR','DIRECT À L’ANTENNE':'LIVE ON AIR',
    'Ouvrir les moniteurs':'Open monitors','Configurer les sources':'Configure sources',
    'BABILLARD CENTRAL':'CENTRAL NOTICEBOARD','Toutes les annonces':'All announcements',
    'Aucune annonce':'No announcements yet',
    'Les communications GRP sont préparées ici avant diffusion.':
      'GRP communications are prepared here before distribution.',
    'Créer une annonce':'Create announcement','COURRIELS & SAUVEGARDES':'EMAILS & BACKUPS',
    'Ouvrir':'Open',
    'Les informations du parcours se rassemblent dans un dossier cumulatif, puis deviennent un courriel prêt à envoyer.':
      'All artist journey details form a cumulative dossier and a ready-to-send email.',
    'Générer un courriel':'Generate email','Sauvegarde complète':'Full backup',
    'Les courriels sont préparés, jamais envoyés silencieusement. Le fichier JSON exporté peut être joint manuellement pour transférer les données.':
      'Emails are drafted, never sent silently. Attach the exported JSON file to transfer your data.',
    // DJ directory
    'DJ & artistes':'DJs & artists','ARTIST MANAGEMENT':'ARTIST MANAGEMENT',
    'Fiches, profils Hedliner, historique, progression et dossiers individuels.':
      'Profiles, Hedliner links, history, progress tracking and individual artist files.',
    'Aucun résultat':'No results','Ajoutez une fiche ou modifiez la recherche.':
      'Add an artist or change the search.','fiche(s)':'profile(s)','Style à renseigner':'Style not set',
    'À développer':'In development','Découvert':'Discovered','Contacté':'Contacted',
    'En développement':'In development','Prêt pour entrevue':'Ready for interview',
    'En promotion':'In promotion','Prêt pour booking':'Ready for booking',
    // Groups
    'COMMUNITY MANAGEMENT':'COMMUNITY MANAGEMENT',
    'Registre central des espaces, leurs missions, responsables et liens externes. Les groupes TikTok ne sont pas administrés automatiquement par cette application.':
      'Central directory of groups, missions, leads and external links. This app cannot directly administer TikTok groups.',
    'Ajouter un espace':'Add a group','Gérer la fiche':'Manage details',
    'Communications générales et informations officielles selon les règles GRP.':
      'General communication and official information under GRP rules.',
    'Partage de ressources et développement des connaissances.':
      'Share resources and develop knowledge.',
    'Espace spécialisé dont la mission définitive doit être confirmée par GRP.':
      'Specialized space; its final mission requires GRP confirmation.',
    'Espace pour les membres et les fans selon les règles de GRP.':
      'Space for members and fans in accordance with GRP rules.',
    'Espace à structurer et à préciser avec son responsable.':
      'Space to be structured with its designated lead.',
    'Entrevues, présentation d’artistes et rendez-vous de diffusion.':
      'Interviews, artist showcases and broadcast announcements.',
    // Interviews
    'Entrevues Antbro':'Antbro interviews',
    'Calendrier des invités, questions personnalisées, préparation de diffusion et transmission du dossier.':
      'Guest calendar, customized questions, broadcast preparation and dossier sharing.',
    'Planifier une entrevue':'Schedule an interview',
    'UNE HEURE AVEC L’ARTISTE':'ONE HOUR WITH THE ARTIST',
    '50 questions. Un invité. Un dossier complet.':'50 questions. One guest. One complete dossier.',
    'Préparation structurée en français, avec adaptation possible pour une émission en anglais et traduction française.':
      'Structured interview preparation, available in English or French with translation as needed.',
    'Diffuser les entrevues dans ANTBRO TV':'Watch interviews on ANTBRO TV',
    'Régler la playlist YouTube':'Set up YouTube playlist','ÉMISSIONS ENREGISTRÉES':'SAVED INTERVIEWS',
    'Aucune émission enregistrée':'No interviews recorded','Planifiez la première entrevue.':'Schedule your first interview.',
    'Créer une entrevue':'Create an interview','Questions':'Questions',
    // TV
    'Deux moniteurs. Une régie. Les entrevues archivées sur YouTube et les directs au même endroit.':
      'Two monitors, one control room. Archived YouTube interviews and live streams in one place.',
    'Ouvrir l’écran de diffusion':'Open broadcast screen','MODE ARCHIVES':'REPLAY MODE','MODE DIRECT':'LIVE MODE',
    'RÉGIE DE DIFFUSION':'BROADCAST CONTROL ROOM','Quel contenu est à l’antenne ?':"What's on air?",
    'Choisissez manuellement la programmation. Les deux moniteurs restent accessibles pour l’écoute individuelle.':
      'Choose the broadcast manually. Both monitors remain available for individual viewing.',
    'Entrevues':'Interviews','En direct':'Live','PLAYLIST · ARCHIVES':'PLAYLIST · REPLAYS',
    'ENTREVUES EN REDIFFUSION':'INTERVIEW REPLAYS','Les émissions arrivent ici':'Your interviews appear here',
    'Ajoutez une playlist publique YouTube dans la régie.':'Add a public YouTube playlist in the control room.',
    'La playlist YouTube actualise la programmation lorsque de nouvelles entrevues y sont publiées.':
      'The YouTube playlist updates when new interviews are added.',
    'À L’ANTENNE':'ON AIR','Mettre les archives à l’antenne':'Put replays on air',
    'Plein écran':'Full screen','ÉMISSION · LIVE':'SHOW · LIVE',
    'DIRECT ANTBRO LIVE':'ANTBRO LIVE BROADCAST','SOURCE À DÉFINIR':'SOURCE NOT CONFIGURED',
    'Le direct arrive ici':'The live stream appears here',
    'Collez le lien d’un direct YouTube ou d’une chaîne Twitch.':
      'Paste a YouTube live video link or Twitch channel.',
    'Passer en direct':'Go live','DIFFUSION & PARTAGE':'BROADCAST & SHARING',
    'SOURCE PLAYLIST':'PLAYLIST SOURCE','Aucune playlist configurée':'No playlist configured',
    'Collez la playlist créée pour les entrevues d’Antbro.':
      "Paste Antbro's interview playlist link.",
    'SOURCE DIRECT':'LIVE SOURCE','Aucun direct configuré':'No live stream configured',
    'Collez l’URL d’une vidéo YouTube LIVE ou d’une chaîne Twitch.':
      'Paste a YouTube LIVE video URL or Twitch channel URL.',
    'Modifier les liens':'Edit links','Copier le lien public':'Copy public link',
    'Envoyer la configuration':'Share configuration',
    'Le lien public fonctionne après publication de l’application sur un site HTTPS. Il contient les identifiants vidéo sélectionnés et ne synchronise pas les réglages entre appareils. Les directs ne sont pas détectés automatiquement; il faut activer puis terminer le mode direct manuellement.':
      'The public link works when deployed on HTTPS. It contains selected video IDs but does not sync settings across devices. Live streams are not detected automatically; activate and end live mode manually.',
    'La plateforme ne fournit pas ici de lecteur officiel pour les directs. Ouvrir ce lien sur TikTok.':
      'There is no official embedded TikTok live player here. Open this link on TikTok.',
    'Utilisez l’URL de la vidéo en direct (watch?v=… ou /live/ID) pour afficher le lecteur intégré.':
      'Use the live video URL (watch?v=… or /live/ID) to display the embedded player.',
    'Ce service n’est pas pris en charge comme lecteur intégré. Le bouton ouvre le site officiel.':
      'This service does not support embedded playback here. The button opens the official website.',
    'Lecteur du direct prêt. Appuyez sur Lecture.':'Live player ready. Press Play.',
    'DIRECT · PLATEFORME EXTERNE':'LIVE · EXTERNAL PLATFORM',
    'Cette diffusion ne peut pas être intégrée dans le site. Ouvrez la source originale.':
      'This live stream cannot be embedded. Open the original source.',
    'Configurez le lien de la playlist dans la régie d’Antbro.':
      'Configure the playlist link in Antbro’s control room.',
    'OUVRIR LA SOURCE':'OPEN SOURCE','Ouvrir la source':'Open source',
    // Booking, posts, history
    'Opportunités & booking':'Opportunities & booking',
    'Suivez les démarches sans confondre une proposition avec un spectacle confirmé.':
      'Track proposals without mistaking an opportunity for a confirmed show.',
    'Aucune opportunité':'No opportunities yet',
    'Ajoutez une salle, un événement ou une démarche de représentation.':
      'Add a venue, event or representation opportunity.',
    'Créer une opportunité':'Create opportunity',
    'Babillard & annonces':'Noticeboard & announcements',
    'Préparez, classez et transmettez les annonces. L’approbation interne appartient aux responsables GRP.':
      'Draft, organize and share announcements. Internal approval remains with GRP leadership.',
    'Nouvelle annonce':'New announcement',
    'Créez une annonce et transmettez-la à la direction concernée pour validation.':
      'Create an announcement and send it to the appropriate leadership for approval.',
    'Journal & suivis':'Activity & follow-ups',
    'Enregistrez conversations, prises de contact, confirmations et prochaines actions. Chaque élément enrichit automatiquement le dossier du DJ.':
      'Record conversations, contacts, confirmations and next steps. Each entry automatically adds to the DJ dossier.',
    'Ajouter une information':'Add an entry','HISTORIQUE':'HISTORY','Historique vide':'No history yet',
    'Les échanges saisis ici apparaîtront dans les courriels cumulatifs.':
      'The interactions recorded here appear in cumulative email dossiers.',
    'RELANCES & TÂCHES':'FOLLOW-UPS & TASKS','Aucune tâche':'No tasks yet',
    'Ajoutez un suivi pour ne perdre aucune démarche.':'Add a follow-up to track each action.',
    'Planifier un suivi':'Schedule a follow-up',
    // Mail and reports
    'DOCUMENT CENTER':'DOCUMENT CENTER',
    'Regrouper toutes les informations d’un DJ, télécharger son dossier et préparer un courriel adressé aux destinataires configurés.':
      'Collect each DJ’s information, download their dossier and prepare an email for configured recipients.',
    'CONSTRUIRE UN DOSSIER CUMULATIF':'BUILD A CUMULATIVE DOSSIER',
    'Le document se reconstruit avec la fiche DJ, les étapes validées, le journal, les entrevues, le booking et les suivis associés.':
      'The document compiles DJ details, completed steps, activity history, interviews, booking and follow-ups.',
    'Artiste concerné':'Artist','Choisir un DJ...':'Select a DJ...',
    'Générer le dossier et le courriel':'Generate dossier & email',
    'Configurer destinataires':'Configure recipients',
    "Il faut d'abord créer au moins un dossier DJ.":'You need at least one DJ profile first.',
    "L'ouverture d'un brouillon n'envoie aucun courriel. Vérifiez le destinataire et cliquez vous-même sur Envoyer dans votre messagerie.":
      'Opening an email draft does not send it. Verify the recipient and press Send in your email client.',
    'SAUVEGARDE COMPLÈTE':'FULL BACKUP',
    'Exportez un fichier JSON de toutes les fiches GRP, puis joignez ce fichier à un message pour le conserver ou le transférer sur un autre appareil.':
      'Export all GRP records to JSON, then attach the file to an email for safekeeping or transfer.',
    'Exporter la sauvegarde':'Export backup','Partager la sauvegarde':'Share backup',
    'Préparer un courriel de sauvegarde':'Prepare backup email','Importer un fichier':'Import file',
    "Le courriel constitue une copie supplémentaire. Les données restent locales sur l'appareil tant qu'aucune base synchronisée n'a été raccordée.":
      'Email provides an additional copy. Data stays on this device until a shared database is connected.',
    'DOCUMENTS PRÉPARÉS':'PREPARED DOCUMENTS','Aucun dossier préparé':'No documents prepared',
    'Vos documents et courriels préparés apparaîtront dans ce registre local.':
      'Your prepared documents and email drafts appear in this local register.',
    'Bilans & progression':'Reports & progress',
    'Résultats observables fondés sur les dossiers enregistrés, sans chiffres inventés.':
      'Trackable results from actual records only, without invented figures.',
    'ARTISTES':'ARTISTS','ENTREVUES TERMINÉES':'COMPLETED INTERVIEWS','BOOKINGS CONFIRMÉS':'CONFIRMED BOOKINGS',
    'SUIVIS COMPLÉTÉS':'COMPLETED TASKS','BILANS INDIVIDUELS':'INDIVIDUAL REPORTS',
    'Pas encore de bilan':'No reports yet','Les rapports apparaîtront lorsque des DJ seront ajoutés.':
      'Reports appear once DJs have been added.',
    'EXPORTS PROFESSIONNELS':'PROFESSIONAL EXPORTS',
    'Les données de votre bureau peuvent être conservées indépendamment du navigateur.':
      'Your office data can be saved independently of this browser.',
    'Exporter tous les DJ (CSV)':'Export all DJs (CSV)','Exporter sauvegarde (JSON)':'Export backup (JSON)',
    'Imprimer un bilan':'Print report',
    'Les informations rapportées reflètent uniquement les données saisies. Une réservation ne devient confirmée que lorsque son statut a été mis à jour après une confirmation réelle.':
      'Reports reflect entered data only. A booking is confirmed only after a genuine confirmation is recorded.',
    // Settings
    'Réglages & conservation':'Settings & preservation',
    'Adresses de destination, identité de signature, import/export et entretien du bureau.':
      'Recipient addresses, signature, import/export and office maintenance.',
    'COURRIELS DE DESTINATION':'EMAIL RECIPIENTS',
    'Destinataire principal (ex. Antbro)':'Primary recipient (e.g. Antbro)',
    'Destinataire en copie (facultatif)':'CC recipient (optional)',
    'Signature utilisée dans les dossiers':'Signature used in dossiers',
    'Les adresses ne sont pas publiées dans le code. Elles sont propres à ce navigateur.':
      'Email addresses are not published in the source code. They are stored in this browser.',
    'PROTECTION DES FICHIERS':'FILE PROTECTION',
    'Chaque appareil possède sa propre copie locale. Exporter permet d’archiver et de transférer volontairement les informations.':
      'Each device stores its own local copy. Export to archive or transfer records.',
    'Sauvegarder JSON':'Save JSON','Restaurer JSON':'Restore JSON','Exporter CSV':'Export CSV',
    "Pour une équipe multi-utilisateur, une authentification et une base sécurisée restent nécessaires. N'enregistrez pas de mots de passe, de données sensibles ou d'informations médicales dans les fiches.":
      'Multi-user access still requires authentication and a secure database. Do not store passwords, sensitive information or medical data in profiles.',
    'Effacer les données locales':'Clear local data',
    'CADRE DES RESPONSABILITÉS':'ROLES & RESPONSIBILITIES',
    'Antbro et GRP contrôlent les décisions et les politiques de leurs groupes. R-Niel peut accompagner les DJ selon son mandat convenu. MEYDEN fournit l’outil et l’accompagnement artistique dans le cadre d’ententes distinctes. Un profil Hedliner, une inscription GRP et un contrat de représentation sont trois réalités différentes.':
      'Antbro and GRP control their group policies and decisions. R-Niel may support DJs under her agreed role. MEYDEN supplies tools and artist development under separate agreements. A Hedliner profile, a GRP membership and a representation contract are not the same.',
    'Aucune modification d’un groupe TikTok, adhésion, approbation officielle ou diffusion automatique n’est déclenchée depuis ce bureau.':
      'This office does not directly change TikTok groups or memberships, approve official decisions or publish automatically.',
    // Form and modal labels
    'Créer · Fiche DJ':'Create · DJ profile','Créer · Groupe GRP':'Create · GRP group',
    'Créer · Entrevue Antbro':'Create · Antbro interview','Créer · Opportunité de booking':'Create · Booking opportunity',
    'Créer · Annonce':'Create · Announcement','Créer · Information du parcours':'Create · Activity entry',
    'Créer · Suivi / tâche':'Create · Follow-up / task',
    'Modifier · Fiche DJ':'Edit · DJ profile','Modifier · Groupe GRP':'Edit · GRP group',
    'Modifier · Entrevue Antbro':'Edit · Antbro interview','Modifier · Opportunité de booking':'Edit · Booking opportunity',
    'Modifier · Annonce':'Edit · Announcement','Modifier · Information du parcours':'Edit · Activity entry',
    'Modifier · Suivi / tâche':'Edit · Follow-up / task',
    'Nom de scène':'Stage name','Style musical':'Musical style','Ville / région':'City / region',
    'Situation artistique':'Artist status','Profil TikTok (URL)':'TikTok profile (URL)',
    'Profil Hedliner (URL)':'Hedliner profile (URL)',
    'URL d’une photo autorisée (facultatif)':'Licensed photo URL (optional)',
    'Ou importer une photo (compressée, conservée localement)':'Or upload a photo (compressed, stored locally)',
    'Observations professionnelles non sensibles':'Non-sensitive professional notes',
    'Nom du groupe':'Group name','Abréviation':'Abbreviation','Type d’espace':'Space type',
    'Responsable (si confirmé)':'Group lead (if confirmed)','Mission':'Mission',
    'Règles proposées / approuvées':'Proposed / approved rules',
    'Lien externe vérifié du groupe':'Verified external group link',
    'DJ associé au dossier':'DJ linked to this dossier','— Sans artiste —':'— No artist —',
    'Titre ou invité si hors répertoire':'Title or guest (if not in directory)',
    'Date prévue':'Scheduled date','Heure':'Time','État':'Status',
    'À proposer':'To propose','Planifiée':'Scheduled','Préparée':'Prepared','Réalisée':'Completed',
    'Annulée':'Canceled','Notes de préparation / angle éditorial':'Preparation notes / editorial angle',
    'Lien YouTube de la rediffusion (facultatif)':'YouTube replay link (optional)',
    'Occasion / événement':'Opportunity / event','Salle / organisateur':'Venue / organizer',
    'Date envisagée':'Proposed date','Statut (ne confirmer qu’après accord)':
      'Status (confirm only after agreement)',
    'Prospection':'Outreach','Proposition envoyée':'Proposal sent',
    'En négociation':'Negotiating','Confirmée':'Confirmed','Terminée':'Completed',
    'Refusée':'Declined','Cachet proposé (facultatif)':'Proposed fee (optional)',
    'Détails, conditions et prochaine étape':'Details, terms and next steps',
    'Titre de l’annonce':'Announcement title','Espace concerné':'Target group',
    'Tous les groupes':'All groups','État éditorial':'Editorial status',
    'Brouillon':'Draft','À faire valider':'Needs approval',
    'Validé hors application':'Approved outside the app',
    'Diffusé manuellement':'Shared manually','Message de l’annonce':'Announcement message',
    'Type de démarche':'Activity type','Conversation':'Conversation','Découverte':'Discovery',
    'Contact':'Contact','Courriel':'Email','Décision':'Decision','Promotion':'Promotion',
    'Date':'Date','Information recueillie / résultat':'Information collected / result',
    'Action à réaliser':'Action item','Échéance':'Due date','Suivi':'Follow-up',
    'À faire':'To do','Contexte / suivi':'Context / follow-up',
    'Moniteur 1 · lien playlist YouTube publique':'Monitor 1 · public YouTube playlist URL',
    'Moniteur 2 · lien vidéo YouTube LIVE ou chaîne Twitch':'Monitor 2 · YouTube LIVE video or Twitch channel URL',
    'Titre du direct':'Live stream title',
    'Le lecteur n’ajoute aucune vidéo à YouTube. Déposez d’abord les entrevues dans votre playlist. Une vidéo peut ne pas être intégrable selon les droits ou les paramètres YouTube. Les directs TikTok sont uniquement ouverts sur TikTok.':
      'The player cannot upload to YouTube. Add interviews to your playlist first. Embedding depends on YouTube settings and rights. TikTok live links open on TikTok only.',
    'Enregistrer les liens':'Save links',
    // Artist details and docs
    'Préparer 50 questions':'Prepare 50 questions','Dossier artiste':'Artist dossier','Style non renseigné':'Style not provided',
    'Région non renseignée':'Region not provided','de progression':'progress',
    'Les étapes sont validées manuellement à partir des éléments obtenus.':
      'Steps are verified manually based on available evidence.',
    'Huit étapes du parcours':'Eight development stages','Historique associé':'Related history',
    'Aucun échange enregistré':'No interactions yet',
    'Ajoutez des informations au journal pour enrichir le dossier et les courriels.':
      'Add interactions to the activity log to enrich dossiers and emails.',
    'Ouvrir le profil':'Open profile','Modifier la fiche':'Edit profile',
    'Dossier & courriel':'Dossier & email','Bilan TXT':'TXT report',
    'Découverte':'Discovery','Contact initial':'First contact','Profil complété':'Profile completed',
    'Profil Hedliner publié':'Hedliner profile published',
    'Entrevue préparée':'Interview prepared','Entrevue réalisée':'Interview completed',
    'Promotion publiée':'Promotion published','Booking confirmé':'Booking confirmed',
    'Espace':'Group','Règle :':'Rule:', 'Responsable :':'Lead:',
    'À définir par GRP':'To be defined by GRP','À confirmer':'To confirm',
    'Modifier cet espace':'Edit this space','Copier les informations':'Copy details',
    'Copier le message':'Copy message','Cible :':'Target:','créé le':'created on',
    'Dossier & courriel préparé':'Dossier & email draft',
    'À (destinataire principal)':'To (primary recipient)',
    'Copie (facultatif)':'CC (optional)','Objet':'Subject',
    'Texte modifiable du dossier':'Editable dossier text',
    'Le fichier texte et le brouillon de messagerie sont deux formes de conservation du même dossier. L’ouverture de la messagerie ne constitue pas un envoi. Pour partager une sauvegarde JSON, joignez le fichier manuellement.':
      'The text file and email draft preserve the same dossier. Opening your email client does not send it. Attach your JSON backup manually when needed.',
    'Ouvrir le courriel prêt à envoyer':'Open ready-to-send email draft',
    'Télécharger TXT':'Download TXT','Partager fichier':'Share file','Copier':'Copy',
    'Bilan global':'Overall report','Dossier de préparation à relire':'Review interview preparation dossier',
    'Télécharger 50 questions':'Download 50 questions',
    '50 questions':'50 questions',
    'Copier la configuration':'Copy configuration',
    // Notifications / prompts
    'Enregistré dans le bureau.':'Saved in the office.',
    'Texte copié.':'Text copied.','La copie a échoué.':'Copy failed.',
    'Destinataires sauvegardés sur cet appareil.':'Recipients saved on this device.',
    'Sauvegarde JSON téléchargée. Conservez-la en lieu sûr.':
      'JSON backup downloaded. Keep it in a safe place.',
    'Partage annulé.':'Sharing canceled.',
    'Fichier transmis à l’application de partage. Vérifiez son envoi.':
      'File handed to the sharing app. Confirm it was actually sent.',
    'Partage de fichiers indisponible : fichier téléchargé. Joignez-le manuellement à votre courriel.':
      'File sharing unavailable: file downloaded. Attach it to an email manually.',
    'Choisissez d’abord un DJ.':'Select a DJ first.',
    'Ajoutez le destinataire principal dans les réglages ou le formulaire.':
      'Add a primary recipient in settings or in the form.',
    'Adresse de destination invalide.':'Invalid recipient email address.',
    'Dossier volumineux : téléchargez le TXT, puis joignez-le à un courriel.':
      'Dossier too large: download the TXT file and attach it to an email.',
    'Messagerie ouverte si disponible. Vous devez cliquer sur Envoyer.':
      'Email client opened if available. You still need to press Send.',
    'Stockage saturé. Exportez votre sauvegarde et réduisez les photos.':
      'Storage full. Export a backup and reduce photo sizes.',
    'Fichier absent ou trop volumineux (max. 8 Mo).':
      'File missing or too large (max. 8 MB).',
    'Importer remplacera les données locales actuelles. Continuer ?':
      'Importing will replace all current local data. Continue?',
    'Supprimer définitivement cette fiche locale ? Cette action ne peut pas être annulée.':
      'Permanently delete this local record? This cannot be undone.',
    'EFFACER TOUTES les données locales ? Téléchargez une sauvegarde avant de continuer.':
      'DELETE ALL local data? Download a backup before proceeding.',
    'Dernière confirmation : effacer toutes les fiches, historiques et réglages ?':
      'Final confirmation: delete all profiles, history and settings?',
    'Données locales effacées.':'Local data cleared.',
    'Fiche supprimée de cet appareil.':'Profile deleted from this device.',
    'Envoi marqué comme déclaré (non vérifié).':'Marked as sent (not verified).',
    'Replacé en brouillon.':'Moved back to drafts.',
    'Votre programmation a été mise à jour.':'Your programming has been updated.',
    'Les sources ont été enregistrées sur cet appareil.':'Sources saved on this device.',
    'Le lien public est copié.':'Public link copied.',
    'Date à fixer':'Date to be set','À fixer':'To be scheduled','Invité':'Guest','À compléter':'To complete',
    'À définir':'To be defined','Aucune note':'No notes','Aucune entrée':'No entries',
    'Aucune entrevue':'No interviews','Salle à confirmer':'Venue to be confirmed',
  };
  const normalize=(s)=>String(s).trim().replace(/\s+/g,' ').replace(/[’‘]/g,"'");
  const exact=new Map(Object.entries(strings).map(([k,v])=>[normalize(k),v]));
  const prefixSymbols=/^([\s○＋+✓☑⚙✉⇧⇩🎙▶●◉⛶✦♣♫▥▣✪★✱▤☷◷—→↗☰▸▹★✕✓✉◆⌂⌕♧☀\-]+)(.+)$/u;
  function translate(raw){
    const s=normalize(raw);if(!s)return raw;
    if(exact.has(s))return exact.get(s);
    let m=s.match(prefixSymbols);if(m){const t=translate(m[2]);if(t!==m[2])return m[1]+t;}
    m=s.match(/^(.+?)(\s*[→↗])$/u);if(m){const t=translate(m[1]);if(t!==m[1])return t+m[2];}
    m=s.match(/^(\d+)\s+fiche\(s\)$/);if(m)return m[1]+' profile(s)';
    m=s.match(/^(\d+)%\s+de progression$/);if(m)return m[1]+'% progress';
    const pieces=s.split(/\s*·\s*/);
    if(pieces.length>1){const converted=pieces.map(part=>translate(part));if(converted.some((t,i)=>t!==pieces[i]))return converted.join(' · ');}
    m=s.match(/^(.*?)(\s*[·•]\s*)(lien à ajouter|lien configuré)$/);
    if(m)return translate(m[1])+m[2]+translate(m[3]);
    return raw;
  }
  const originals=new WeakMap(),attrOriginals=new WeakMap();
  function translateDOM(root){
    if(!root)return;
    const doc=root.ownerDocument||document;
    const list=[];
    if(root.nodeType===3)list.push(root);
    else{
      const walker=doc.createTreeWalker(root,NodeFilter.SHOW_TEXT);
      let n;while((n=walker.nextNode()))list.push(n);
    }
    for(const node of list){
      const par=node.parentElement;
      if(!par||par.closest('script,style,textarea,option[data-user-input],code,pre,[contenteditable="true"],[data-i18n-skip]'))continue;
      if(!originals.has(node))originals.set(node,node.nodeValue);
      const base=originals.get(node);
      let result=lang==='en'?translate(base):base;
      const before=base.match(/^\s*/)?.[0]||'';
      const after=base.match(/\s*$/)?.[0]||'';
      if(result!==base&&result===normalize(result))result=before+result+after;
      if(node.nodeValue!==result)node.nodeValue=result;
    }
    const elements=root.nodeType===1?[root,...root.querySelectorAll('*')]:[];
    for(const el of elements){
      for(const name of ['placeholder','title','aria-label']){
        if(!el.hasAttribute(name))continue;
        let memo=attrOriginals.get(el);if(!memo){memo={};attrOriginals.set(el,memo)}
        if(!(name in memo))memo[name]=el.getAttribute(name);
        const t=lang==='en'?translate(memo[name]):memo[name];
        if(el.getAttribute(name)!==t)el.setAttribute(name,t);
      }
    }
    doc.documentElement.lang=lang;
    doc.title=(lang==='en'?'ANTBRO TV | GRP International — Pro Office v5.1':'ANTBRO TV | GRP International — Bureau PRO v5.1');
    doc.querySelectorAll('[data-lang-choice]').forEach(b=>{
      const active=b.dataset.langChoice===lang;
      b.classList.toggle('active',active);
      b.setAttribute('aria-pressed',String(active));
    });
  }
  function installSwitcher(){
    let p=document.querySelector('.top-actions');
    let small=false;
    if(!p){p=document.querySelector('.tv-public-head');small=true;}
    if(!p||p.querySelector('[data-antbro-language]'))return;
    const div=document.createElement('div');div.className='antbro-language'+(small?' antbro-language--public':'');div.dataset.antbroLanguage='';
    div.setAttribute('role','group');div.setAttribute('aria-label','Language / Langue');
    div.innerHTML='<button type="button" data-lang-choice="fr" aria-label="Français" title="Français">FR</button><button type="button" data-lang-choice="en" aria-label="English" title="English">EN</button>';
    if(p.classList.contains('top-actions'))p.insertBefore(div,p.querySelector('#top-backup')||p.firstChild);
    else p.append(div);
    div.addEventListener('click',e=>{const b=e.target.closest('[data-lang-choice]');if(!b)return;setLanguage(b.dataset.langChoice)});
  }
  function setLanguage(next){
    if(!['en','fr'].includes(next))return;
    lang=next;
    try{localStorage.setItem(PREF,lang)}catch{}
    translateDOM(document.body);
    // Safe for user-created records: language preference only. UI text and select option values remain separate.
    window.dispatchEvent(new CustomEvent('antbro-language-changed',{detail:{language:lang}}));
  }
  function getLanguage(){return lang}
  function translateDocument(s){
    if(lang==='fr')return s;
    const prefixes=[
      ['GRP INTERNATIONAL × ANTBRO — DOSSIER ARTISTE','GRP INTERNATIONAL × ANTBRO — ARTIST DOSSIER'],
      ['Document de suivi généré le ','Tracking document generated on '],
      ['ARTISTE : ','ARTIST: '],['Style : ','Style: '],['Ville/région : ','City/region: '],
      ['Situation artistique : ','Artist status: '],['Progression : ','Progress: '],
      ['ÉTAPES RÉALISÉES','COMPLETED MILESTONES'],['NOTES DE DOSSIER','DOSSIER NOTES'],
      ['JOURNAL DES ÉCHANGES','ACTIVITY HISTORY'],['ENTREVUES','INTERVIEWS'],
      ['BOOKING ET OPPORTUNITÉS','BOOKING & OPPORTUNITIES'],['SUIVIS','FOLLOW-UPS'],
      ['REMARQUES','NOTES'],['Cachet proposé : ','Proposed fee: ']
    ];
    const words=[[' jalons)', ' milestones)'],['Aucune note','No notes'],['Aucune entrée','No entries'],
      ['Aucune entrevue','No interviews'],['Aucune opportunité','No opportunities'],['Aucune tâche','No tasks'],
      ['À compléter','To complete'],['À définir','To be defined'],['Salle à confirmer','Venue to be confirmed'],
      ['Les informations proviennent des saisies du bureau. Les décisions internes GRP, les adhésions, la représentation et les engagements contractuels doivent être confirmés séparément.',
       'The information comes from records entered in the office. GRP internal decisions, memberships, representation agreements and contractual commitments must be confirmed separately.']];
    return String(s).split('\n').map(line=>{
      for(const [fr,en] of prefixes){if(line.startsWith(fr)){line=en+line.slice(fr.length);break;}}
      for(const [fr,en] of words)line=line.replaceAll(fr,en);
      for(const [fr,en] of Object.entries(strings)){
        if(line===fr)return en;
        if(line.endsWith(': '+fr))line=line.slice(0,-fr.length)+en;
        if(line.endsWith('[✓] '+fr)||line.endsWith('[ ] '+fr))line=line.slice(0,-fr.length)+en;
        if(line.includes(' '+fr+' ·'))line=line.replaceAll(' '+fr+' ·',' '+en+' ·');
      }
      return line;
    }).join('\n');
  }
  const englishSections=[
    ['INTRODUCTION',[
      'How would you like us to introduce you to the audience?',
      'What moment inspired you to start creating?',
      'Where did your artist name come from?',
      'What makes you stand out as an artist?',
      'Where does your creative energy come from?',
      'What role does music play in your daily life?',
      'What is your earliest meaningful musical memory?',
      'Who encouraged you when you first started?',
      'How would you describe your sound to someone new?',
      'What emotion do you want your music to communicate?'
    ]],['JOURNEY',[
      'How did your first project begin?',
      'What was your first stage performance like?',
      'Which challenge helped you grow?',
      'What decision changed the direction of your career?',
      'How do you prepare for a new project?',
      'What have you learned from working with other artists?',
      'Which live performance makes you proudest?',
      'Is there a mistake you would avoid today?',
      'How do you personally measure your progress?',
      'Which artistic encounter had the biggest impact on you?'
    ]],['CREATIVE PROCESS',[
      'How do you choose your influences?',
      'What role does improvisation play in your process?',
      'What makes a performance successful?',
      'What still surprises you about the creative process?',
      'How important are lyrics or sound textures to your work?',
      'How do digital tools support your creativity?',
      'How do you select the tracks you perform?',
      'How do you prepare recording sessions?',
      'What do you enjoy sharing most with your team?',
      'Which current project would you like to introduce today?'
    ]],['AUDIENCE & COMMUNITY',[
      'What kind of connection do you hope to build with fans?',
      'How do you choose which live streams to join?',
      'What do you gain from meeting other artists?',
      'What advice would you give to a beginner?',
      'How would you describe your relationship with social media?',
      'How do you announce new releases?',
      'How can music communities support artists?',
      'What do you expect from professional collaborations?',
      'What does an inclusive and respectful stage mean to you?',
      'What message would you like to share with your community?'
    ]],['FUTURE',[
      'What is your next realistic goal?',
      'Which stages or experiences would you like to explore?',
      'What skill would you like to learn this year?',
      'What would your ideal collaboration look like?',
      'What resources would help you move forward?',
      'Which habit would you like to develop?',
      'What values should guide your partnerships?',
      'How would you like your work to be recognized?',
      'What would you like to achieve in the next year?',
      'What final words would you like to leave with the audience?'
    ]]
  ];
  function englishQuestions(x,name,style){let n=0;
    return `ANTBRO LIVE — INTERVIEW PREPARATION\nGuest: ${name}\nMusical universe: ${style}\nDate: ${x.date||'To be confirmed'} · ${x.time||'Time to be confirmed'}\nTarget duration: 60 minutes\nLanguage: English with French translation when available, to be agreed with the guest\nNotes: ${x.notes||'—'}\n\nSUGGESTED RUN OF SHOW\n0–5 min: Welcome and introduction\n5–20 min: Origins and career journey\n20–40 min: Creative process and work\n40–55 min: Community, projects and questions\n55–60 min: Wrap-up\n\n50 QUESTIONS\n`+
      englishSections.map(([t,arr])=>'\n'+t+'\n'+arr.map(q=>String(++n).padStart(2,'0')+'. '+q).join('\n')).join('\n')+
      '\n\nThese questions are editorial suggestions. Respect guest preferences and content rights.';
  }
  window.ANTBRO_I18N={getLanguage,setLanguage,translate,translateDOM,translateDocument,englishQuestions};
  const nativeConfirm=window.confirm.bind(window);
  window.confirm=(message)=>nativeConfirm(lang==='en'?translate(message):message);
  let scheduled=false;
  function schedule(){if(scheduled)return;scheduled=true;queueMicrotask(()=>{scheduled=false;installSwitcher();translateDOM(document.body)})}
  document.addEventListener('DOMContentLoaded',()=>{
    installSwitcher();translateDOM(document.body);
    new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});
  });
})();
