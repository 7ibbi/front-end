import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

class Todo extends LitElement {
    static get styles() {
        return css`
                .todo-checked {
                    color: red;
                }
            `;
    }

    static get properties() {
        return {
            name: {type: String},
            done: {type: Boolean}
        };
    }

    render() {
        return html`
            <li class="${this.done ? "todo-checked" : ""}">
                        ${this.name}
                        <input type="checkbox" ?checked="${this.done}" @click="${(event) => this.handleCheckboxClick(event, index)}"/>
            </li>
        `;
    }

    handleCheckboxClick(event, index) {
        const new_todos = [...this.todos];
        new_todos[index].done = event.currentTarget.checked;

        this.todos = new_todos;
        // console.log(event.target.checked);
        // console.log(event.currentTarget.checked);
        // console.log(index);
    }
}

export default customElements.define('my-todo', Todo);