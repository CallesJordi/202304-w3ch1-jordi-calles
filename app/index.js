import characters from "./Characters/Characters";
import CharactersList from "./components/CharacterList/CharacterList";

const appContainer = document.querySelector(".app");
new CharactersList(appContainer, characters);
