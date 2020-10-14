import { actionType } from "../common/constants.yaml";
import { type } from "../common/actions";

export const selectTab = ({ history }) =>
  history
    .map((event) => ({
      [type]: actionType.selectTab,
      key: event.pathname.substr(1) || "all",
    }))
