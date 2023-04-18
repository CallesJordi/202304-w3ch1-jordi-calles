import Component from "../Component";
import CharacterCard from "../CharacterCard/CharacterCard";

class CharactersList extends Component {
  characters;

  constructor(parentElement, characters) {
    super(parentElement, "ul", "characters-list row list-unstyled");
    this.characters = characters;
    this.renderHtml();
  }

  renderHtml() {
    for (
      let positionCharacter = 0;
      positionCharacter < this.characters.length;
      positionCharacter++
    ) {
      new CharacterCard(this.element, this.characters[positionCharacter]);
    }
  }
}

export default CharactersList;
