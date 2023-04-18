import Component from "../Component.js";

class Button extends Component {
  text;

  constructor(parentElement, className, text) {
    super(parentElement, "button", className);
    this.text = text;

    this.renderHtml();
  }

  renderHtml() {
    this.element.textContent = this.text;
  }
}

export default Button;
