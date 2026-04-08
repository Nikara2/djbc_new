const catalogeDJBC = [
  // --- BULLES & CHAMPAGNES ---
  { 
    name: "Crémant de Bourgogne", 
    producer: "Domaine Dumas", 
    appellation: "AOC Crémant de Bourgogne", 
    region: "Bourgogne, France", 
    color: "Effervescent", 
    vintage: "NV", 
    description: "Ce crémant se distingue par sa bulle fine et persistante. Au nez, il développe des arômes délicats de pomme verte, de poire et de fleurs blanches. En bouche, il est vif et équilibré avec une belle fraîcheur.", 
    prix: "15 500 FCFA" 
  },
  { 
    name: "Vouvray Brut", 
    producer: "Vignoble Brisebarre", 
    appellation: "AOC Vouvray", 
    region: "Vallée de la Loire, France", 
    color: "Effervescent", 
    vintage: "NV", 
    description: "Vin effervescent à la bulle fine, il présente au nez des notes fraîches de pomme, coing et fleurs blanches, soutenues par une touche de miel. La bouche est élégante, équilibrée et légèrement fruitée.", 
    prix: "15 000 FCFA" 
  },
  { 
    name: "Terre de Sables", 
    producer: "Champagne Perseval-Farge", 
    appellation: "AOC Champagne", 
    region: "Champagne, France", 
    color: "Effervescent", 
    vintage: "NV", 
    description: "Ce champagne offre un nez fin et complexe aux notes de fruits blancs mûrs, agrumes confits et brioche. La bouche est ample avec une mousse onctueuse, soutenue par une fraîcheur équilibrée.", 
    prix: "86 000 FCFA" 
  },
  { 
    name: "Blanc de Blancs", 
    producer: "Champagne Ruinart", 
    appellation: "AOC Champagne", 
    region: "Champagne, France", 
    color: "Effervescent", 
    vintage: "NV", 
    description: "Ce champagne 100 % Chardonnay révèle un nez délicat aux notes florales, d’agrumes et une touche minérale. En bouche, il est soyeux, avec des bulles fines et une longueur remarquable.", 
    prix: "150 000 FCFA" 
  },

    // --- VINS ROUGES ---
    {
        name: "Merlot Moqueur",
        producer: "CHÂTEAU FREDIGNAC",
        appellation: "AOC Blaye Côte de Bordeaux",
        region: "Bordeaux, France",
        color: "Rouge",
        vintage: "2021",
        description: "Ce vin dévoile un nez fruité avec des arômes de cerise, framboise et une touche d’épices douces. En bouche, il est rond, souple, avec des tanins légers et une finale légèrement poivrée.",
        prix: "10 000 FCFA"
    },
    {
        name: "Château Hourbanon",
        producer: "CHÂTEAU HOURBANON",
        appellation: "AOC Médoc",
        region: "Bordeaux, France",
        color: "Rouge",
        vintage: "2016",
        description: "Un vin charpenté avec un nez de fruits noirs mûrs, réglisse et une pointe boisée. La bouche est riche, avec des tanins bien intégrés et une belle longueur.",
        prix: "22 000 FCFA"
    },
    {
        name: "Château Bardins",
        producer: "CHÂTEAU BARDINS",
        appellation: "AOC Pessac-Léognan",
        region: "Bordeaux, France",
        color: "Rouge",
        vintage: "2019",
        description: "Le vin exprime des notes de cassis, mûre, avec des nuances de tabac et cacao dues à l’élevage. En bouche, il est ample, structuré, avec des tanins soyeux et une belle fraîcheur.",
        prix: "28 000 FCFA"
    },
    {
        name: "Le P'tit Coup",
        producer: "CHÂTEAU DU DONJON",
        appellation: "Vin de France",
        region: "Languedoc, France",
        color: "Rouge",
        vintage: "2023",
        description: "Ce vin léger et fruité offre au nez des arômes de fruits rouges frais, comme la fraise et la framboise. La bouche est gourmande, souple, avec une finale fraîche et agréable.",
        prix: "8 000 FCFA"
    },
    {
        name: "Bourgogne Pinot Noir",
        producer: "DOMAINE BOULEY",
        appellation: "AOC Bourgogne",
        region: "Bourgogne, France",
        color: "Rouge",
        vintage: "2021",
        description: "Vin léger aux notes de cerise, groseille et une pointe épicée. En bouche, il est frais, élégant avec des tanins fins.",
        prix: "8 000 FCFA"
    },
    {
        name: "Aloxe-Corton",
        producer: "DOMAINE BOULEY",
        appellation: "AOC Aloxe-Corton",
        region: "Bourgogne, France",
        color: "Rouge",
        vintage: "2020",
        description: "Un vin puissant et raffiné, au nez complexe mêlant fruits rouges mûrs, sous-bois et épices. La bouche est généreuse, structurée, avec un bel équilibre entre acidité et tanins.",
        prix: "55 000 FCFA"
    },
    {
        name: "Monthélie 'Aux Fournereaux'",
        producer: "DOMAINE BOULEY",
        appellation: "AOC Monthélie",
        region: "Bourgogne, France",
        color: "Rouge",
        vintage: "2020",
        description: "Ce vin développe des arômes de fruits rouges et noirs, légèrement épicés. La bouche est ronde et charnue, avec une belle longueur.",
        prix: "46 000 FCFA"
    },
    {
        name: "Monthélie Premier Cru 'Les Clous'",
        producer: "DOMAINE BOULEY",
        appellation: "AOC Monthélie 1er Cru",
        region: "Bourgogne, France",
        color: "Rouge",
        vintage: "2020",
        description: "Vin complexe et élégant, aux notes de fruits noirs, sous-bois et épices douces. La bouche est ample, avec des tanins soyeux et une belle fraîcheur.",
        prix: "52 000 FCFA"
    },
    {
        name: "Pommard",
        producer: "JOSEPH DROUHIN",
        appellation: "AOC Pommard",
        region: "Bourgogne, France",
        color: "Rouge",
        vintage: "2019",
        description: "Un vin puissant, avec un nez intense de fruits noirs, cuir et épices. La bouche est charnue, avec des tanins fermes mais élégants et une belle persistance.",
        prix: "45 000 FCFA"
    },
    {
        name: "Beaujolais Village",
        producer: "DOMAINE DUMAS",
        appellation: "AOC Beaujolais Village",
        region: "Beaujolais, France",
        color: "Rouge",
        vintage: "2020/2022",
        description: "Vin vif et fruité aux arômes de cerise, fraise et framboise. La bouche est légère, gourmande avec une finale fraîche.",
        prix: "15 000 FCFA"
    },
    {
        name: "Brouilly",
        producer: "DOMAINE DUMAS",
        appellation: "AOC Brouilly",
        region: "Beaujolais, France",
        color: "Rouge",
        vintage: "2021",
        description: "Un vin au caractère rond et généreux, avec des notes de fruits rouges mûrs et une légère épice. Tanins souples et finale équilibrée.",
        prix: "18 000 FCFA"
    },
    {
        name: "Ju de Vie",
        producer: "DOMAINE DE LA GRAVEIRETTE",
        appellation: "Vin de France",
        region: "Vallée du Rhône, France",
        color: "Rouge",
        vintage: "2022",
        description: "Vin léger, fruité, aux arômes de petits fruits rouges et d’épices douces. La bouche est fraîche, gourmande avec une belle vivacité.",
        prix: "15 000 FCFA"
    },
    {
        name: "Mont Sanguié",
        producer: "INCANDIA BIO",
        appellation: "IGP",
        region: "Sardaigne, Italie",
        color: "Rouge",
        vintage: "2022",
        description: "Vin léger aux notes fruitées de cerise et de groseille, avec une belle acidité.",
        prix: "13 000 FCFA"
    },
    {
        name: "Marius Grenache",
        producer: "M. CHAPOUTIER",
        appellation: "IGP Pays d’Oc",
        region: "Pays d’Oc, France",
        color: "Rouge",
        vintage: "2023",
        description: "Vin fruité et chaleureux, aux notes de cerise, réglisse et épices. La bouche est souple, avec des tanins modérés.",
        prix: "9 000 FCFA"
    },
    {
        name: "Belleruche",
        producer: "M. CHAPOUTIER",
        appellation: "AOC Côtes du Rhône",
        region: "Vallée du Rhône, France",
        color: "Rouge",
        vintage: "2022",
        description: "Vin rond et gourmand, avec des arômes de fruits rouges et une finale épicée.",
        prix: "15 000 FCFA"
    },
    {
        name: "Les Meysonniers",
        producer: "M. CHAPOUTIER",
        appellation: "AOC Crozes-Hermitage",
        region: "Vallée du Rhône, France",
        color: "Rouge",
        vintage: "2022",
        description: "Un vin élégant, structuré, aux notes complexes de fruits noirs, réglisse et épices.",
        prix: "28 000 FCFA"
    },
    {
        name: "La Bernardine",
        producer: "M. CHAPOUTIER",
        appellation: "AOC Châteauneuf-du-Pape",
        region: "Vallée du Rhône, France",
        color: "Rouge",
        vintage: "2021",
        description: "Vin puissant et raffiné, avec un nez complexe de fruits mûrs, épices et tanins soyeux.",
        prix: "55 000 FCFA"
    },
    {
        name: "Côtes du Roussillon Villages",
        producer: "DOMAINE DE BILA HAUT",
        appellation: "AOC Côtes du Roussillon Villages",
        region: "Roussillon, France",
        color: "Rouge",
        vintage: "2022",
        description: "Vin rouge riche en fruits noirs, épices et une touche minérale. La bouche est équilibrée et bien structurée.",
        prix: "11 000 FCFA"
    },
    {
        name: "Tempranillo",
        producer: "DOMINIO DEL SOTO",
        appellation: "AOC Ribera del Duero",
        region: "Ribera del Duero, Espagne",
        color: "Rouge",
        vintage: "2020",
        description: "Vin avec des notes de fruits noirs mûrs, vanille et tabac. La bouche est ample, avec des tanins souples et une bonne persistance.",
        prix: "18 000 FCFA"
    },
    {
        name: "Crianza",
        producer: "DOMINIO DEL SOTO",
        appellation: "AOC Ribera del Duero",
        region: "Ribera del Duero, Espagne",
        color: "Rouge",
        vintage: "2018",
        description: "Vin élégant, complexe, aux arômes de fruits rouges, cuir et épices. La bouche est équilibrée avec une belle structure tannique.",
        prix: "25 000 FCFA"
    },
    {
        name: "Vieilles Vignes",
        producer: "XAVIER VIGNON",
        appellation: "AOC Côtes du Rhône",
        region: "Vallée du Rhône, France",
        color: "Rouge",
        vintage: "2020",
        description: "Vin intense aux notes de fruits noirs, réglisse et épices. La bouche est généreuse avec des tanins bien fondus.",
        prix: "15 000 FCFA"
    },
    {
        name: "Gigondas",
        producer: "XAVIER VIGNON",
        appellation: "AOC Gigondas",
        region: "Vallée du Rhône, France",
        color: "Rouge",
        vintage: "2019",
        description: "Vin puissant, fruité, avec des arômes de cerise noire, épices et une finale longue.",
        prix: "35 000 FCFA"
    },
    {
        name: "Château Larrivet Haut-Brion",
        producer: "CHÂTEAU LARRIVET HAUT-BRION",
        appellation: "AOC Pessac-Léognan",
        region: "Bordeaux, France",
        color: "Rouge",
        vintage: "2020",
        description: "Vin complexe aux notes de fruits noirs, tabac et cuir, avec une bouche riche et des tanins soyeux.",
        prix: "55 000 FCFA"
    },

    // --- VINS BLANCS ---
   {
        name: "Vouvray Sec",
        producer: "VIGNOBLE BRISEBARRE",
        appellation: "AOC Vouvray",
        region: "Vallée de la Loire, France",
        color: "Blanc",
        vintage: "2020/2023",
        description: "Ce Vouvray Sec dévoile une robe jaune pâle brillante. Le nez est expressif avec des arômes de poire fraîche, de coing, et une délicate minéralité crayeuse. En bouche, la fraîcheur du Chenin se déploie sur une belle tension, offrant une finale nette et persistante.",
        prix: "16 000 F CFA"
    },
    {
        name: "Petit Chablis",
        producer: "DOMAINE MILLET",
        appellation: "AOC Petit Chablis",
        region: "Bourgogne, France",
        color: "Blanc",
        vintage: "2023",
        description: "Ce Petit Chablis est un modèle d’élégance et de vivacité. Le nez révèle des notes de pomme verte, de citron confit et de pierre à fusil. En bouche, l’attaque est franche, sur une trame saline et fraîche, typique de son terroir calcaire.",
        prix: "22 000 F CFA"
    },
    {
        name: "Jurançon Sec 'Renaissance'",
        producer: "DOMAINE COUSTARRET",
        appellation: "AOC Jurançon Sec",
        region: "Sud-Ouest, France",
        color: "Blanc",
        vintage: "2021",
        description: "'Renaissance' est un vin de caractère. Le nez s’ouvre sur des arômes exotiques d’ananas frais, de zeste de citron, avec une touche florale élégante. En bouche, il allie une belle rondeur à une acidité tranchante, caractéristique des grands Gros Manseng.",
        prix: "22 000 F CFA"
    },
    {
        name: "Chablis",
        producer: "DOMAINE MILLET",
        appellation: "AOC Chablis",
        region: "Bourgogne, France",
        color: "Blanc",
        vintage: "2023",
        description: "Ce Chablis se distingue par sa pureté et son élégance. Le nez dévoile une palette raffinée d’agrumes, de fleurs blanches et de pierre mouillée. En bouche, la minéralité s’impose avec distinction, soutenue par une belle structure et une finale saline.",
        prix: "25 000 F CFA"
    },
    {
        name: "Perrière",
        producer: "DOMAINE DES TERRES BLANCHES",
        appellation: "AOC Coteaux du Giennois",
        region: "Vallée de la Loire, France",
        color: "Blanc",
        vintage: "2023",
        description: "'Perrière' est un Sauvignon blanc éclatant. Le nez mêle habilement des notes de buis, de cassis, de groseille blanche et une pointe de silex. La bouche est vive, croquante, avec une finale longue et citronnée qui apporte beaucoup de peps.",
        prix: "17 000 F CFA"
    },
    {
        name: "Chardonnay",
        producer: "CHÂTEAU MARJOSSE",
        appellation: "AOC Bordeaux",
        region: "Bordeaux, France",
        color: "Blanc",
        vintage: "2020",
        description: "Ce Chardonnay dévoile des arômes complexes de pêche blanche, de vanille, de brioche et de noisette grillée. En bouche, l’élevage en fût lui confère une belle ampleur et une texture soyeuse, tout en gardant une fraîcheur remarquable.",
        prix: "40 000 F CFA"
    },
    {
        name: "Vouvray Moelleux 'Grande Réserve'",
        producer: "VIGNOBLE BRISEBARRE",
        appellation: "AOC Vouvray",
        region: "Vallée de la Loire, France",
        color: "Blanc Moelleux",
        vintage: "2002",
        description: "Ce moelleux de 2002 est une merveille de complexité. Il offre un nez envoûtant de fruits confits, de miel d’acacia, de coing et de cire d’abeille. En bouche, l’équilibre entre le sucre résiduel et l’acidité est magistral, offrant une finale interminable.",
        prix: "34 000 F CFA"
    },
    {
        name: "L’Enclos des Roses",
        producer: "DOMAINE D’ESCAUSSES",
        appellation: "AOC Gaillac",
        region: "Sud-Ouest, France",
        color: "Blanc Moelleux",
        vintage: "2023",
        description: "Ce moelleux propose un nez floral et fruité très expressif (pêche blanche, abricot sec, fleurs blanches). La bouche est suave mais équilibrée, légère sur le sucre avec une belle fraîcheur finale qui évite toute lourdeur.",
        prix: "23 000 F CFA"
    },
    {
        name: "Vermentino doc 'Yennenga'",
        producer: "INCANDIA BIO",
        appellation: "DOC Vermentino di Sardegna",
        region: "Sardaigne, Italie",
        color: "Blanc",
        vintage: "2021",
        description: "Le Vermentino 'Yennenga' est un vin blanc sec aux notes ensoleillées. Le nez révèle des arômes de poire, de citron confit, de thym citronné et d’amande fraîche. En bouche, une belle fraîcheur minérale accompagne une finale saline et persistante.",
        prix: "13 000 F CFA"
    },
    {
        name: "Marius Viognier",
        producer: "M. CHAPOUTIER",
        appellation: "IGP Pays d’Oc",
        region: "Pays d’Oc, France",
        color: "Blanc",
        vintage: "2023",
        description: "Un Viognier charmeur ! Le nez est explosif sur les fruits exotiques, la pêche jaune et l’abricot. La bouche est ronde, légèrement grasse, avec une belle fraîcheur qui équilibre parfaitement le côté charnu du cépage.",
        prix: "9 000 F CFA"
    },
    {
        name: "Rully 'La Chaponnière'",
        producer: "DOMAINE NINOT",
        appellation: "AOC Rully",
        region: "Bourgogne, France",
        color: "Blanc",
        vintage: "2021",
        description: "Ce Rully blanc exprime toute la noblesse du Chardonnay. Au nez : fleurs blanches, beurre frais et noisette. En bouche, il allie tension et onctuosité avec une belle persistance aromatique. Un vin élégant et racé.",
        prix: "40 000 F CFA"
    },
    {
        name: "Sauternes",
        producer: "CHÂTEAU FONTAINE",
        appellation: "AOC Sauternes",
        region: "Bordeaux, France",
        color: "Blanc Liquoreux",
        vintage: "2022",
        description: "Ce Sauternes offre une belle robe dorée. Le nez est intense sur l’abricot confit, le miel, le safran et les fruits exotiques. En bouche, l’équilibre sucre/acidité est remarquable, apportant une grande buvabilité à ce vin liquoreux.",
        prix: "25 000 F CFA"
    },

    // --- ROSÉS ---
    {
        name: "Expression",
        producer: "PASCAL JOUSSELIN",
        appellation: "AOC Touraine",
        region: "Val de Loire, France",
        color: "Rosé",
        vintage: "2023",
        description: "Le rosé 'Expression' porte bien son nom : il révèle des arômes éclatants de fraise des bois, de framboise fraîche et de groseille. En bouche, la vivacité est plaisante, équilibrée par une petite rondeur fruitée. Un rosé léger, désaltérant, parfait pour les chaleurs tropicales.",
        prix: "8 000 FCFA"
    },
    {
        name: "Orsuro",
        producer: "MATHILDE CHAPOUTIER",
        appellation: "AOC Côtes de Provence",
        region: "Provence, France",
        color: "Rosé",
        vintage: "2022",
        description: "'Orsuro' est un rosé de gastronomie, très pâle, limpide. Il dévoile un nez de pêche blanche, melon, fleurs blanches et zeste de citron. En bouche, il est structuré mais soyeux, long, avec une belle minéralité. Un rosé raffiné, tout en subtilité.",
        prix: "16 000 FCFA"
    },
    {
        name: "Marius Rosé",
        producer: "M. CHAPOUTIER",
        appellation: "IGP Pays d’Oc",
        region: "Pays d’Oc, France",
        color: "Rosé",
        vintage: "2023",
        description: "Robe rose saumoné. Le nez exprime des notes de petits fruits rouges (fraise écrasée, framboise), et de fleurs d’oranger. En bouche, le vin est ample, fruité, avec une finale acidulée. Un rosé tout terrain, très abordable et savoureux.",
        prix: "9 000 FCFA"
    },
    {
        name: "Aurisso",
        producer: "MATHILDE CHAPOUTIER",
        appellation: "AOC Côtes de Provence Sainte Victoire",
        region: "Provence, France",
        color: "Rosé",
        vintage: "2023",
        description: "Ce rosé est d’une grande finesse, au nez délicat de fleurs blanches, fraise, pamplemousse rose et pêche de vigne. En bouche, la texture est cristalline, droite, très minérale, avec une finale florale persistante. Un vin de caractère et d’élégance rare.",
        prix: "20 000 FCFA"
    },

    // --- LES PÉPITES DU PATRON (Vins Rouges) ---
    {
        name: "La Réserve XVX XIX XX",
        producer: "XAVIER VIGNON",
        appellation: "Vin de France (Multimillésimé)",
        region: "Vallée du Rhône, France",
        color: "Rouge",
        vintage: "NV (15/16/17)",
        description: "Cette cuvée est un assemblage unique de trois grands millésimes (2015, 2016 et 2017). Elle offre un nez intense de prune noire, de garrigue, de clou de girofle et de cuir. En bouche, la structure est soyeuse avec une belle trame minérale, témoignant du savoir-faire exceptionnel de Xavier Vignon.",
        prix: "70 000 FCFA"
    },
    {
        name: "Cuvée Anonyme",
        producer: "XAVIER VIGNON",
        appellation: "AOP Châteauneuf-du-Pape",
        region: "Vallée du Rhône, France",
        color: "Rouge",
        vintage: "2019",
        description: "Une véritable bombe aromatique issue de vieilles vignes de Grenache. Le nez dévoile des notes de fruits noirs mûrs, de réglisse, de chocolat noir et des touches de poivre. En bouche, c’est une explosion de matière avec des tanins veloutés et une finale d’une grande persistance.",
        prix: "60 000 FCFA"
    },
    {
        name: "Cornas",
        producer: "XAVIER VIGNON",
        appellation: "AOP Cornas",
        region: "Vallée du Rhône, France",
        color: "Rouge",
        vintage: "2001",
        description: "Un Cornas rare et patiné par le temps. Le nez est complexe, avec des notes de cuir, de fruits noirs confits, de cèdre et de boîte à cigares. La structure est encore vibrante, portée par des tanins fondus et une élégance remarquable. Un vin pour les collectionneurs.",
        prix: "145 000 FCFA"
    },
    {
        name: "Châteauneuf-du-Pape 1991",
        producer: "XAVIER VIGNON",
        appellation: "AOP Châteauneuf-du-Pape",
        region: "Vallée du Rhône, France",
        color: "Rouge",
        vintage: "1991",
        description: "Un très vieux millésime d'une rareté exceptionnelle. Il offre des arômes tertiaires de sous-bois, de truffe, de fruits secs et de cuir noble. La bouche est d’une souplesse absolue, fondue et d’une élégance rare. Un véritable fragment du temps en bouteille.",
        prix: "165 000 FCFA"
    },
    {
        name: "Arcane IX L’Hermite (Magnum)",
        producer: "XAVIER VIGNON",
        appellation: "AOP Côtes du Rhône",
        region: "Vallée du Rhône, France",
        color: "Rouge",
        vintage: "2016",
        description: "Un vin monumental et concentré. Le nez est riche avec des notes de mûre, de prune, d’encens, de cuir et de tabac blond. En bouche, il offre une amplitude et une densité impressionnantes, avec un équilibre parfait, sublimé par le format magnum.",
        prix: "100 000 FCFA"
    },
    {
        name: "Arcane La Papesse",
        producer: "XAVIER VIGNON",
        appellation: "AOP Châteauneuf-du-Pape",
        region: "Vallée du Rhône, France",
        color: "Rouge",
        vintage: "2016",
        description: "Un 100 % Grenache qui allie élégance et profondeur. Le nez est marqué par la cerise noire, la rose séchée, la garrigue et le poivre blanc. La bouche est veloutée, presque aérienne, tout en restant puissante et longue.",
        prix: "90 000 FCFA"
    },
    {
        name: "Arcane VI Les Amoureux",
        producer: "XAVIER VIGNON",
        appellation: "AOP Côtes du Rhône",
        region: "Vallée du Rhône, France",
        color: "Rouge",
        vintage: "2016",
        description: "Un vin sensuel et charmeur à dominante Grenache. Il développe des arômes de fruits rouges confits, de pétales de rose et de fines épices. La bouche est souple, fluide et d’une grande gourmandise.",
        prix: "45 000 FCFA"
    },
    {
        name: "L’Esprit Français",
        producer: "XAVIER VIGNON",
        appellation: "Vin de France",
        region: "Vallée du Rhône, France",
        color: "Rouge",
        vintage: "2016",
        description: "Un hommage au style classique et à l’équilibre. On y retrouve des notes de fruits noirs, d’épices, de cuir et de bois noble. La bouche est droite, structurée, avec une tension maîtrisée. Un vin taillé pour la garde.",
        prix: "85 000 FCFA"
    },
    {
        name: "Barberac",
        producer: "M. CHAPOUTIER",
        appellation: "AOP Châteauneuf-du-Pape",
        region: "Vallée du Rhône, France",
        color: "Rouge",
        vintage: "2016",
        description: "Un vin d’une grande richesse et d’une profondeur incroyable. Le bouquet est intense : fruits noirs mûrs, réglisse, garrigue et épices méditerranéennes. La structure est puissante, portée par des tanins soyeux et une finale persistante.",
        prix: "190 000 FCFA"
    },
    {
        name: "La Mordorée",
        producer: "M. CHAPOUTIER",
        appellation: "AOP Côte-Rôtie",
        region: "Vallée du Rhône, France",
        color: "Rouge",
        vintage: "2020",
        description: "Une élégance rare pour ce vin emblématique. Le nez offre des notes de fruits noirs, de violette, d’épices douces et une touche fumée. L’équilibre en bouche entre puissance et finesse est parfait, avec une finale minérale très longue.",
        prix: "280 000 FCFA"
    },
    {
        name: "Neve",
        producer: "M. CHAPOUTIER",
        appellation: "AOP Saint-Joseph",
        region: "Vallée du Rhône, France",
        color: "Rouge",
        vintage: "2021",
        description: "Expressif et élégant, ce vin dévoile des arômes de cerise fraîche, de framboise, de poivre blanc et de sous-bois. En bouche, l’équilibre est remarquable avec une acidité fraîche et des tanins fins qui apportent beaucoup de distinction.",
        prix: "240 000 FCFA"
    },
    {
        name: "Les Clos",
        producer: "M. CHAPOUTIER",
        appellation: "AOP Saint-Joseph",
        region: "Vallée du Rhône, France",
        color: "Rouge",
        vintage: "2021",
        description: "Un vin à la fois puissant et élégant. Le nez est intense sur les fruits rouges mûrs, les épices douces, le cuir et le sous-bois. La bouche est charpentée avec des tanins soyeux et une belle fraîcheur qui équilibre l'ensemble.",
        prix: "230 000 FCFA"
    },
    {
        name: "Les Granits",
        producer: "M. CHAPOUTIER",
        appellation: "AOP Hermitage",
        region: "Vallée du Rhône, France",
        color: "Rouge",
        vintage: "2021",
        description: "Un vin au caractère minéral et puissant. Le nez révèle des notes de fruits noirs, de cassis, de poivre noir, de graphite et de fumé. La bouche est dense, concentrée, avec des tanins fermes qui promettent une excellente garde.",
        prix: "120 000 FCFA"
    },
    {
        name: "Les Greffieux",
        producer: "M. CHAPOUTIER",
        appellation: "AOP Hermitage",
        region: "Vallée du Rhône, France",
        color: "Rouge",
        vintage: "2013",
        description: "Un vin d’une grande maturité. Le bouquet complexe mêle fruits noirs, épices, notes boisées et fumées. La bouche est ample, généreuse, avec des tanins parfaitement fondus. La finale évolue sur le cuir et la truffe.",
        prix: "250 000 FCFA"
    },
    {
        name: "Le Pavillon",
        producer: "M. CHAPOUTIER",
        appellation: "AOP Hermitage",
        region: "Vallée du Rhône, France",
        color: "Rouge",
        vintage: "2013",
        description: "Puissant et majestueux. On y trouve des arômes de fruits noirs mûrs, d’épices orientales, de cacao et de notes fumées. La concentration est exceptionnelle, les tanins fermes mais élégants. Un vin avec un potentiel de garde de plusieurs décennies.",
        prix: "630 000 FCFA"
    },
    {
        name: "L’Ermite",
        producer: "M. CHAPOUTIER",
        appellation: "AOP Hermitage",
        region: "Vallée du Rhône, France",
        color: "Rouge",
        vintage: "2013",
        description: "La cuvée la plus prestigieuse de la maison. Le nez est d’une profondeur remarquable : truffe, épices orientales, cuir et fumée. La bouche est d’une puissance et d’une concentration hors normes, avec une finale interminable.",
        prix: "650 000 FCFA"
    },
    {
        name: "Château Gazin",
        producer: "CHÂTEAU GAZIN",
        appellation: "AOC Pomerol",
        region: "Bordeaux, France",
        color: "Rouge",
        vintage: "2017",
        description: "Une magnifique expression du Merlot sur le terroir de Pomerol. Le nez est intense : fruits rouges mûrs, cerise noire, truffe et sous-bois. La bouche est ronde, généreuse, avec des tanins fondus et une grande élégance.",
        prix: "160 000 FCFA"
    },
    {
        name: "Château Pichon-Baron",
        producer: "CHÂTEAU PICHON-BARON",
        appellation: "AOC Pauillac",
        region: "Bordeaux, France",
        color: "Rouge",
        vintage: "2019",
        description: "Un vin prestigieux alliant concentration et finesse. On y retrouve des notes classiques de cassis, de cèdre, de graphite et de vanille. En bouche, la puissance rencontre l’élégance avec des tanins denses et soyeux.",
        prix: "360 000 FCFA"
    },
    {
        name: "Château Pavie-Macquin",
        producer: "CHÂTEAU PAVIE-MACQUIN",
        appellation: "AOC Saint-Émilion Grand Cru",
        region: "Bordeaux, France",
        color: "Rouge",
        vintage: "2020",
        description: "Une élégance remarquable pour ce Grand Cru Classé. Le nez offre des arômes intenses de fruits noirs mûrs, de prune, de violette et de bois précieux. La bouche est à la fois puissante et soyeuse, avec une finale d’une grande longueur.",
        prix: "200 000 FCFA"
    },

    // --- LES PÉPITES DU PATRON (Vins Blancs) ---
    {
        name: "Almutia Blancs de Noirs",
        producer: "XAVIER VIGNON",
        appellation: "AOP Châteauneuf-du-Pape",
        region: "Vallée du Rhône, France",
        color: "Blanc (de Noirs)",
        vintage: "NP",
        description: "L’Almutia Blancs de Noirs est une cuvée unique issue de raisins rouges vinifiés en blanc, typique de l’appellation Châteauneuf-du-Pape. Ce vin offre un profil aromatique complexe avec des notes délicates de fruits à chair blanche, d’agrumes, et une légère touche florale. En bouche, il se distingue par une belle fraîcheur, une texture ronde et une finale élégante marquée par une subtile minéralité. Son originalité et son équilibre en font un vin très apprécié.",
        prix: "55 000 FCFA"
    },
    {
        name: "Châteauneuf-du-Pape Blanc",
        producer: "XAVIER VIGNON",
        appellation: "AOP Châteauneuf-du-Pape",
        region: "Vallée du Rhône, France",
        color: "Blanc",
        vintage: "2022",
        description: "Ce Châteauneuf-du-Pape Blanc 2022 de Xavier Vignon séduit par son élégance et sa pureté aromatique. Le nez dévoile des notes d’agrumes mûrs, de fruits exotiques, ainsi que des nuances floral. En bouche, il est vif et équilibré, avec une belle fraîcheur acidulée et une texture légèrement onctueuse. La finale est longue et minérale.",
        prix: "45 000 FCFA"
    },
    {
        name: "Cuvée Anonyme Blanc",
        producer: "XAVIER VIGNON",
        appellation: "AOP Châteauneuf-du-Pape",
        region: "Vallée du Rhône, France",
        color: "Blanc",
        vintage: "2022",
        description: "La Cuvée Anonyme Blanc 2022 est un vin raffiné et complexe qui exprime pleinement le caractère du terroir de Châteauneuf-du-Pape. Au nez, elle révèle des arômes intenses de fruits blancs, de fleurs blanches et une pointe délicate d’épices. En bouche, le vin est ample, riche et structuré, offrant une belle harmonie entre gras et fraîcheur.",
        prix: "55 000 FCFA"
    }
];

const wineImageMap = {
            // Bulles & Champagnes
            "Crémant de Bourgogne": "image/champagne/crémant_de_bourgogne.jpeg",
            "Terre de Sables": "image/champagne/perseval_farge_terre_de_sables_brut_1946x.jpg",
            "Vouvray Brut": "image/champagne/vouary.jpeg",
            "Blanc de Blancs": "image/champagne/ruinart-blanc de blanc.jpeg",

            // Vins Rouges - Bordeaux
            "Merlot Moqueur": "image/vins_rouges/Merlot_Moqueur.png",
            "Château Hourbanon": "image/vins_rouges/medoc-chateau-hourbanon-2016-1000x1000-1.png",
            "Château Bardins": "image/vins_rouges/péseac_logan_brandis.png.png",
            "Le P'tit Coup": "image/vins_rouges/le-p-tit-coup-igp-coteaux-de-peyriac-rouge-2020.jpeg",
            "Bourgogne Pinot Noir": "image/vins_rouges/pinot-noir-2021.jpeg",
            "Aloxe-Corton": "image/vins_rouges/aloxe-corton-2020.jpg",
            "Monthélie 'Aux Fournereaux'": "image/vins_rouges/pierrick_bouley_monthelie_aux_fourneaux_1024x1024.png",
            "Monthélie Premier Cru 'Les Clous'": "image/vins_rouges/Monthelie_les_clous.png",
            "Pommard": "image/vins_rouges/Pommard_village.png",
            "Beaujolais Village": "image/vins_rouges/domaine-pierre-andre-dumas-beaujolais-villages-bea.jpeg",
            "Brouilly": "image/vins_rouges/Brouilly-Pierre-Andre-Dumas.jpeg",
            "Mont Sanguié": "image/vins_rouges/Mont Sanguié 2022 (Incandia Bio).jpeg",
            "Ju de Vie": "image/vins_rouges/Ju de Vie 2022.jpeg",
            "Marius Grenache": "image/vins_rouges/Marius Grenache 2023 (M. Chapoutier).jpeg",
            "Belleruche": "image/vins_rouges/m-chapoutier-cote-du-rhone-belleruche-rouge-2022.jpeg",
            "Les Meysonniers": "image/vins_rouges/m-chapoutier-les-meysonniers.jpeg",
            "La Bernardine": "image/vins_rouges/La Bernardine 2021 (M. Chapoutier).jpeg",
            "Côtes du Roussillon Villages": "image/vins_rouges/Côtes du Roussillon Villages 2022 (Domaine de Bila Haut).jpeg",
            "Tempranillo": "image/vins_rouges/tempranillo 2020 (Dominio del Soto).jpeg",
            "Crianza": "image/vins_rouges/dominio-del-soto-crianza.jpeg",
            "Vieilles Vignes": "image/vins_rouges/cotes-du-rogne-vieilles-vignes-rouge-sa.jpeg",
            "Gigondas": "image/vins_rouges/Gigondas - xavier-vignon.png",
            "Château Larrivet Haut-Brion": "image/vins_rouges/chateau-larrivet-pesseac-leogan.png",

            // Vins Blancs - 
            "Vouvray Sec": "image/vins_blanc/Vouvray Sec (Vignoble Brisebarre).png",
            "Petit Chablis": "image/vins_blanc/vin-petit-chablis-2023-domaine-millet.jpg",
            "Jurançon Sec 'Renaissance'": "image/vins_blanc/Jurançon-sec.jpeg",
            "Chablis": "image/vins_blanc/vin-chablis-2023-domaine-millet.jpg",
            "Perrière": "image/vins_blanc/_laperriere-sancerre-blanc_nvhabillage_1_650x800.jpg",
            "Chardonnay": "image/vins_blanc/Chardonnay - Château Marjosse.png",
            "Vouvray Moelleux 'Grande Réserve'": "image/vins_blanc/vouary_moelleux.png",
            "L’Enclos des Roses": "image/vins_blanc/enclos_des roses.jpeg",
            "Marius Viognier": "image/vins_blanc/marius-blanc-2024-by-m-chapoutier.png",
            "Sauternes": "image/vins_blanc/chateaux_fontaine_sauternne.jpeg",

            // Vins Rosé - 
            "Marius Rosé": "image/vins_rosé/marius_rosé.png",
            "Aurisso": "image/vins_rosé/Aurisso_Mathilde_Cotes_de_Provence_ST_VictoireM.Chapoutier.png",
            "Orsuro": "image/vins_rosé/mathilde-chapoutier-selection-cdp-orsuro-nv-bottle-scaled.jpg",

            // Vins Du patron Rouges - 
            "La Réserve XVX XIX XX": "image/patron_rouge/RESERVE X XII XV_0.png",
            "Cuvée Anonyme": "image/vins_rouges/Anonyme_rouge_2019.png",
            "Cornas": "image/vins_rouges/XV Cornas 2001 BD.png",
            "Châteauneuf-du-Pape 1991": "image/vins_rouges/chateau_du_pape.png",
            "Les Meysonniers": "image/vins_rouges/m-chapoutier-les-meysonniers.jpeg",
            "Arcane IX L’Hermite (Magnum)": "image/vins_rouges/ArcaneHermite_2016_0.png",
            "Arcane La Papesse": "image/vins_rouges/ArcanePapesse_2016_0.png",
            "Arcane VI Les Amoureux": "image/vins_rouges/ArcaneAmoureux_2016_1.png",
            "L’Esprit Français": "image/vins_rouges/Gigondas - xavier-vignon.png",
            "Barberac": "image/vins_rouges/barbera_chateau_du_pape.png",
            "La Mordorée": "image/vins_rouges/la_mordoree_297x1000.png",
            "Neve": "image/vins_rouges/neve_saint_joseph_mr_chapoutier.png",
            "Les Clos": "image/vins_rouges/le_clos_saint_joseph_mr_chapoutier_.png",
            "Les Granits": "image/vins_rouges/Les-Granits-Rouge---AOP.png",
            "Les Greffieux": "image/vins_rouges/les_greffieux_297x1000r.png",
            "Le Pavillon": "image/vins_rouges/le_pavillon_297x1000.png",
            "L’Ermite": "image/vins_rouges/lermite_rouge_297x1000.png",
            "Château Gazin": "image/vins_rouges/Pomerol_chateau_gazin.jpg",
            "Château Pichon-Baron": "image/vins_rouges/Pauillac_chateau_pichon.png",
            "Château Pavie-Macquin": "image/vins_rouges/chateau-pavie-macquin-2020-france-bordeaux-saint-emilion-grand-cru-2.png",
            
            // Vins Du patron Blanc 
            "Almutia Blancs de Noirs": "image/patron_blanc/Almutia_NV.png",
            "Châteauneuf-du-Pape Blanc": "image/patron_blanc/ChateauneufduPapeblanc_20.png",
            "Cuvée Anonyme Blanc": "image/patron_blanc/Anonyme_blanc_bio_2020.png",

            // Vins Blancs - Loire
            "Vouvray Sec": "img/44.png",
            "Vouvray Moelleux Grande Reserve": "img/45.png",

            // Vins Blancs - Sud-Ouest
            "Jurançon Sec Renaissance": "img/46.png",
            "L'Enclos des Roses Moelleux": "img/47.png",

            // Vins Blancs - Bourgogne
            "Bourgogne Chardonneay": "img/48.png",
            "Chablis": "img/49.png",
            "Petit Chablis": "img/50.png",
            "Rully La Chaponnière": "img/51.png",

            // Vins Blancs - Vallée du Rhône & Divers
            "Vermentino Yennenga": "img/52.png",
            "Marius Viognier à Vis": "img/53.png",
            "Muscat de Beaumes de Venise": "img/54.png",

            // Vins Blancs - Bordeaux
            "Chardonnay": "img/55.png",
            "Bordeaux": "img/56.png",
            "Entre Deux Mers": "img/57.png",
            "Bordeaux Moelleux": "img/58.png",
            "Sauternes": "img/59.png",
            "Perrière": "img/60.png",

            // Vins Rosés
            "Expression": "img/61.png",
            "Côtes de Provence Orsuro": "img/62.png",
            "Marius": "img/63.png",
            "Côtes de Provence Sainte Victoire Aurisso": "img/64.png"
        };


const popularWines = [
            wines.find(wine => wine.name === "Chablis"),
            wines.find(wine => wine.name === "Pessac-Léognan"),
            wines.find(wine => wine.name === "Gigondas"),
            wines.find(wine => wine.name === "Bons Ju"),
            wines.find(wine => wine.name === "Blanc de Blancs"),
            wines.find(wine => wine.name === "Marius")
        ].filter(wine => wine !== undefined); // Filter out any undefined if a wine isn't found

        const popularWineCatalogue = document.getElementById('popular-wine-catalogue');

        function generateWineCard(wine, isPopular = false) {
            const imageUrl = wineImageMap[wine.name] || `https://via.placeholder.com/400x280?text=${wine.producer.replace(/\s/g, '+')}+${wine.name.replace(/\s/g, '+')}`;
            const colorClass = wine.color.toLowerCase().replace(/é/g, 'e'); // For badge class

            // Créer un objet wine avec l'image incluse
            const wineWithImage = {
                ...wine,
                image: imageUrl
            };

            return `
                <div class="card wine-card">
                    <img src="${imageUrl}" alt="${wine.producer} - ${wine.name}">
                    <div class="card-content">
                        <h3>${wine.producer} - ${wine.name}</h3>
                        <div class="wine-details">
                            <p class="wine-detail"><strong>Appellation:</strong> ${wine.appellation}</p>
                            ${wine.vintage !== 'N/A' ? `<p class="wine-detail"><strong>Millésime:</strong> ${wine.vintage}</p>` : ''}
                            <p class="wine-detail"><strong>Région:</strong> ${wine.region}</p>
                        </div>
                        <p class="wine-description">${wine.description}</p>
                        <div class="wine-price">${wine.prix}</div>
                        <div class="wine-actions">
                            <button onclick="addToCart(${JSON.stringify(wineWithImage).replace(/\"/g, '&quot;')})" class="add-to-cart-btn">Ajouter au panier</button>
                        </div>
                    </div>
                </div>
            `;
        }

        function displayPopularWines() {
            popularWineCatalogue.innerHTML = '';
            popularWines.forEach(wine => {
                popularWineCatalogue.innerHTML += generateWineCard(wine, true);
            });
        }

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Initialize on page load
        document.addEventListener('DOMContentLoaded', () => {
            displayPopularWines();
        });

        // Toggle menu on click
        const toggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('nav-menu');

        toggle.addEventListener('click', () => {
            menu.classList.toggle('show');
        });

        // Ferme le menu si on clique en dehors
        document.addEventListener('click', (e) => {
            const isClickInsideMenu = menu.contains(e.target);
            const isClickOnToggle = toggle.contains(e.target);

            if (!isClickInsideMenu && !isClickOnToggle) {
            menu.classList.remove('show');
            }
        });

        // Fermer quand on clique sur un lien du menu
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
            menu.classList.remove('show');
            });
        });