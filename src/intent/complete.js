import { dom, actionType } from "../common/constants.yaml";
import { toSelector } from "../common/dom";
import { type } from "../common/actions";

export const toggleAll = ({ DOM }) =>
  DOM.select(toSelector(dom.toggleAll))
    .events("click")
    .map(() => ({
      [type]: actionType.toggleAll,
    }));

export const clearComplete = ({ DOM }) =>
  DOM.select(toSelector(dom.clearComplete))
    .events("click")
    .map(() => ({
      [type]: actionType.clearComplete,
    }));
