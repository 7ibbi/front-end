import {
    LitElement, html, css
} from 'lit-element'

class DestinationPage extends LitElement {

    render() {
        console.log(this.location);
        return html`
            <h2>Destination Page with id ${this.location.params.id}</h2>
        `;
    }
}

export default customElements.define('destination-page', DestinationPage);