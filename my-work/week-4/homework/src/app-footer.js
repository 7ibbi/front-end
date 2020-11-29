import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

import {unsafeHTML} from 'https://unpkg.com/lit-html@latest/directives/unsafe-html.js?module';

class AppFooter extends LitElement {
    static get styles() {
        return css`
            :host {
                --color-purple: #535198;
            }
        
            footer {
                background-color: var(--color-purple);
                text-align: center;
            }

            footer p {
                color: antiquewhite;
            }
        `;
    }

    static get properties() {
        return {
            footerText: {type: String}
        };

    }

    constructor() {
        super();

        this.footerText = '&copy; 2020 Travel Website - All rights reserved\n' +
            '<br/>\n' +
            'by Awesome DevSchoolers';
    }

    render() {
        return html`
            <footer>
                <p>
                    ${unsafeHTML(this.footerText)}
                </p>
            </footer>
        `;
    }
}

customElements.define('app-footer', AppFooter);