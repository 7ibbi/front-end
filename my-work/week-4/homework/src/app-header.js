import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'


class AppHeader extends LitElement {
    static get styles() {
        return css`
            :host {
                --color-purple: #535198;
            }
            
            * {
                border: 0;
                margin: 0;
                padding: 0;
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
                link: 'travel.html'
            },
            {
                name: 'destinations',
                link: 'destinations.html'
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

    connectedCallback() {
        super.connectedCallback();

        // const iAmYoda = new Promise((resolve, reject) => {
        //     const person = 'Yoda';
        //     if (person === 'Yoda') {
        //         resolve('I am Yoda');
        //     } else {
        //         reject(`I am ${person}`);
        //     }
        // });
        //
        // const promise2 = new Promise((resolve, reject) =>
        //     setTimeout(resolve, 700, 'ok')
        // );
        //
        // const promise3 = new Promise((resolve, reject) =>
        //     setTimeout(resolve, 1000, 'super ok')
        // );

        // Promise.all([iAmYoda, promise2, promise3]).then((response) =>
        //     console.log(response)
        // ).catch(error => console.log(error));

        // Promise.allSettled([iAmYoda, promise2, promise3])
        //     .then((response) => console.log(response))
        //     .catch(error => console.log(error));

        // Promise.any([iAmYoda, promise2, promise3])
        //     .then((response) => console.log(response))
        //     .catch(error => console.log(error));

        // Promise.race([iAmYoda, promise2, promise3])
        //     .then((response) => console.log(response))
        //     .catch(error => console.log(error));

        // iAmYoda
        //     .then((response) => console.log(response))
        //     .catch((error) => console.log(error))
        //     .finally(() => console.log('in finally'));

        this.getPosts();
        this.getPosts2();
    }

    getPosts() {
        const axios = window.axios;

        // axios
        //     .get('https://jsonplaceholder.typicode.com/posts')
        //     .then((response) => console.log(response))
        //     .catch(error => console.log(error));
        //
        // axios
        //     .post('https://jsonplaceholder.typicode.com/posts',
        //     {
        //         title: 'foo',
        //         body: 'bar',
        //         userId: 1,
        //     },
        //     {
        //         headers: {
        //             'content-type': 'multipart/form-data',
        //             Authorization: 'Bearer  ceva-token',
        //         },
        //     })
        //     .then(response => console.log(response));
        //
        // axios.request('https://jsonplaceholder.typicode.com/posts', {
        //     method: 'POST',
        //     data: {
        //         title: 'foo',
        //         body: 'bar',
        //         userId: 1,
        //     },
        // });
        //
        // const request = axios.create({
        //     baseURL: 'https://jsonplaceholder.typicode.com/',
        //     timeout: 10000,
        //     headers: {
        //         Authorization: 'Bearer  ceva-token',
        //     }
        // });
        //
        // request.get('posts').then(response => console.log(response));

        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then((response) => response.json())
        //     .then((data) => console.log(data));

        // const body = {
        //     title: 'foo',
        //     body: 'bar',
        //     userId: 1,
        // };
        //
        // fetch('https://jsonplaceholder.typicode.com/posts', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(body),
        // })
        //     .then((response) => response.json())
        //     .then((response) => console.log(response));
    }

    async getPosts2() {
        const axios = window.axios;
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/posts'
            );

            console.log(response);
        } catch(error) {
            console.log(error);
        }

        console.log('la sfarsitul metodei');
    }
}

customElements.define('app-header', AppHeader);