import {store} from '../redux/store';
import html from 'html-template-tag';

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

    render() {
        this.innerHTML = html`
            <header>
                <h1 class="hdg">todos</h1>
            </header>
    
            <div class="card">
                <section>
                    <todo-list></todo-list>
                </section>
            </div>
        `;
    }

}


customElements.define('todo-app', TodoApp);
