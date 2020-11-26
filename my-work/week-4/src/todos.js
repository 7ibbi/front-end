import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

import "./todo.js";

class Todos extends LitElement {
    static get styles() {
        return css`
            `;
    }

    static get properties() {
        return {
            todos: {type: Array},
            title: {type: String}
        }
    }

    constructor() {
        super();

        this.title = 'Titlu';
        this.todos = [
            {
                name: 'Mere',
                done: true
            },
            {
                name: 'Pere',
                done: false
            }
        ]
    }


    render() {
        return html`
        <h2>${this.title}</h2>
        <ul>
            ${this.todos.map((item, index) => {
                return html`
                    <my-todo .name=${item.name} .done=${item.done}></my-todo>`;
            })}
        </ul>
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

customElements.define('my-todos', Todos);