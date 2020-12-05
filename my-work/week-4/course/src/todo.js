import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

class Todo extends LitElement {
    static get styles() {
        return css`
                .todo-checked {
                    color: red;
                    text-decoration: line-through;
                }
            `;
    }

    static get properties() {
        return {
            id: {type: Number},
            name: {type: String},
            done: {type: Boolean},
            state: {type: String}
        };
    }

    constructor() {
        super();
    }

    render() {
        return html`
            
            <div class="${this.done ? "todo-checked" : ""}">
                ${this.name}
                ${this.state == "editing" ? 
                    html`
                        <input id="new-title" value="${this.name}">
                        <button @click="${this.handleSaveEditClick}">Save</button>
                        <button @click="${this.handleCancelEditClick}">Cancel</button>
                    `
                    :
                    html`
                        ${this.name}
                        <input type="checkbox" ?checked="${this.done}" @click="${(event) => this.handleCheckboxClick(event)}"/>
                        <button @click="${this.handleEditClick}">Edit</button>
                    `} 

            </div>
        `;
    }

    handleCheckboxClick(event) {
        this.dispatchEvent(new CustomEvent("checkboxClickEvent", {
            detail: {
                id: this.id,
                done: event.target.checked,
            }
        }));
    }

    handleEditClick(event) {
        this.state = "editing";
    }

    handleCancelEditClick(event) {
        this.state = "";
    }

    handleSaveEditClick(event) {
        this.state = "";

        console.log(this.shadowRoot.querySelector("#new-title").value);

        this.dispatchEvent(new CustomEvent("handleTodoUpdateTitle", {
            detail: {
                id: this.id,
                name: this.shadowRoot.querySelector("#new-title").value,
            }
        }));
    }
}

export default customElements.define('my-todo', Todo);