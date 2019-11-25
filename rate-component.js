import { LitElement, html } from '@polymer/lit-element';
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
import '@polymer/iron-icon/iron-icon.js';

export class RateComponent extends LitElement {
    constructor() {
        super();
        this.rate = 0
    }

    static get properties() {
        return {
            rate: { type: Number }
        };
    }

    __onClick1() {
        const stars = this.shadowRoot.querySelectorAll('.star');
        this.__clearStar(stars);
        this.rate = 1
        this.__getRate(stars, 1)
        this.dispatchEvent(new Event('rate-changed'));
    }

    __onClick2() {
        const stars = this.shadowRoot.querySelectorAll('.star');
        this.__clearStar(stars);
        this.rate = 2
        this.__getRate(stars, 2)
        this.dispatchEvent(new Event('rate-changed'));
    }

    __onClick3() {
        const stars = this.shadowRoot.querySelectorAll('.star');
        this.__clearStar(stars);
        this.rate = 3
        this.__getRate(stars, 3)
        this.dispatchEvent(new Event('rate-changed'));
    }

    __onClick4() {
        const stars = this.shadowRoot.querySelectorAll('.star');
        this.__clearStar(stars);
        this.rate = 4
        this.__getRate(stars, 4)
        this.dispatchEvent(new Event('rate-changed'));
    }

    __onClick5() {
        const stars = this.shadowRoot.querySelectorAll('.star');
        this.__clearStar(stars);
        this.rate = 5
        this.__getRate(stars, 5)
        this.dispatchEvent(new Event('rate-changed'));
    }
    __getRate(stars, limit) {
        for (let index = 0; index < limit; index++) {
            const star = stars[index];
            star.classList.add('active');
        };
    }

    __clearStar(stars) {
        for (const star of stars) {
            star.classList.remove('active');
        };
    }

    render() {
        return html `
        <style>
            :host {
            display: block;
        }

        .star {
            --iron-icon-width: 16px;
            --iron-icon-height: 16px;
            color: var(--rating-component-color, rgb(158, 158, 158));
        }

        .active {
            color: var(--rating-component-active-color, rgb(255, 193, 7));
        }
        </style>
        <iron-iconset-svg name="rating" size="24">
            <svg>
                <defs>
                    <g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
                </defs>
            </svg>
        </iron-iconset-svg>
        
            <div class="rating-container">
                <iron-icon @click="${this.__onClick1}" class="star" icon="rating:star"></iron-icon>
                <iron-icon @click="${this.__onClick2}" class="star" icon="rating:star"></iron-icon>
                <iron-icon @click="${this.__onClick3}" class="star" icon="rating:star"></iron-icon>
                <iron-icon @click="${this.__onClick4}" class="star" icon="rating:star"></iron-icon>
                <iron-icon @click="${this.__onClick5}" class="star" icon="rating:star"></iron-icon>
            </div>
        `;
    }
}
customElements.define('rate-component', RateComponent);