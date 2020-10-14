import xs from "xstream";
import { actionType } from "../common/constants.yaml";
import { select } from "../common/actions";

const initialState = [];

const replace = (array, idx, updater) => [
  ...array.slice(0, idx),
  updater(array[idx], idx, array),
  ...array.slice(idx + 1),
];

const unshift = (array, item) => [item, ...array];

const removeSlice = (array, idx, length = 1) => [
  ...array.slice(0, idx),
  ...array.slice(idx + length),
];

const reducer = (state, action) =>
  select({
    [actionType.loadItems]: ({ values }) => values,
    [actionType.createItem]: ({ value }) =>
      unshift(state, { title: value, complete: false }),
    [actionType.updateItem]: ({ idx, value }) =>
      replace(state, idx, (item) => ({ ...item, title: value })),
    [actionType.completeItem]: ({ idx }) =>
      replace(state, idx, (item) => ({ ...item, complete: !item.complete })),
    [actionType.removeItem]: ({ idx }) => removeSlice(state, idx),
    [actionType.toggleAll]: () => {
      const complete = !state.every(({ complete }) => complete);
      return state.map((item) => ({ ...item, complete }));
    },
    [actionType.clearComplete]: () => state.filter(({ complete }) => !complete),
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
    .fold(reducer, initialState);
