import {
    LitElement, html, css
} from 'lit-element';

import './app-header.js';
import './app-footer.js';
import './article-post.js';
// import './article-destination.js';

class MainComponent extends LitElement {
    render() {
        return html`
            <app-header></app-header>

            <article-post></article-post>

            <app-footer></app-footer>
        `
    }
}

export default customElements.define('main-component', MainComponent);