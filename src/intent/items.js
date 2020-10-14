import dropRepeats from "xstream/extra/dropRepeats";
import { dom, storageKey, actionType } from "../common/constants.yaml";
import { toSelector, getData } from "../common/dom";
import { type } from "../common/actions";

export const loadItems = ({ storage }) =>
  storage.local
    .getItem(storageKey.items)
    .compose(dropRepeats())
    .map((items) => ({
      [type]: actionType.loadItems,
      values: items ? JSON.parse(items) : [],
    }));

export const completeItem = ({ DOM }) =>
  DOM.select(toSelector(dom.itemComplete))
    .events("click")
    .map((event) => ({
      [type]: actionType.completeItem,
      idx: Number(getData(event.target, "idx")),
    }));

export const removeItem = ({ DOM }) =>
  DOM.select(toSelector(dom.itemRemove))
    .events("click")
    .map((event) => ({
      [type]: actionType.removeItem,
      idx: Number(getData(event.target, "idx")),
    }));

export const updateItem = ({ DOM }) =>
  DOM.select(toSelector(dom.itemInput))
    .events("input")
    .map((event) => ({
      [type]: actionType.updateItem,
      idx: Number(getData(event.target, "idx")),
      value: event.target.value,
    }));
