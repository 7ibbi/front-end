class Navigation extends HTMLElement {
    constructor() {
        super();

        const _style = document.createElement('style');
        const _nav = document.createElement('nav');
        _nav.innerHTML = `
        <div class="nav-list">
            <ul>
                <li>
                    <a href="travel.html">home</a>
                </li>
                <li>
                    <a href="destinations.html">destinations</a>
                </li>
                <li>
                    <a href="#">language</a>
                </li>
            </ul>
        </div>
        <slot name="title"></slot>`;

        this._shadowRoot = this.attachShadow({mode: 'open'});
        this._shadowRoot.appendChild(_nav);
        this._shadowRoot.appendChild(_style);
    }

    static get observedAttributes() {
        return ['color'];
    }

    connectedCallback() {
        console.log('hello from connected callback');
    }

    disconnectedCallback() {
        console.log('hello from disconnected');
    }

    adoptedCallback() {}

    attributeChangedCallback(name, oldVal, newVal) {
        console.log('changed color', name, oldVal, newVal);
        this.updateStyle(this);
    }

    updateStyle(element) {
        const style = element._shadowRoot.querySelector('style');

        style.innerHTML = `
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
            color: ${element.getAttribute('color')};
        }
        
        :host {
            color: ${element.getAttribute('color')} !important;
        }
        `;
    }
}

export default customElements.define('navigation-element', Navigation);
