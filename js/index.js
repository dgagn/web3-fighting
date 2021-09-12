const createCharacterEntry = (character) => `
    <img class="w-md" src="${character.img}" alt="${character.nom}">
    <button type="button" onclick="handleClick(this)" data-message="${character.attaque()}">
        <img class="w-xs" src="asset/attack.jpg" alt="attack">
    </button>
    <button type="button" onclick="handleClick(this)" data-message="${character.support()}">
        <img class="w-xs" src="asset/support.jpg" alt="support">
    </button>`;

const createListItem = (html) => {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = html;
  return li;
};

function handleClick({ dataset: { message } }) {
  const battlelog = document.getElementById("battlelog");

  const listItem = createListItem(message);
  battlelog.appendChild(listItem);
}

function afficherPersonnage(personnage) {
  const characters = document.getElementById("characters");

  const listItem = createListItem(createCharacterEntry(personnage));
  characters.appendChild(listItem);
}

window.onload = () => {
  afficherPersonnage(new Wizard());
  afficherPersonnage(new Rogue());
  afficherPersonnage(new Fighter());
  afficherPersonnage(new Monk());
};
