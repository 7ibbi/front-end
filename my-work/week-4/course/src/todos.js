import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

import "./todo.js";
// import Todo from "./todo";

class Todos extends LitElement {
    static get styles() {
        return css`
            `;
    }

    static get properties() {
        return {
            title: {type: String},
            todos: {type: Array},
        }
    }

    constructor() {
        super();

        this.title = 'Todos';
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
        <form @submit="${this.handleAddedTodo}">
            <input name="newTodo" id="newTodo" type="text" placeholder="new todo">
            <input type="submit" value="Add TODO">
        </form>
        <ul>
            ${this.todos.map((item, index) => {
                return html`
                    <my-todo .id=${index} .name=${item.name} .done=${item.done} 
                    @checkboxClickEvent=${this.handleCheckboxClickEvent}
                    @todoUpdateTitle="${this.handleTodoUpdateTitle}">
                    </my-todo>`;
            })}
        </ul>
        `;
    }

    handleCheckboxClickEvent(event) {
        const id = event.detail.id;
        const done = event.detail.done;

        let newTodos = [...this.todos];
        newTodos[id].done = done;
        this.todos = newTodos;
    }

    handleAddedTodo(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        this.todos = [...this.todos, {
            name: formData.get("newTodo"),
            done: false
        }];
    }

    handleTodoUpdateTitle(event) {
        const id = event.detail.id;
        const title = event.detail.name;

        console.log(event.detail.name);

        let newTodos = [...this.todos];
        newTodos[id].name = title;
        this.todos = newTodos;
    }

}

customElements.define('my-todos', Todos);