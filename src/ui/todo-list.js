import html from 'html-template-tag';
import {store} from "../redux/store";
import {addTodo} from "../redux/action-creators";

import './todo-item';

export class TodoList extends HTMLElement {
    constructor() {
        super();
        this.addEventListener('keydown', this);
    }

    connectedCallback() {
        this.render();
        this.unsubscribe =
            store.subscribe(() => {
                this.render();
            });
    }

    disconnectedCallback() {
        this.unsubscribe();
    }

    handleEvent(event) {
        if (event.target.id === 'to-be-added-todo' &&
            event.type === 'keydown' && event.key === 'Enter') {
            store.dispatch(addTodo(event.target.value));
        }
    }

    get todos() {
        return store.getState().todos;
    }

    render() {
        this.innerHTML = html`
			<input
				type="text"
                id="to-be-added-todo"
				class="field field--new"
				placeholder="What needs to be done?"
				autofocus />

			<div ${this.todos.length === 0 && 'hidden'}>
				<input
					type="checkbox"
					id="todo-list-toggle-all"
					class="tick tick--all"
					todo-list-change="onToggleAll"
					${this.remainingCount === 0 && 'checked'} />

				<label for="todo-list-toggle-all">
					Complete All
				</label>

				<ul>
					${this.todos.map((todo, index) => html`
						<li id="todo-list-todo-${index}">
						    <todo-item index="${index}"></todo-item>
						</li>
					`)}
				</ul>
			</div>
	    `;
    }

}


customElements.define('todo-list', TodoList);
