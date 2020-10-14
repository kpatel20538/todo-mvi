import html from "snabby";
import xs from "xstream";

const App = ({ Entry$, Footer$, Items$, Nav$, hasItems$ }) =>
  xs.combine(Entry$, Footer$, Items$, Nav$, hasItems$).map(
    ([entryView, footerView, itemsView, navView, hasItems]) => html`
      <div class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-one-third">
              <div class="block has-text-centered">
                <div class="title">Todo MVI</div>
                <div class="subtitle">
                  Based off of <a href="http://todomvc.com/"> Todo MVC </a>
                </div>
              </div>
              <div class="box">
                ${entryView}
                ${hasItems
                  ? html`
                      <div>
                        <hr />
                        ${itemsView}
                        <hr />
                        ${navView} ${footerView}
                      </div>
                    `
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  );

export default App;
