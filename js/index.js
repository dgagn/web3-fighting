function createLi(
  personnage,
  attackSrc = "asset/attack.jpg",
  supportSrc = "asset/support.jpg"
) {
  return `
	<li class="list-group-item">
        <img class="w-md" src="${personnage.img}" alt="${personnage.img}">
        <button type="button" id="attack-${personnage.nom.toLowerCase()}">
            <img class="w-xs" src="${attackSrc}" alt="attack">
        </button>
        <button type="button" id="support-${personnage.nom.toLowerCase()}">
            <img class="w-xs" src="${supportSrc}" alt="support">
        </button>
    </li>`;
}

function print(nom) {
	console.log(nom)
}

const personnages = []
function afficherPersonnage(personnage) {
  const characters = document.getElementById("characters");
  characters.innerHTML += createLi(personnage);
	personnages.push(personnage)
}

const btnAttackElement = document.getElementById(
	`attack-moine`
);

btnAttackElement.onclick = () => {
	console.log('test')
}

window.onload = () => {
  afficherPersonnage(new Wizard());
  afficherPersonnage(new Rogue());
  afficherPersonnage(new Fighter());
  afficherPersonnage(new Monk());
};
