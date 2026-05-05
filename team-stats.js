import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class TeamStats extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "team-stats";
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
    this.topHeading = "Team Stats";
    };
  
    static get styles() {
    return [super.styles,
    css`
      :host {
      display: block;
      background-color: light-dark(var(--ddd-theme-default-inventOrange), var(--ddd-theme-default-alertUrgent));
      padding: var(--ddd-spacing-2) var(--ddd-spacing-5) var(--ddd-spacing-7);
    }

    .top-heading {
      color: light-dark(var(--ddd-theme-default-alertUrgent), var(--ddd-theme-default-inventOrange));
      font-weight: var(--ddd-font-weight-bold);
      text-align: center;
      margin-top: var(--ddd-spacing-5);
      margin-bottom: var(--ddd-spacing-10);
    }

    .team-stats {
      display: grid;
      grid-template-columns: repeat(2, 220px);
      justify-content: center;
      gap: var(--ddd-spacing-5);
    }

    .stat-card {
      background-color: var(--ddd-theme-default-white);
      color: var(--ddd-theme-default-inventOrange);
      padding: var(--ddd-spacing-6);
      border-radius: var(--ddd-radius-md);
      text-align: center;
      box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
      min-height: 130px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .stat-card h2 {
      margin: 0;
      font-size: 28px;
      font-weight: var(--ddd-font-weight-bold);
    }

    .stat-card p {
      margin-bottom: 0;
    }
   

    `];
  }

  render() {
     return html`

     <h1 class="top-heading">${this.topHeading}</h1>

        <div class="team-stats">
            <div class="stat-card">
                <h2>22–9</h2>
                  <p>Season Record</p>
        </div>

        <div class="stat-card">
            <h2>.709</h2>
              <p>Win Percentage</p>
        </div>

      <div class="stat-card">
          <h2>68.5</h2>
            <p>Average Points Per Game</p>
      </div>

      <div class="stat-card">
          <h2>62.3</h2>
            <p>Average Points Allowed Per Game</p>
      </div>
  </div>`

  }
}

globalThis.customElements.define(TeamStats.tag, TeamStats);