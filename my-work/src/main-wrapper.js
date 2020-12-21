import {
    LitElement, html, css
} from 'lit-element'

import './app-header.js';
import './app-footer.js';

class MainWrapper extends LitElement {
    render() {
        console.log(this.location);
        return html`
            <app-header></app-header>
            
            <slot></slot>
            
            <app-footer></app-footer>
        `;
    }
}

export default customElements.define('main-wrapper', MainWrapper);