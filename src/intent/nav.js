import { type } from "../common/actions";

export const selectTab = ({ history }) =>
  history
    .map((event) => ({
      [type]: "selectTab",
      key: event.pathname.substr(1) || "all",
    }))
