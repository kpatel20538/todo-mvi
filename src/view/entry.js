import html from "snabby";
import xs from "xstream";
import { dom } from "../common/constants.yaml";

const Entry = ({ entry$, isAllComplete$, hasItems$ }) =>
  xs.combine(entry$, isAllComplete$, hasItems$).map(
    ([entry, isAllComplete, hasItems]) => html`
      <div class="field is-grouped">
        <div @class=${{ control: true, "opacity-0": !hasItems }}>
          <button
            @class=${{
              [dom.toggleAll]: true,
              button: true,
              "is-inverted": true,
              "is-dark": true,
              "has-text-dark": isAllComplete,
              "has-text-grey-lighter": !isAllComplete,
            }}
          >
            <i class="fas fa-angle-down"></i>
          </button>
        </div>
        <div class="control is-expanded">
          <input
            class="${dom.entryInput} input is-static"
            type="text"
            placeholder="What needs to be done?"
            @props:value=${entry}
          />
        </div>
      </div>
    `
  );

export default Entry;
