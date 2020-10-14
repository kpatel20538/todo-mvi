import xs from "xstream";
import { select } from "../common/actions";

const initialState = [];

const replace = (array, idx, updater) => [
  ...array.slice(0, idx),
  updater(array[idx], idx, array),
  ...array.slice(idx + 1),
];

const reducer = (state, action) =>
  select({
    loadItems: ({ values }) => values,
    createItem: ({ value }) => [{ title: value, complete: false }, ...state],
    updateItem: ({ idx, value }) =>
      replace(state, idx, (item) => ({ ...item, title: value })),
    completeItem: ({ idx }) =>
      replace(state, idx, (item) => ({ ...item, complete: !item.complete })),
    removeItem: ({ idx }) => [...state.slice(0, idx), ...state.slice(idx + 1)],
    toggleAll: () => {
      const complete = !state.every(({ complete }) => complete);
      return state.map((item) => ({ ...item, complete }));
    },
    clearComplete: () => state.filter(({ complete }) => !complete),
    _: () => state,
  })(action);

export const items = ({
  loadItems$,
  createItem$,
  updateItem$,
  completeItem$,
  removeItem$,
  toggleAll$,
  clearComplete$,
}) =>
  xs
    .merge(
      loadItems$,
      createItem$,
      updateItem$,
      completeItem$,
      removeItem$,
      toggleAll$,
      clearComplete$
    )
    .fold(reducer, initialState)
    .map((items) => items.map((item, idx) => ({ ...item, idx })));
