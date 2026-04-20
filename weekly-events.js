import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class WeeklyEvents extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "Weekly Events";
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
    this.topHeading = "Weekly Events";
    };
  
    static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        width: 100%;
        background-color: var(--ddd-theme-default-alertUrgent);
      }
      .top-heading{
        color: var(--ddd-theme-default-keystoneYellow);
      }
   

    `];
  }

  render() {
     return html`
     <div class="banner">
        <h1 class="top-heading">${this.topHeading}</h1>
        <p class ="placeHolder"> Events can be found here such as schedule and next game</p>

          <slot></slot>

      </div>`;
  }
}

globalThis.customElements.define(WeeklyEvents.tag, WeeklyEvents);