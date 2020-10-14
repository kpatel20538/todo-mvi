import html from "snabby";

const Nav = ({ currentTab$ }) =>
  currentTab$.map(
    (currentTab) => html`
      <div class="tabs is-small is-centered is-toggle is-toggle-rounded">
        <ul>
          <li @class=${{ "is-active": currentTab === "all" }}>
            <a href="#/all">All</a>
          </li>
          <li @class=${{ "is-active": currentTab === "active" }}>
            <a href="#/active">Active</a>
          </li>
          <li @class=${{ "is-active": currentTab === "complete" }}>
            <a href="#/complete">Complete</a>
          </li>
        </ul>
      </div>
    `
  );

export default Nav;
