import {store} from '../redux/store';
import {markTodo, removeTodo} from '../redux/action-creators';

import html from 'html-template-tag';

export class TodoItem extends HTMLElement {

    constructor() {
        super();

        this.addEventListener('click', this);
    }

    connectedCallback() {
        this.index = Number(this.getAttribute('index'));
        this.checkboxId = 'todo-item-mark-' + this.index;
        this.removeButtonId = 'todo-item-remove-' + this.index;

        this.render();
    }

    handleEvent(event) {
	    if (event.target.id === this.checkboxId && event.type === 'click') {
            store.dispatch(markTodo(this.index));
        } else if (event.target.id === this.removeButtonId && event.type === 'click') {
	        store.dispatch(removeTodo(this.index));
        }
    }

	get todoItem() {
	    return store.getState().todos[this.index];
    }

    render() {
        this.innerHTML = html`
            <div class="todo">
                <input
                    type="checkbox"
                    id="${this.checkboxId}"
                    class="tick tick--item"
                    ${this.todoItem.marked && 'checked'} />

                <label for="${this.checkboxId}">
                    Mark Compete
                </label>

                <div class="todo__bd ${this.todoItem.marked && 'todo__bd--completed'}">
                    ${this.todoItem.text}
                </div>

                <button type="button" id="${this.removeButtonId}" class="remove"></button>
            </div>
	    `;
    }
}


customElements.define('todo-item', TodoItem);
