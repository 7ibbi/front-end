import {
    LitElement, html, css
} from 'lit-element'

// import {unsafeHTML} from 'https://unpkg.com/lit-html@latest/directives/unsafe-html.js?module';

class AppFooter extends LitElement {
    static get styles() {
        return css`
            :host {
                --color-purple: #535198;
            }
            
            body {
                border: 0;
                margin: 0;
                padding: 0;
            }
        
            footer {
                background-color: var(--color-purple);
                text-align: center;
                position: relative;
                bottom: 0;
                width: 100%;
            }

            footer p {
                color: antiquewhite;
            }
        `;
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
                    &copy; 2020 Travel Website - All rights reserved
                    <br/>
                    by Awesome DevSchoolers
                </p>
            </footer>
        `;
    }
}

export default customElements.define('app-footer', AppFooter);