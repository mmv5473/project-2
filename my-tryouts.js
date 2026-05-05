import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class MyTryouts extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "my-tryouts";
  }
   static get properties() {
    return {
      ...super.properties,
      active: {type: Boolean, reflect: true},
    };
  }

  constructor() {
    super();
    this.active = false;
    this.topHeading = "Summer League Tryouts";
    };
  
    static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        background-color: light-dark(var(--ddd-theme-default-alertUrgent), var(--ddd-theme-default-inventOrange));
        min-height: 100vh;
      }
      .top-heading {
        color: light-dark(var(--ddd-theme-default-inventOrange), var(--ddd-theme-default-white));
        font-weight: var(--ddd-font-weight-bold);
      }
      .tryouts {
        text-align: center;
        color: light-dark(var(--ddd-theme-default-inventOrange), var(--ddd-theme-default-white));
        padding: var(--ddd-spacing-6);
        font-weight: var(--ddd-font-weight-bold);
      }
      .box {
        background-color: light-dark(var(--ddd-theme-default-inventOrange), var(--ddd-theme-default-white));
        color:  light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-inventOrange));
        padding: var(--ddd-spacing-4);
        border-radius: var(--ddd-radius-md);
        width: 220px;
        box-shadow: var(--ddd-boxShadow-md);
      }
      .box-row {
        display: flex;
        justify-content: center;
        gap: var(--ddd-spacing-4);
        flex-wrap: wrap;
      }
      .tryouts-img {
        width: 100px;
        height: 100px;
        object-fit: contain;
        display: block;
        margin: 0 auto var(--ddd-spacing-3);
        border-radius: var(--ddd-radius-md);
    }
   
    `];
  }

  render() {
     return html`
    <div class="tryouts">
      <h1 class="top-heading">${this.topHeading}</h1>

      <p class="intro">
         Interested in joining the Lehigh Valley Inferno? <br>
        Tryouts are open for athletes interested in playing basketball at the collegiate level!
      </p>

      <div class="box-row">
        <div class="box">
         <img src="/images/inferno-calendar.png" alt="date" class="tryouts-img">
          <h2>When</h2>
          <p>May 1st, 2026</p>
          <p>3:00 PM - 5:15 PM</p>
        </div>

        <div class="box">
          <img src="/images/valley-fitness-center.png" alt="valley fitness center" class="tryouts-img">
          <h2>Where</h2>
          <p>Valley Fitness Center</p>
        </div>

        <div class="box">
          <img src="/images/inferno-equipment.png" alt="Basketball, Uniform, Water, and Basketball Shoes" class="tryouts-img">
          <h2>What to Bring</h2>
          <p>Basketball, Water Bottle, Uniform, and Basketball Shoes.</p>
        </div>
      </div>

    </div>`;
  }
}

globalThis.customElements.define(MyTryouts.tag, MyTryouts);