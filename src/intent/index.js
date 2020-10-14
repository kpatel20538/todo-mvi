import { createItem, toggleAll, updateInput } from "./entry";
import { loadItems, completeItem, removeItem, updateItem } from "./item";
import { endEdit, startEdit } from "./edit";
import { selectTab } from "./nav";
import { clearComplete } from "./footer";

export function intent({ DOM, history, storage }) {
  return {
    loadItems$: loadItems({ storage }),
    toggleAll$: toggleAll({ DOM }),
    updateInput$: updateInput({ DOM }),
    createItem$: createItem({ DOM }),
    completeItem$: completeItem({ DOM }),
    removeItem$: removeItem({ DOM }),
    startEdit$: startEdit({ DOM }),
    endEdit$: endEdit({ DOM }),
    updateItem$: updateItem({ DOM }),
    selectTab$: selectTab({ history }),
    clearComplete$: clearComplete({ DOM }),
  };
}
