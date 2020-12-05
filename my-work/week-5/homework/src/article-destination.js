import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

class ArticleDestination extends LitElement {
    static get styles() {
        return css`
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
            articles: {type: Array}
        }
    }

    constructor() {
        super();


        this.title = 'Destinations';
        this.articles = [
            {
                destinationTitle: 'First destination',
                destinationDescription: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using\n' +
                    '                            , making it look like readable English. and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,\n' +
                    '                            sometimes on purpose (injected humour and the like).',
                linkText: '> know more',
                url: '#'
            },
            {
                destinationTitle: 'Second destination',
                destinationDescription: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using\n' +
                    '                            \'Content here, content here\', making it look like readable English. ',
                linkText: '> know more',
                url: '#'
            },
            {
                destinationTitle: 'Third destination',
                destinationDescription: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using\n' +
                    '                            \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,\n' +
                    '                            sometimes on purpose (injected humour and the like).',
                linkText: '> know more',
                url: '#'
            },
            {
                destinationTitle: 'Fourth destination',
                destinationDescription: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using\n' +
                    '                            \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,\n' +
                    '                            sometimes on purpose (injected humour and the like).',
                linkText: '> know more',
                url: '#'
            },
            {
                destinationTitle: 'Fifth destination',
                destinationDescription: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
                linkText: '> know more',
                url: '#'
            },
            {
                destinationTitle: 'Sixth destination',
                destinationDescription: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ',
                linkText: '> know more',
                url: '#'
            },
        ]
    }

    render() {
        return html`
            <main>
                <section>
                    <h3>${this.title}</h3>
                    <div class="destinations">
                        ${this.articles.map(item => {
                            return html`
                                <article>
                                    <img src="https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/300/200" alt="Picture">
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
}

customElements.define('article-destination', ArticleDestination);
