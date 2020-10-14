import xs from "xstream";
import { select } from "../common/actions";

const intitialState = "";
const reducer = (state, action) => {
  return select({
    createItem: () => "",
    updateInput: ({ value }) => value,
    _: () => state,
  })(action);
};

export const entry = ({ createItem$, updateInput$ }) =>
  xs.merge(createItem$, updateInput$).fold(reducer, intitialState);
