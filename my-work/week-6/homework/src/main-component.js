import {
    LitElement, html, css
} from 'lit-element';


import './article-post.js';
// import './article-destination.js';

class MainComponent extends LitElement {
    render() {
        return html`

            <article-post></article-post>
        `
    }
}

export default customElements.define('main-component', MainComponent);