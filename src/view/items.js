import html from "snabby";
import xs from "xstream";
import { item as classNames } from "../common/classNames.yaml"

const Checkbox = ({ complete }) => html`
  <button
    @class=${{
      [classNames.complete]: true,
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
      [classNames.input]: true,
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
      <button class="${classNames.remove} button is-inverted is-danger">
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
