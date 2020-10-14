import xs from "xstream";
import { item } from "../common/classNames.yaml";
import { toSelector, getData } from "../common/dom";
import { type } from "../common/actions";

export const startEdit = ({ DOM }) => {
  const doubleClick$ = DOM.select(toSelector(item.input)).events("dblclick");
  const focus$ = DOM.select(toSelector(item.input)).events("focus");

  return xs.merge(doubleClick$, focus$).map((event) => ({
    [type]: "startEdit",
    idx: Number(getData(event.target, "idx")),
  }));
};

export const endEdit = ({ DOM }) => {
  const blur$ = DOM.select(toSelector(item.input)).events("blur");
  const enterOrTab$ = DOM.select(toSelector(item.input))
    .events("keydown")
    .filter((event) => event.key === "Enter" || event.key === "Tab");

  return xs.merge(blur$, enterOrTab$).map((event) => ({
    [type]: "endEdit",
    idx: Number(getData(event.target, "idx")),
  }));
};
