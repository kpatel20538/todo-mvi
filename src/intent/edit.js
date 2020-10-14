import xs from "xstream";
import { dom, actionType } from "../common/constants.yaml";
import { toSelector, getData } from "../common/dom";
import { type } from "../common/actions";

export const startEdit = ({ DOM }) => {
  const selector = toSelector(dom.itemInput);

  const doubleClick$ = DOM.select(selector).events("dblclick");
  const focus$ = DOM.select(selector).events("focus");

  return xs.merge(doubleClick$, focus$).map((event) => ({
    [type]: actionType.startEdit,
    idx: Number(getData(event.target, "idx")),
  }));
};

export const endEdit = ({ DOM }) => {
  const selector = toSelector(dom.itemInput);

  const blur$ = DOM.select(selector).events("blur");
  const enterOrTab$ = DOM.select(selector)
    .events("keydown")
    .filter((event) => event.key === "Enter" || event.key === "Tab");

  return xs.merge(blur$, enterOrTab$).map((event) => ({
    [type]: actionType.endEdit,
    idx: Number(getData(event.target, "idx")),
  }));
};
