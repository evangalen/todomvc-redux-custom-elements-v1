import {store} from '../redux/store';

import {html} from 'html-template-literal';

import './todo-list';

class TodoApp extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    get todos() {
        return store.getState().todos;
    }

    showAlert() {
        // alert('show');
    }

    render() {
        this.outerHTML = html`
            <header>
                <h1 class="hdg">todos</h1>
            </header>
    
            <div class="card">
                <section>
                    <todo-list></todo-list>
                </section>
    
                <footer class="card__ft" ${this.todos.length === 0 && 'hidden'}>
                    {renderTodoFilter(vm)}
                </footer>
            </div>
            
            <input type="button" onclick="$(this.showAlert}">
        `;
    }

}


if (!customElements.get('todo-app')) {
    customElements.define('todo-app', TodoApp);
}
