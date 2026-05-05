import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class AboutUs extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "about-us";
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
    this.topHeading = "Lehigh Valley Inferno Basketball";
    };
  
    static get styles() {
    return [super.styles,
        css`
      :host {
        display: block;
        background-color: light-dark(var(--ddd-theme-default-alertUrgent), var(--ddd-theme-default-inventOrange));
        padding: var(--ddd-spacing-5); 
        box-shadow: inset 0 -40px 60px rgba(0,0,0,0.2);
      }
      .top-heading{
        color: light-dark(var(--ddd-theme-default-inventOrange), var(--ddd-theme-default-white));
        font-weight: var(--ddd-font-weight-bold);
        margin: 0; 
        margin-top: var(--ddd-spacing-2); 
        text-align: center;
 
      }
      .about-us-summary{
        color: light-dark(var(--ddd-theme-default-inventOrange), var(--ddd-theme-default-white));
        margin-top: var(--ddd-spacing-4); 
        line-height: var(--ddd-lh-150);
        text-align: center;
        max-width: 600px;   
        margin-left: auto;
        margin-right: auto; 

      }
      .logo{
        width: 250px;
        display: block;        
        margin: var(--ddd-spacing-4) auto 0;
      }
   

    `];
  }

  render() {

    return html`
     <div class="teamInfo">

        <h1 class="top-heading">${this.topHeading}</h1>

        <img src="/images/inferno-logo.png" alt="Lehigh Valley Inferno Logo" class="logo">

        <p class ="about-us-summary">TThe Lehigh Valley Inferno is an AAU basketball team dedicated to giving high school athletes the opportunity to gain exposure to college coaches and scouts. With an elite coaching staff that focuses on discipline, teamwork, and character, this program can develop college-ready basketball players.</p>

          <slot></slot>

      </div>`;
  }
}

globalThis.customElements.define(AboutUs.tag, AboutUs);