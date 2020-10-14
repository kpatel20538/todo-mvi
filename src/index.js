import { run } from "@cycle/run";
import { makeDOMDriver } from "@cycle/dom";
import { makeHashHistoryDriver } from "@cycle/history";
import storageDriver from "@cycle/storage";

import { intent } from "./intent";
import { model } from "./model";
import { view } from "./view";

const main = (sources) => view(model(intent(sources)));

run(main, {
  DOM: makeDOMDriver("#root"),
  history: makeHashHistoryDriver(),
  storage: storageDriver,
});
