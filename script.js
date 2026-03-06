const paragraphes = [
  `Coucou mon cœur !! Ça va ? (je te met pas de champs de réponse t’es obliger d’aller bien si j’existe dans ta vie 🤭). 
Comme tu m’as demandé de ne plus t’acheter de cadeau mais que je ne peux pas m’empêcher d’utiliser mon temps mon argent et mon esprit a chercher comment te montrer mon amour et à être attentionné avec toi. Me voilà entrain de coder tout un site rien que pour te déclarer ma flamme. 🤣 Peut être tu vas être gêné ou tu vas trouver ça trop stylé (en tout cas j’espère). 🤞🏼`,
  
  `Tout d'abord, qu’Allah t’accorde une longue vie, pleine de bonheur, pieuse et prospère. Tu es une personne incroyable : intelligente, belle, gentille, humaine, honnête, sensible, pieuse, drôle, respecteuse… et plein de trucs auxquels je ne pense pas forcément tout de suite au moment où je fais ce texte.`,

  `Plusieurs fois tu m’as dis : « la meilleure chose que tu peux m’offrir c’est la confiance la fidélité et l’amour » c’est pour ça que j’ai décider de montrer à travers cette lettre écrite à cœur ouvert l’amour que je ressens pour toi, ce que j’écris c’est sincère, je ne le dis qu'a toi, c’est ce que je ressens et j'ai jamais fais ça pour personne et j'espère que personne n'a jamais eu cette idée avant moi.`,

  `Mansour, tu es mon premier amour. Grâce à toi, j’ai découvert que je peux aimer une personne, penser à cette personne quotidiennement, à n’importe quel moment de la journée. Ça en devient même un automatisme, un réflexe, je pense a toi tout le temps même a des moments trop bizarre genre quand je me craque le genoux, t'es devenu une véritable obsession pour mon esprit.`,

  `Depuis qu’on s’est parler pour la première fois j’ai kiffer parler avec toi, tu m’as fais rire, tu me fais rire tout le temps et c’est ce dont j’ai besoin. Je t’ai prévenu que j’étais dépressive et que c’était compliqué à gérer mais t’as pas montrée une once de réticence au contraire tu voulais m’aider et ça m’a grave touché. Le fais que tu m’ai rapidement fais confiance, qu’on ai trouvé plein de choses en commun qui ne sont pas commune à tout le monde, qu’on se comprenne et qu’on se soit vite autant rapprocher ça me rend tellement heureuse.`,
  
`J’aimerais te connaitre parfaitement, tes passions, tes hobbies, tes histoires, et m’adapter à toi. Je sais que je peux être chiante, mais je ne le suis pas avec tout le monde, seulement avec les personnes que j’apprécie et avec qui je me sens à l’aise. Sache que jamais je ne te repousserai si tu fais un effort vers moi, car quand je parle avec toi, ce n’est plus ma raison mais mon cœur qui parle.`,

`T’es un homme tellement gentil attentionné drôle tu fais attention à tout t’es entreprenant t'as la tête sur les épaules et tu connais tes responsabilités malgré le fait que tout te soit tombé dessus d’un coup. T’es pas un homme compliqué à vivre et c’est pour ça que je veux finir ma vie avec toi. Je sais que tu vas m’éduquer, tu m’apprend plein de choses que ce soit sur la vie ou sur la religion. T’as des principes et des valeurs qui me plaisent tellement tellement, ça m’a séduite. Tu détiens tout ce que je recherchais chez un homme et même encore plus. T’es la rencontre à laquelle je m’attendais le moins et je remercie الله et je suis tellement reconnaissante qu’il t’ai mis sur mon chemin.`,
 
`Je veux tenir la promesse que je t'ai faite, je veux être ta femme, et rester a tes cotés toute la vie, je veux être la femme pour qui tu te leves le matin, celle qui portera tes enfants, je veux te pousser vers le haut et t'aider à devenir la meilleur version de toi pour qu'on soit à deux la meilleur version de nous.`,

  `Tu m’as aider à avancer dans mon état de santé mentale plus que quiconque et que n’importe quel médicament, quand je suis avec toi je suis tellement à l’aise que je m’endormais au début, je me sens tellement en sécurité et apaiser dans tes bras tu te rend pas compte. A tes côté, le temps s’arrête, le stress s’arrête, je pense plus à rien, plus à personne, je ne vois que toi, que toi et ton sourire qui illumine ma journée, toi et ton pti regard aux sourcils froncés quand tu remarques que je te garde, et ta fossette à droite qui se creuse quand tu rigoles je meurs pour elle. ta manière de rougir et de tourner la tête quand t’es gêné ou de te gratter la la tête quand tu comprends pas quelque chose.`,

  `Toute tes mimiques trop mignonnes enfait je t’ai tellement observé que je pourrai décrire tout ton langage corporel pendant des heures tellement tu me passionne.`,

  `Je t’aime Mansour, je suis tombée amoureuse de toi, je t’aime d’une manière donc jamais je me serai cru capable d’aimer. Je tiens plus à toi qu’à moi même.`,

  `Merci pour tout ce que tu m’as apporté.`,
'<img id="image" src="img/M+N.jpeg" alt="Image"> Notre première photo ensemble on était trop pipouuu. Ta hbiba, À mon petit bb d’amour.'
]

// On crée une variable pour stocker notre "chronomètre"
let chronoMachine; 

function effetMachineAEcrire(texteComplet, elementHTML) {
  // 1. On vide la lettre avant de commencer à écrire
  elementHTML.innerHTML = ""; 
  
  // 2. On crée un compteur pour savoir à quelle lettre on en est
  let indexLettre = 0;

  // 3. SECURITÉ : S'il y avait déjà une machine à écrire en cours (si elle clique vite sur la flèche), on l'arrête !
  clearInterval(chronoMachine);

  // 4. On lance le chronomètre !
  chronoMachine = setInterval(function() {
    
    // Si on n'a pas encore affiché toutes les lettres...
    if (indexLettre < texteComplet.length) {
      // On ajoute la lettre actuelle à la fin du texte sur le site
      elementHTML.innerHTML += texteComplet.charAt(indexLettre);
      // On passe à la lettre suivante
      indexLettre++;
    } else {
      // Si le texte est fini, on arrête le chronomètre
     clearInterval(chronoMachine); 
    }
    
  }, 15); // 35 millisecondes, c'est une bonne vitesse (plus le chiffre est petit, plus ça écrit vite)
}

let conteur = 0

function affichage() {
    // J'AI CHANGÉ L'ID ICI AUSSI
    let zonetexte = document.getElementById("texte-dialogue");
    if (conteur === paragraphes.length - 1) {
        zonetexte.innerHTML = paragraphes[conteur]
    } else {
        effetMachineAEcrire(paragraphes[conteur], zonetexte);
    }
}

//affichage(); // Affiche le premier paragraphe au chargement

let monBoutonDroite = document.getElementById("droite");
    monBoutonDroite.addEventListener("click", function () {
        if (conteur >= paragraphes.length - 1) {
            conteur = 0
        }else {
            conteur++
        }
        affichage()
    });

let monBoutonGauche = document.getElementById("gauche");
    monBoutonGauche.addEventListener("click", function () {
        if (conteur <= 0) {
            conteur = paragraphes.length - 1
        }else {
            conteur--
        }
        affichage()
    });

// --- LOGIQUE DE L'ANIMATION DE L'ENVELOPPE ---

let ecranIntro = document.getElementById("ecran-intro");
let enveloppe = document.getElementById("enveloppe");

enveloppe.addEventListener("click", function() {
    
    // 1. On déclenche l'animation CSS d'ouverture (le rabat se lève)
    enveloppe.classList.add("enveloppe-ouverte");
    
    // 2. On attend 1 seconde que le rabat soit ouvert, puis on fait disparaître l'écran
    setTimeout(function() {
        ecranIntro.style.opacity = "0"; // Déclenche le fondu CSS
        
        // 3. On attend encore 1 seconde que le fondu soit fini pour supprimer l'écran et lancer le texte !
        setTimeout(function() {
            ecranIntro.style.display = "none"; // Enlève l'écran d'intro pour pouvoir cliquer sur les boutons en dessous
            
            affichage(); // LA MACHINE À ÉCRIRE COMMENCE SEULEMENT MAINTENANT !
            
        }, 1000); // 1000 millisecondes = 1 seconde
        
    }, 800); // 800ms correspond au temps d'ouverture de l'enveloppe dans le CSS
    
});
