import { LitElement, html, css } from 'lit';
import "./card-vehiculo";

export class FormVehiculos extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                width:100%;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
            }
            .form{
                margin-left: 10%;
                margin-right:10%;
                height:170px;
                width:80%;
                display: inline-flex;
                background-color:#335762;
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
                color:white;
                
            }
            .div-from{
                margin-left: 25%;
                margin-right:20%;
            }
            .div-save{
                margin-top:10px;
                margin-left:45%;
                margin-right:45%;
            }
            input{
                 outline:none;
            }
            input:focus-visible{
                border-color:#dea106;
            }
            button{
                width:100%;
                background-color:#dea106;
                border-color:#dea106;
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
            }
            button:hover{
                background-color:#af8008;
                border-color:#af8008;
                color:white;
            }
        `
    ];

    static get properties() {
        return {
            nombre: { type: String },
            marca:{type: String},
            version:{type:String},
            anio:{type:String},
            passed: { type: Boolean }
        };
    }
    constructor() {
        super();
        this.nombre="";
        this.marca="";
        this.version="";
        this.anio="";
        this.passed = false;
    }

    render() {
        return html`
            <div class="form">
                <div class="div-from">
                    <p>Nombre:</p>
                    <input type="text" id="inNombre" placeholder="Ingresa el nombre del vehiculo.">
                    <p>Marca:</p>
                    <input type="text" id="inMarca" placeholder="Ingresa la marca del vehiculo.">
                </div>
                <div class="div-form">
                    <p>Año:</p>
                    <input type="text" id="inAnio" placeholder="Ingresa el año del vehiculo.">
                    <p>Versión:</p>
                    <input type="text" id="inVersion" placeholder="Ingresa la versión del vehiculo.">
                </div>
            </div>
            <div class="div-save" @click=${this.guardar}><button>Guardar</button></div>
            ${this.passed ?
                html`
                    <card-vehiculo nombre=${this.nombre} 
                                    marca =${this.marca}
                                    version=${this.version}
                                    anio=${this.anio}>
                    </card-vehiculo>
                `
                :
                html``
            }
        `;
    }
    guardar() {
        this.nombre = this.shadowRoot.getElementById("inNombre").value;
        this.marca = this.shadowRoot.getElementById("inMarca").value;
        this.anio = this.shadowRoot.getElementById("inAnio").value;
        this.version = this.shadowRoot.getElementById("inVersion").value;
        if (this.nombre != "" && this.marca != "" && this.anio != "" && this.version != "") {
            this.passed = true;
        } else {
            alert("Falta algún dato. Por favor verificar los campos.")
        }
    }
}
customElements.define('form-vehiculos', FormVehiculos);
