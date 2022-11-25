import { LitElement, html, css } from 'lit';

export class CardVehiculo extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
            }
            .card{
                background: #fff;
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
                border-radius: 5px;
                margin: 50px 20px 20px 20px;
                min-height: 70%;
                width: calc(25% ); 
                padding: 20px;
                text-align: center;
                font-weight: 600;
                color: #335762;
                float: left;
            }
            img{
                width:50%;
            }
            .div-car{
                display:inline-flex;
            }
        `
    ];

    static properties = {

        valores: { type: Object },
        nombre: { type: String },
        marca: { type: String },
        version: { type: String },
        anio: { type: String }

    }
    constructor() {
        super();
        this.valores = [{}];
        this.datos();


    }


    render() {
        return html`
        <div class="div-car">
            ${this.datos()}
            ${this.pintar()}
            
        </div>
           
        `;
    }
    datos() {
        this.valores.push({
            nombre: this.nombre,
            marca: this.marca,
            version: this.version,
            anio: this.anio,
        });
        console.log(this.valores.length)
    }
    pintar() {
        return html`
        ${this.valores.map(element => html`
        <div class="card">
            <div>
                <img src="car.png" alt="car"/>
            </div>
            <div>
                <p>El nombre del carro es ${element.nombre}</p>
                <p>de la marca ${element.marca}</p>
                <p>del año ${element.anio}</p>
                <p>y en la versión ${element.version}</p>
            </div>
        </div>`)}
    `
    }


}
customElements.define('card-vehiculo', CardVehiculo);
