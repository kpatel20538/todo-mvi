import { entry } from "../common/classNames.yaml";
import { toSelector } from "../common/dom";
import { type } from "../common/actions";

export const toggleAll = ({ DOM }) =>
  DOM.select(toSelector(entry.toggleAll))
    .events("click")
    .map(() => ({
      [type]: "toggleAll",
    }));

export const updateInput = ({ DOM }) =>
  DOM.select(toSelector(entry.input))
    .events("input")
    .map((event) => ({
      [type]: "updateInput",
      value: event.target.value,
    }));

export const createItem = ({ DOM }) =>
  DOM.select(toSelector(entry.input))
    .events("keydown")
    .filter((event) => event.key === "Enter")
    .map((event) => ({
      [type]: "createItem",
      value: event.target.value,
    }));
