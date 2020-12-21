import {
    LitElement, html, css
} from 'lit-element'

import axios from 'axios';

import {request} from './lib.js'


class ArticleDestination extends LitElement {
    static get styles() {
        return css`
            body {
                border: 0;
                margin: 0;
                padding: 0;
            }
        
            h3 {
                text-align: center;
                color: #535198;
                padding: 20px 20px;
            }
            
            h4 {
                color: #535198;
                padding-top: 10px;
            }
            
            a {
                color: #535198;
                text-decoration: none;
            }
            
            article {
                background-color: #f0f0f0;
                display: flex;
                flex-direction: row;
                margin-bottom: 30px;
                max-height: 200px;
            }
            
            section {
                display: flex;
                flex-direction: column;
                margin: 0 10vw;
                overflow: hidden;
            }
            
            div {
                padding-left: 30px;
                display: block;
                overflow: auto;
            }
        `
    }

    static get properties() {
        return {
            title: {type: String},
            destinations: {type: Array}
        }
    }

    constructor() {
        super();

        this.title = 'Destinations';
    }

    render() {
        return html`
            <main>
                <section>
                    <h3>${this.title}</h3>
                    <div class="destinations">
                        ${this.destinations.map(item => {
                            return html`
                                <article>
                                    <img src="${item.imageUrl}" alt="Picture">
                                    <div>
                                        <h4>${item.destinationTitle}</h4>
                                        <p>${item.destinationDescription}</p>
                                        <br>
                                        <a href=${item.url}>${item.linkText}</a>
                                    </div>
                                </article> 
                            `
                        })}
                    </div>
                </section>
            </main>
            
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.getDestinations();
    }

    async getDestinations() {
        // axios
        //     .get('https://devschool-2020.firebaseio.com/tiberiu-rusu/destinations.json')
        //     .then(response => response.data)
        //     .then(data => {
        //         let destinationsArray = [];
        //         Object.keys(data).forEach(key => {
        //             destinationsArray.push({
        //                 destinationTitle: data[key].destinationTitle,
        //                 destinationDescription: data[key].destinationDescription,
        //                 moreUrl: data[key].moreUrl,
        //                 linkText: data[key].linkText,
        //                 imageUrl: data[key].imageUrl,
        //             });
        //         });
        //         this.destinations = [...destinationsArray];
        //     })
        //     .catch(error => console.log(error));

        localStorage.setItem('token', 'ana are mere');

        const response = await request('https://devschool-2020.firebaseio.com/tiberiu-rusu/destinations.json')
            .then(data => {
                let destinationsArray = [];
                Object.keys(data).forEach(key => {
                    destinationsArray.push({
                        destinationTitle: data[key].destinationTitle,
                        destinationDescription: data[key].destinationDescription,
                        moreUrl: data[key].moreUrl,
                        linkText: data[key].linkText,
                        imageUrl: data[key].imageUrl,
                    });
                });
                this.destinations = [...destinationsArray];
            })
            .catch(error => console.log(error));
    }
}

export default customElements.define('article-destination', ArticleDestination);
