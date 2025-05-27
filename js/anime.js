// Paires d'images liées
let imagePairs = [
  ["./assets/imganim/anime1.gif", "./assets/imganim/anime2.png"],
  ["./assets/imganim/anime3.gif", "./assets/imganim/anime4.png"],
  ["./assets/imganim/anime5.png", "./assets/imganim/anime6.gif"],
  ["./assets/imganim/anime7.png", "./assets/imganim/anime8.gif"],
  ["./assets/imganim/anime9.png", "./assets/imganim/anime10.gif"],
  ["./assets/imganim/anime11.gif", "./assets/imganim/anime12.png"],
  ["./assets/imganim/anime13.png", "./assets/imganim/anime14.gif"],
  ["./assets/imganim/anime15.gif", "./assets/imganim/anime16.png"],
  ["./assets/imganim/anime17.png", "./assets/imganim/anime18.gif"],
  ["./assets/imganim/anime19.png", "./assets/imganim/anime20.gif"],
  ["./assets/imganim/anime21.gif", "./assets/imganim/anime22.png"],
  ["./assets/imganim/anime23.png", "./assets/imganim/anime24.gif"],
  ["./assets/imganim/anime25.gif", "./assets/imganim/anime26.png"],
  ["./assets/imganim/anime27.gif", "./assets/imganim/anime28.png"],
  ["./assets/imganim/anime29.png", "./assets/imganim/anime30.gif"],
  ["./assets/imganim/anime31.gif", "./assets/imganim/anime32.png"],
  ["./assets/imganim/anime33.gif", "./assets/imganim/anime34.png"],
  ["./assets/imganim/anime35.png", "./assets/imganim/anime36.gif"],
  ["./assets/imganim/anime37.gif", "./assets/imganim/anime38.png"],
  ["./assets/imganim/anime39.gif", "./assets/imganim/anime40.png"],
  ["./assets/imganim/anime41.png", "./assets/imganim/anime42.gif"],
  ["./assets/imganim/anime43.gif", "./assets/imganim/anime44.png"],
  ["./assets/imganim/anime45.png", "./assets/imganim/anime46.gif"],
  ["./assets/imganim/anime47.gif", "./assets/imganim/anime48.png"],
  ["./assets/imganim/anime49.png", "./assets/imganim/anime50.gif"],
  ["./assets/imganim/anime51.gif", "./assets/imganim/anime52.png"],
  ["./assets/imganim/anime53.png", "./assets/imganim/anime54.gif"],
  ["./assets/imganim/anime55.gif", "./assets/imganim/anime56.gif"],
  ["./assets/imganim/anime57.gif", "./assets/imganim/anime58.png"],
  ["./assets/imganim/anime59.png", "./assets/imganim/anime60.gif"],
  ["./assets/imganim/anime61.gif", "./assets/imganim/anime62.gif"]
];
// Textes synchronisés avec les paires
let textList = [
  "Thomas : Hé ho, salut ! Clique n’importe où pour commencer l’histoire.",
  "Thomas : Oh super ! Comme tu as pu le deviner, tu es dans la rubrique \"Histoire de Late-Night\". Ici, une seule règle : quand le texte a fini de s’afficher et que tu as fini de lire, clique n'importe où pour faire apparaître la suite. Bonne lecture !",
  "Mos : Ok, assez discuté, à moi de commencer.",
  "Mos : Tout a commencé à la faculté de Strasbourg. C’est là que Thomas et moi nous sommes rencontrés...",
  "Mos : Très vite, nous sommes devenus amis.",
  "Thomas : En même temps, on était dans la même classe et on avait les mêmes centres d’intérêt.",
  "Mos : En effet. À force de s’entraider en cours et de discuter de nos passions, on est devenus proches.",
  "Thomas : C’est vrai, mais bon, on ne va pas parler uniquement de notre vie. Pourquoi on a créé Late-Night ?",
  "Mos : C’est vrai, ça, c’est une meilleure question !",
  "Mos : À un moment, on a dû avoir chacun notre appartement, toi de ton côté et moi du mien.",
  "Thomas : En effet, et la vie a bien fait les choses : on s’est retrouvés à habiter tout près l’un de l’autre.",
  "Mos : Le plus drôle, c’est qu’on n’avait même pas fait exprès.",
  "Thomas : Ouais, mais bon, ça ne nous a pas apporté que du bon. Moi, je me suis retrouvé seul, loin de ma famille, et toi, tu avais des problèmes personnels qui te suivaient jusqu’à chez toi...",
  "Thomas : Ajoute à ça le fait qu’on devait devenir des adultes, on a eu du mal à s’habituer à cette nouvelle vie.",
  "Mos : En effet. Mais comme on habitait pas loin l’un de l’autre, on se retrouvait souvent dans un petit parc à côté de chez moi pour parler.",
  "Thomas : Ouais, sauf que la journée, on était pris entre la fac et le travail.",
  "Thomas : Du coup, on ne pouvait se rejoindre que tard la nuit, au début avec ta copine, puis juste tous les deux.",
  "Mos : Maintenant que j’y pense, c’était vraiment étrange : deux jeunes adultes dans un immense parc, avec uniquement la lune pour nous éclairer.",
  "Thomas : En effet. Mais c’est tous ces paramètres réunis qui nous ont poussés à nous confier l’un à l’autre.",
  "Thomas : On parlait de tout et de rien : nos problèmes passés, les choses qui nous tracassaient pour l’avenir...",
  "Mos : C’est sûr. Mais bon, en vrai, c’est surtout moi qui parlais, et toi qui essayais de m’aider.",
  "Thomas : Certes, mais ça m’a aidé aussi, d’une certaine manière. Et puis, si j’avais besoin de te parler, je le faisais aussi.",
  "Mos : Et à force de faire des rendez-vous toutes les semaines, voire tous les deux jours…",
  "Thomas : On s’est dit qu’on pourrait peut-être aider d’autres jeunes adultes comme nous, qui n’ont pas la chance de pouvoir se réunir avec leurs proches.",
  "Mos : C’est comme ça que j’ai eu l’idée de filmer ces moments et d’en faire un podcast.",
  "Thomas : Mais le problème, c’est qu’il faisait trop noir, et il y avait trop de vent dehors. Comme j’avais un plus grand appartement et un peu de matériel, je t’ai proposé qu’on enregistre chez moi.",
  "Mos : Ça perdait un peu de son charme, mais c’est mieux que rien.",
  "Mos & Thomas : Et c’est comme ça qu’on a créé Late-Night.",
  "Thomas : Merci de nous avoir lus, et de nous écouter dans notre podcast !",
  "Mos : Cette petite animation est maintenant terminée. Vous pouvez continuer de naviguer sur le site de Late-Night et…",
  "Thomas & Mos : À la prochaine !!!"
];

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let message = document.getElementById("message");

let currentIndex = 1;

img1.src = imagePairs[0][0];
img2.src = imagePairs[0][1];
message.textContent = textList[0];
message.classList.add("visible");

function handleClick() {
  if (currentIndex >= imagePairs.length || currentIndex >= textList.length) {
    return;
  }

  let pair = imagePairs[currentIndex];
  img1.src = pair[0];
  img2.src = pair[1];

  message.classList.remove("visible");

  setTimeout(function () {
    message.textContent = textList[currentIndex];
    message.classList.add("visible");

    currentIndex++;
  }, 300);
}

document.body.addEventListener("click", handleClick);
