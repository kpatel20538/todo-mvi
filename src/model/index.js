import { edit } from "./edit";
import { entry } from "./entry";
import { items } from "./items";
import { activeCount, hasItems, isAllComplete, tabs, currentTab } from "./tabs";

export function model({
  loadItems$,
  toggleAll$,
  updateInput$,
  createItem$,
  completeItem$,
  removeItem$,
  startEdit$,
  endEdit$,
  updateItem$,
  selectTab$,
  clearComplete$,
}) {
  const items$ = items({
    loadItems$,
    createItem$,
    updateItem$,
    completeItem$,
    removeItem$,
    toggleAll$,
    clearComplete$,
  });
  
  const tabs$ = tabs({ items$ });
  const isAllComplete$ = isAllComplete({ tabs$ });
  const hasItems$ = hasItems({ tabs$ });
  const activeCount$ = activeCount({ tabs$ });
  const currentTab$ = currentTab({ selectTab$ });

  const edit$ = edit({ startEdit$, endEdit$ });
  const entry$ = entry({ createItem$, updateInput$ });

  return {
    items$,
    currentTab$,
    edit$,
    entry$,
    tabs$,
    isAllComplete$,
    hasItems$,
    activeCount$,
  };
}
