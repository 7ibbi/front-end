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
                background-color: var(--color);
            }
            
            :host {
                --color-purple: #535198;
                background-color: var(--color);
            }
            
            header {
                background-color: var(--color);
                padding-bottom: 20vh;
            }
            
            .nav-list {
                padding-top: 2em;
                display: flex;
                justify-content: center;
                text-align: center;
            
            }
            
            .active {
                border: 1px solid red !important;
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
            title: {type: String},
            currentPath: {type: String},
            theme: {type: String}
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
        ];
        this.currentPath = window.location.pathname;
        this.theme = localStorage.getItem('theme') || 'light';

    }

    render() {
        return html`
            <header class="header">
                <nav class="nav-list">
                    <ul>
                        <li id="home" class="${this.currentPath === '/' ? 'active' : ''}">
                            <a href="/">Home</a>
                        </li>
                        <li id="destinations" class="${this.currentPath === '/destinations' ? 'active' : ''}">
                            <a href="/destinations">Destinations</a>
                        </li>
                        <li>
                            <a href="#">Language</a>
                        </li>
                        <li>
                            <label><input type="checkbox" @change="${this.changeTheme}"/>Use dark theme</label>
                        </li>
                    </ul>
                </nav>
                <h1>${this.title}</h1>
            </header>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        window.addEventListener('vaadin-router-location-changed', (event) => {
            this.currentPath = event.detail.location.pathname;

            // if (this.cu == '/') {
            //     this.shadowRoot.querySelector('#home').classList.add('active');
            // } else if (pathname == '/destinations') {
            //     this.shadowRoot.querySelector('#destinations').classList.add('active');
            // }
        });
    }

    updated(changedProperties) {
        if (changedProperties.has('theme')) {
            this.updateTheme();
        }
    }

    updateTheme() {
        document.head.querySelector('link[data-theme]')?.remove();
        const themeStyle = document.createElement('link');
        themeStyle.dataset.theme = this.theme;
        themeStyle.rel = 'stylesheet';
        themeStyle.href = `./css/${this.theme}.css`;
        document.head.appendChild(themeStyle);
        localStorage.setItem('theme', this.theme);
    }

    changeTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
    }
}

export default customElements.define('app-header', AppHeader);