/**
 * Creates a list item with a html value.
 *
 * @param {string} html the html to add to the list item
 * @return {HTMLLIElement} a li element element with html
 */
const createListItem = (html) => {
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.innerHTML = html;
  return li;
};

/**
 * Creates a list item for a character entry.
 *
 * @see Personnage
 * @param {Personnage} character the character to add to the list
 * @return {HTMLLIElement} a li element of a character
 */
const createCharacterEntry = (character) =>
  createListItem(`
    <img class="w-md" src="${character.img}" alt="${character.nom}">
    <button type="button"
        onclick="handleClick(this)"
        data-message="${character.attaque()}">
        <img class="w-xs" src="asset/attack.jpg" alt="attack">
    </button>
    <button type="button"
        onclick="handleClick(this)"
        data-message="${character.support()}">
        <img class="w-xs" src="asset/support.jpg" alt="support">
    </button>`);

/**
 * Handles the click event for a character entry.
 *
 * @see Personnage
 * @param {string} message the message to append to the battlelog
 */
function handleClick({dataset: {message}}) {
  const battlelogElement = document.getElementById('battlelog');

  const battlelogEntryElement = createListItem(message);
  battlelogElement.appendChild(battlelogEntryElement);
}

/**
 * Appends a character to the list.
 *
 * @param {Personnage} personnage the character to add the the list
 */
function afficherPersonnage(personnage) {
  const charactersElement = document.getElementById('characters');

  const characterEntryElement = createCharacterEntry(personnage);
  charactersElement.appendChild(characterEntryElement);
}

window.onload = () => {
  afficherPersonnage(new Wizard());
  afficherPersonnage(new Rogue());
  afficherPersonnage(new Fighter());
  afficherPersonnage(new Monk());
};
