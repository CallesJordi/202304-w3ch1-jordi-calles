import characters from "./Characters/characters.js";
import CharactersList from "./components/CharacterList/CharacterList.js";

const appContainer = document.querySelector(".app");
new CharactersList(appContainer, characters);
