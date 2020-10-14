import html from "snabby";
import xs from "xstream";
import { entry as classNames } from "../common/classNames.yaml";

const Entry = ({ entry$, isAllComplete$, hasItems$ }) =>
  xs.combine(entry$, isAllComplete$, hasItems$).map(
    ([entry, isAllComplete, hasItems]) => html`
      <div class="field is-grouped">
        <div @class=${{ control: true, "opacity-0": !hasItems }}>
          <button
            @class=${{
              [classNames.toggleAll]: true,
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
            class="${classNames.input} input is-static"
            type="text"
            placeholder="What needs to been done?"
            @props:value=${entry}
          />
        </div>
      </div>
    `
  );

export default Entry;
