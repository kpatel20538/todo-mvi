import html from "snabby";
import { dom } from "../common/constants.yaml"

const Footer = ({ activeCount$ }) =>
  activeCount$.map(
    (activeCount) => html`
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <div class="heading px-3">
              <strong>${activeCount}</strong>
              items left
            </div>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <button class="${dom.clearComplete} button is-white">
              <div class="heading">Clear complete</div>
            </button>
          </div>
        </div>
      </nav>
    `
  );

export default Footer;
