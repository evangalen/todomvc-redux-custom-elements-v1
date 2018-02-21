import { store } from '../redux/store';
import { addTodo, setTodoCompleted } from '../redux/action-creators';

import {html} from 'html-template-literal';

export class TodoItem extends HTMLElement {


	/**
	 * @constructor
	 */
	constructor() {
		super();

		this.index = null;

		// this.addEventListener('change', this);
		// this.addEventListener('click', this);
		// this.addEventListener('dblclick', this);
		// this.addEventListener('focusout', this);
		// this.addEventListener('keydown', this);
	}

	connectedCallback() {
	    this.index = Number(this.getAttribute('index'));

	    this.render();

	    store.subscribe(() => {
	        this.render();
        });
    }

	// /**
	//  * @method onEditStart
	//  * @param {Event} event
	//  * @param {Element} el
	//  * @callback
	//  */
	// onEditStart(event, el) {
	// 	const field = this.parentElement.querySelector('input[type="text"]');
    //
	// 	if (!field) {
	// 		return;
	// 	}
    //
	// 	event.preventDefault();
    //
	// 	this.parentElement.classList.add('editing');
	// 	field.focus();
    //
	// 	setTimeout(() => {
	// 		const end = field.value.length;
    //
	// 		field.selectionStart = end;
	// 		field.selectionEnd = end;
	// 	});
	// }
    //
	// /**
	//  * @method onEditEnd
	//  * @param {Event} event
	//  * @param {Element} el
	//  * @callback
	//  */
	// onEditEnd(event, el) {
	// 	const { key, type } = event;
    //
	// 	if (type === 'keydown' && key !== 'Enter' && key !== 'Escape') {
	// 		return;
	// 	}
    //
	// 	event.preventDefault();
    //
	// 	const id = Number(this.dataset.id);
    //
	// 	this.parentElement.classList.remove('editing');
	// 	this.store.editTodo(id, el.value);
	// }
    //
	// /**
	//  * @method onRemove
	//  * @callback
	//  */
	// onRemove() {
	// 	const id = Number(this.dataset.id);
    //
	// 	this.store.removeTodo(id);
	// }
    //
	// /**
	//  * @method onToggle
	//  * @param {Event} event
	//  * @param {Element} el
	//  * @callback
	//  */
	// onToggle(event, el) {
	// 	const id = Number(this.dataset.id);
    //
	// 	this.store.toggleTodo(id, el.checked);
	// }

    handleToggleCompleted() {
	    console.log('handleToggleCompleted');
	    this.store.dispatch(setTodoCompleted(this.todoItem.index, !this.todoItem.completed));
    }

	get todoItem() {
	    return store.getState().todos[this.index];
    }

	render() {
	    console.log(this.index, this.todoItem)

	    this.outerHTML = html`
            <div class="todo" onclick="${this.handleToggleCompleted}">
                <input
                    type="text"
                    class="field field--edit"
                    todo-item-focusout="onEditEnd"
                    todo-item-keydown="onEditEnd"
                    value="${this.todoItem.text}" />

                <input
                    type="checkbox"
                    id="todo-item-toggle-${this.todoItem.id}"
                    class="tick tick--item"
                    todo-item-change="onToggle"
                    onclick="${this.handleToggleCompleted}"
                    ${this.todoItem.completed && 'checked'} />

                <label for="todo-item-toggle-${this.todoItem.id}">
                    Mark Compete
                </label>

                <div
                    class="todo__bd {this.todoItem.completed && 'todo__bd--completed'}"
                    todo-item-dblclick="onEditStart">
                    ${this.todoItem.text}
                </div>

                <button
                    type="button"
                    class="remove"
                    todo-item-click="onRemove">
                </button>
            </div>
	    `;
    }
}


customElements.define('todo-item', TodoItem);
