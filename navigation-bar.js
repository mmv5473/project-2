import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class NavBar extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "navigation-bar";
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
    this.topHeading = "Lehigh Valley Basketball Team";
    };
  
    static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        background-color: var(--ddd-theme-default-alertUrgent);
      }
      .top-heading{
        color: var(--ddd-theme-default-keystoneYellow);
        font-weight: var(--ddd-font-weight-bold);
      }
      .placeHolder{
       color: var(--ddd-theme-default-keystoneYellow);
      }
   

    `];
  }

  render() {
     return html`
     <div class="navBar">
        <h1 class="top-heading">${this.topHeading}</h1>
        <p class ="placeHolder"> navigation options, such as about us, schedule, roster, and register will be found on the top bar.</p>

          <slot></slot>

      </div>`;
  }
}

globalThis.customElements.define(NavBar.tag, NavBar);