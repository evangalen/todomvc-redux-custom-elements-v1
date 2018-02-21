import { store } from '../redux/store';

import {html} from 'html-template-literal';

import './todo-item';

export class TodoList extends HTMLElement {

	/**
	 * @constructor
	 */
	constructor() {
		super();

		// this.addEventListener('change', this);
		// this.addEventListener('keydown', this);
	}

    connectedCallback() {
	    this.render();
    }

	// /**
	//  * @method onNew
	//  * @param {Event} event
	//  * @param {Element} el
	//  * @callback
	//  */
	// onNew(event, el) {
	// 	const { key, type } = event;
    //
	// 	if (type === 'keydown' && key !== 'Enter') {
	// 		return;
	// 	}
    //
	// 	this.store.addTodo(el.value);
	// }
    //
	// /**
	//  * @method onToggleAll
	//  * @param {Event} event
	//  * @param {Element} el
	//  * @callback
	//  */
	// onToggleAll(event, el) {
	// 	this.store.toggleAllTodos(el.checked);
	// }

	get todoItem() {
	    return store.getState()[this.index];
    }

    get todos() {
	    return store.getState().todos;
    }

    get filteredTodos() {
	    return store.getState().todos;
    }

    get remainingCount() {
	    return 0;
    }

	render() {
	    this.outerHTML = html`
			<input
				type="text"
				class="field field--new"
				placeholder="What needs to be done?"
				todo-list-keydown="onNew"
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
					${this.filteredTodos.map((todo, index) => html`
						<li id="todo-list-todo-${todo.id}">
						    <todo-item index="${index}"></todo-item>
						</li>
					`)}
				</ul>
			</div>
	    `;
    }
}


if (!customElements.get('todo-list')) {
    customElements.define('todo-list', TodoList);
}