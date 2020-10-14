import xs from "xstream";
import { actionType } from "../common/constants.yaml"
import { select } from "../common/actions";

const intitialState = "";
const reducer = (state, action) => {
  return select({
    [actionType.createItem]: () => "",
    [actionType.updateInput]: ({ value }) => value,
    _: () => state,
  })(action);
};

export const entry = ({ createItem$, updateInput$ }) =>
  xs.merge(createItem$, updateInput$).fold(reducer, intitialState);
