import xs from "xstream";
import dropRepeats from "xstream/extra/dropRepeats";
import { item } from "../common/classNames.yaml";
import { toSelector, getData } from "../common/dom";
import { type } from "../common/actions";

export const loadItems = ({ storage }) =>
  storage.local
    .getItem("items")
    .compose(dropRepeats())
    .map((items) => ({
      [type]: "loadItems",
      values: items ? JSON.parse(items) : [],
    }));

export const completeItem = ({ DOM }) =>
  DOM.select(toSelector(item.complete))
    .events("click")
    .map((event) => ({
      [type]: "completeItem",
      idx: Number(getData(event.target, "idx")),
    }));

export const removeItem = ({ DOM }) =>
  DOM.select(toSelector(item.remove))
    .events("click")
    .map((event) => ({
      [type]: "removeItem",
      idx: Number(getData(event.target, "idx")),
    }));

export const updateItem = ({ DOM }) =>
  DOM.select(toSelector(item.input))
    .events("input")
    .map((event) => ({
      [type]: "updateItem",
      idx: Number(getData(event.target, "idx")),
      value: event.target.value,
    }));
