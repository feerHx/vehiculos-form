import { LitElement, html, css } from 'lit';
import "./form-vehiculos";


export class MainPage extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
            }
            h1{
                text-align:center;
            }
        `
    ];

    render() {
        return html`
        <h1>Nuevos vehiculos</h1>
        <form-vehiculos></form-vehiculos>
        `;
    }
}
customElements.define('main-page', MainPage);
