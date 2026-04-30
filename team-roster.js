import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class TeamRoster extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "team-roster";
  }

  static get properties() {
    return {
      ...super.properties,
      active: { type: Boolean, reflect: true },
      page: { type: String },
      coaches: { type: Array },
      players: { type: Array }
    };
  }

  constructor() {
    super();

    this.active = false;
    this.page = "roster";

    this.topHeading = "Lehigh Valley Inferno";

  

    this.coaches = [
      { name: "Head Coach Stephen Curry", img: "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png" },
      { name: "Assistant Coach Kevin Durant", img: "https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png" },
      { name: "Assistant Coach Draymond Green", img: "https://cdn.nba.com/headshots/nba/latest/1040x760/203110.png" }
    ];

    this.players = [
      "#0 - Sammy Spears - Year: Junior - Positon: Guard - Height: 6'0",
      "#1 - Tyson Jones - Year: Junior - Position: Center - Height: 6'11",
      "#3 - Lamar Brown - Year: Sophomore - Position: Forward - Height: 6'6",
      "#5 - Dan Hausen - Year: Sophomore - Position: Guard - Height: 5'10",
      "#7 - Antonio Wilkerson - Year: Senior - Position: Center - Height: 7'1",
      "#10 - Chris Danger - Year: Junior - Position: Forward - Height: 6'8",
      "#11 - Jayden Wilson - Year: Sophomore - Position: Center - Height: 6'10",
      "#12 - Justice Young - Year: Senior -  Position: Guard - Height: 6'3",
      "#15 - Jahmir Williams - Year: Senior - Position: Forward - Height: 6'8"
    ];
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background-color: var(--ddd-theme-default-alertUrgent);
          padding: 16px;
        }

        .top-heading {
          color: var(--ddd-theme-default-inventOrange);
          font-weight: var(--ddd-font-weight-bold);
        }

        .button {
          padding: 10px 16px;
          background: var(--ddd-theme-default-inventOrange);
          color: white;
          border: none;
          cursor: pointer;
          margin-top: 20px;
          border-radius: 6px;
        }

        .coaches {
          display: flex;
          gap: 16px;
          margin: 20px 0;
          color:black;
        }

        .coach {
          text-align: center;
        }

        .coach img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }

        .players {
          margin-top: 10px;
          color: black;
        }

        .players li {
          margin: 4px 0;
        }
      `
    ];
  }

  goRoster() {
    this.page = "roster";
  }

  goHome() {
    this.page = "home";
  }

  render() {
    return html`

      ${this.page === "home"
        ? html`
            <div class="navBar">
              <h1 class="top-heading">${this.topHeading}</h1>

              <button class="button" @click=${this.goRoster}>
                View Roster
              </button>
            </div>
          `
        : html`
            <div class="navBar">
              <h1 class="top-heading">Team Roster</h1>

              <button class="button" @click=${this.goHome}>
                Back
              </button>

             <!-- Coaches -->
<div class="coaches-section">
  <h3 class="top-heading">Our Elite Coaching Staff!</h3>

  <div class="coaches">
    ${this.coaches.map(
      coach => html`
        <div class="coach">
          <img src="${coach.img}" alt="${coach.name}" />
          <div>${coach.name}</div>
        </div>
      `
    )}
  </div>
</div>

              <!-- players -->
              <div class="players">
                <h3>Meet our team!</h3>
                <ul>
                  ${this.players.map(
                    player => html`<li>${player}</li>`
                  )}
                </ul>
              </div>
            </div>
          `}
    `;
  }
}

globalThis.customElements.define(TeamRoster.tag, TeamRoster);