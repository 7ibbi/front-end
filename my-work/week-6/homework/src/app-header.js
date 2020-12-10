import {
    LitElement, html, css
} from 'lit-element';


class AppHeader extends LitElement {
    static get styles() {
        return css`
            body {
                border: 0;
                margin: 0;
                padding: 0;
            }
            
            :host {
                --color-purple: #535198;
            }
            
            header {
                background-color: var(--color-purple);
                padding-bottom: 20vh;
            }
            
            .nav-list {
                padding-top: 2em;
                display: flex;
                justify-content: center;
                text-align: center;
            
            }
            
            .nav-list ul {
                list-style: none;
                display: flex;
                color: ghostwhite;
            
            }
            
            .nav-list li {
                border: 1px solid antiquewhite;
                margin: 0 15px;
            }
            
            .nav-list a {
                display: block;
                min-width: 100px;
                padding: 10px 20px;
                text-decoration: none;
                color: antiquewhite;
            }
            
            h1 {
                padding-top: 100px;
                text-align: center;
                color: antiquewhite;
                font-weight: bolder;
            }
        `;
    }

    static get properties() {
        return {
            navElement: {type: Array},
            title: {type: String}
        };
    }

    constructor() {
        super();

        this.title = 'Travel website';
        this.navElement = [
            {
                name: 'home',
                link: '/'
            },
            {
                name: 'destinations',
                link: '/destinations'
            },
            {
                name: 'language',
                link: '#'
            }
        ]

    }

    render() {
        return html`
            <header class="header">
                <nav class="nav-list">
                    <ul>
                         ${this.navElement.map(item => {
                            return html`
                                <li>
                                    <a href=${item.link}>${item.name}</a>
                                </li>
                            ` 
                         })}
                    </ul>
                </nav>
                <h1>${this.title}</h1>
            </header>
        `;
    }
}

export default customElements.define('app-header', AppHeader);