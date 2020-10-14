import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css";
import App from "./app";
import Entry from "./entry";
import Footer from "./footer";
import Items from "./items";
import Nav from "./nav";

export function view({
  entry$,
  currentTab$,
  items$,
  tabs$,
  edit$,
  isAllComplete$,
  hasItems$,
  activeCount$,
}) {
  return {
    DOM: App({
      Entry$: Entry({ entry$, isAllComplete$, hasItems$ }),
      Footer$: Footer({ activeCount$ }),
      Items$: Items({ currentTab$, tabs$, edit$ }),
      Nav$: Nav({ currentTab$ }),
      hasItems$,
    }),
    storage: items$.map((items) => ({
      key: "items",
      value: JSON.stringify(items),
    })),
  };
}
