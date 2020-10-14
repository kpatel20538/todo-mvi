import html from "snabby";
import xs from "xstream";
import { dom } from "../common/constants.yaml"

const Checkbox = ({ complete }) => html`
  <button
    @class=${{
      [dom.itemComplete]: true,
      button: true,
      "is-inverted": true,
      "is-primary": complete,
      "is-dark": !complete,
    }}
  >
    <i
      @class=${{
        far: true,
        "fa-check-circle": complete,
        "fa-circle": !complete,
      }}
    ></i>
  </button>
`;

const Input = ({ item, isEditing }) => html`
  <input
    @class=${{
      [dom.itemInput]: true,
      input: true,
      "is-static": !isEditing,
      "strike-through": item.complete,
    }}
    type="text"
    @props:value=${item.title}
    @props:readOnly=${!isEditing}
  />
`;

const TodoItem = ({ item, isEditing }) => html`
  <div class="hover-visible-control field is-grouped" @dataset:idx=${item.idx}>
    <div class="control">${Checkbox({ complete: item.complete })}</div>
    <div class="control is-expanded">${Input({ item, isEditing })}</div>
    <div
      @class=${{
        control: true,
        "hover-visible-target": true,
        "is-hidden": isEditing,
      }}
    >
      <button class="${dom.itemRemove} button is-inverted is-danger">
        <i class="fas fa-times "></i>
      </button>
    </div>
  </div>
`;

const Items = ({ currentTab$, tabs$, edit$ }) =>
  xs
    .combine(currentTab$, tabs$, edit$)
    .map(([currentTab, tabs, edit]) =>
      tabs[currentTab].map((item) =>
        TodoItem({ item, isEditing: edit === item.idx })
      )
    );

export default Items;
