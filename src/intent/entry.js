import { dom, actionType } from "../common/constants.yaml";
import { toSelector } from "../common/dom";
import { type } from "../common/actions";

export const updateInput = ({ DOM }) =>
  DOM.select(toSelector(dom.entryInput))
    .events("input")
    .map((event) => ({
      [type]: actionType.updateInput,
      value: event.target.value,
    }));

export const createItem = ({ DOM }) =>
  DOM.select(toSelector(dom.entryInput))
    .events("keydown")
    .filter((event) => event.key === "Enter")
    .map((event) => ({
      [type]: actionType.createItem,
      value: event.target.value,
    }));
