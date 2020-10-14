import xs from "xstream";
import { actionType } from "../common/constants.yaml"
import { select } from "../common/actions";

const intitialState = null;
const reducer = (state, action) => {
  return select({
    [actionType.startEdit]: ({ idx }) => idx,
    [actionType.endEdit]: () => null,
    _: () => state,
  })(action);
};

export const edit = ({ startEdit$, endEdit$ }) =>
  xs.merge(startEdit$, endEdit$).fold(reducer, intitialState);
