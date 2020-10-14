import { footer } from "../common/classNames.yaml";
import { toSelector } from "../common/dom";
import { type } from "../common/actions";

export const clearComplete = ({ DOM }) =>
  DOM.select(toSelector(footer.clearComplete))
    .events("click")
    .map(() => ({
      [type]: "clearComplete",
    }));
