import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

class ArticlePost extends LitElement {
    static get styles() {
        return css`
            .description {
                text-align: center;
            }
            
            .description h2 {
                color: #535198;
            }
            
            article {
                background-color: #f0f0f0;
                display: flex;
            }
            
            article > img{
                flex: 54%;
            }
            
            .text {
                flex: 46%;
                margin-top: 20px;
                margin-left: 20px;
                background-color: #f0f0f0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 2vw;
            }
            
            .text > h4, h5, p {
                white-space: no wrap;
                text-overflow: ellipsis;
                overflow-y: auto;
            }
            
           
            picture > img {
                background-color: #f0f0f0; 
                object-fit: contain;
            }
            
            div img {
                object-fit: cover;
                width: 100%;
            }
            
            .row-reverse {
                flex-direction: row-reverse;
            }
            
            .row {
                flex-direction: row;
            }
            
           
            section {
                
                margin-top: 30px;
            }
            
            footer {
                margin-top: 50px;
            }
            
            h4 {
                padding-bottom: 20px;
            }
        `;
    }

    static get properties() {
        return {
            descriptionTitle: {type: String},
            descriptionText: {type: String},
            articles: {type: Array}
        }
    }

    constructor() {
        super();

        this.descriptionTitle = 'Reasons for travelling';
        this.descriptionText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1400s, when an unknown printer took a galley of type and scrambled it to make a\n' +
            'type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing\n' +
            'software like Aldus PageMaker including versions of Lorem Ipsum.';

        // this.articles = [
        //     {
        //         title: 'First article err',
        //         subtitle: 'First article subtitle',
        //         articleText: 'Article 1 text',
        //         imgUrl: ''
        //     },
        //     {
        //         title: 'Second article err',
        //         subtitle: 'Second article subtitle err',
        //         articleText: 'Article 2 text',
        //         imgUrl: ''
        //     },
        //     {
        //         title: 'Third article err',
        //         subtitle: 'Third article subtitle',
        //         articleText: 'Article 3 text',
        //         imgUrl: ''
        //     },
        // ]

        // console.log("In constructor" + this.articles);
    }

    render() {
        console.log("In render()");
        // console.log(this.articles);

        return html`
            <main>
                <section class="description">   
                    <h2>${this.descriptionTitle}</h2>
                    <p>
                        ${this.descriptionText}
                    </p>
                </section>
                
                <section class="article">
                    ${this.articles.map((item, index) => {
                        console.log(item);
                        if (index % 2 === 0) {
                            return html`
                                <article class="row-reverse">
                                    <div class="text">
                                        <h4>${item.title}</h4>
                                        <h5>${item.subtitle}</h5>
                                        <p>${item.articleText}</p>
                                    </div>
                                    <img src="https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/600/400" alt="Picture">
                                </article>
                            `
                        } else {
                            return html`
                                <article class="row">
                                    <div class="text">
                                        <h4>${item.title}</h4>
                                        <h5>${item.subtitle}</h5>
                                        <p>${item.articleText}</p>
                                    </div>
                                    <img src="https://picsum.photos/seed/picsum/600/400" alt="Picture">
                                </article>
                            `
                        }
                    })}
                </section>
            </main>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.getArticlesFromServer();
    }

    getArticlesFromServer() {
        const axios = window.axios;
        this.articles = [];
        console.log(this.articles);

        // axios
        //     .get('https://devschool-2020.firebaseio.com/tiberiu-rusu/articles.json')
        //     .then((response) => {
        //         console.log(response.data.);
        //     })
        //     .catch(error => console.log(error));

         fetch('https://devschool-2020.firebaseio.com/tiberiu-rusu/articles.json')
            .then((response) => response.json())
            .then((data) => {
                let articlesArray = [];
                Object.keys(data).forEach((key, index) => {
                    // this.articles.push(data[key]);
                    articlesArray.push({
                        title: data[key].title,
                        subtitle: data[key].subtitle,
                        articleText: data[key].description,
                        imgUrl: data[key].imageURL});
                });
                this.articles = [...articlesArray];
            });

        // console.log(this.articles);
    }
}

customElements.define('article-post', ArticlePost);