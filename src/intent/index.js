import { createItem, updateInput } from "./entry";
import { loadItems, completeItem, removeItem, updateItem } from "./items";
import { endEdit, startEdit } from "./edit";
import { selectTab } from "./navigation";
import { clearComplete, toggleAll } from "./complete";

export function intent({ DOM, history, storage }) {
  return {
    loadItems$: loadItems({ storage }),
    updateInput$: updateInput({ DOM }),
    createItem$: createItem({ DOM }),
    completeItem$: completeItem({ DOM }),
    removeItem$: removeItem({ DOM }),
    startEdit$: startEdit({ DOM }),
    endEdit$: endEdit({ DOM }),
    updateItem$: updateItem({ DOM }),
    selectTab$: selectTab({ history }),
    clearComplete$: clearComplete({ DOM }),
    toggleAll$: toggleAll({ DOM }),
  };
}
