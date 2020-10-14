import xs from "xstream";
import { select } from "../common/actions";

const intitialState = null;
const reducer = (state, action) => {
  return select({
    startEdit: ({ idx }) => idx,
    endEdit: () => null,
    _: () => state,
  })(action);
};

export const edit = ({ startEdit$, endEdit$ }) =>
  xs.merge(startEdit$, endEdit$).fold(reducer, intitialState);
