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
    this.topHeading = "Mini Master's Golf Club";
    };
  
    static get styles() {
    return [super.styles,
        css`
      :host {
        display: block;
        background-color: var(--ddd-theme-default-inventOrange);
        padding: var(--ddd-spacing-5); 
      }
      .top-heading{
        color: var(--ddd-theme-default-white);
        font-weight: var(--ddd-font-weight-bold);
        margin: 0; 
        margin-top: var(--ddd-spacing-2); 
        text-align: center;
 
      }
      .about-us-sumary{
        color: var(--ddd-theme-default-white);
        margin-top: var(--ddd-spacing-4); 
        text-align: center;
        max-width: 600px;   
        margin-left: auto;
        margin-right: auto; 

      }
      .logo{
        width: 250px;
        display: block;        
        margin: 0 auto;
    
      }
   

    `];
  }

  render() {
     return html`
     <div class="teamInfo">

        <h1 class="top-heading">${this.topHeading}</h1>

        <img src="/images/mini-logo.png" alt="logo" class="logo">

        <p class ="about-us-sumary">The Lehigh Valley Inferno is an AAU basketball team dedicated to giving high school athletes the opportunity to gain exposure to college coaches and scouts. With an elite coaching staff that focuses on discipline, teamwork, and character, this program can develop college-ready basketball players.</p>

          <slot></slot>

      </div>`;
  }
}

globalThis.customElements.define(AboutUs.tag, AboutUs);