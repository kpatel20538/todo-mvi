import dropRepeats from "xstream/extra/dropRepeats";

const filters = {
  all: (items) => items,
  complete: (items) => items.filter(({ complete }) => complete),
  active: (items) => items.filter(({ complete }) => !complete),
};

export const tabs = ({ items$ }) =>
  items$
    .map((items) => items.map((item, idx) => ({ ...item, idx })))
    .map((items) => ({
      all: filters.all(items),
      complete: filters.complete(items),
      active: filters.active(items),
    }));

export const isAllComplete = ({ tabs$ }) =>
  tabs$
    .map(({ complete, all }) => complete.length === all.length)
    .compose(dropRepeats())
    .startWith(false);

export const hasItems = ({ tabs$ }) =>
  tabs$
    .map(({ all }) => all.length > 0)
    .compose(dropRepeats())
    .startWith(false);

export const activeCount = ({ tabs$ }) =>
  tabs$
    .map(({ active }) => active.length)
    .compose(dropRepeats())
    .startWith(0);

export const currentTab = ({ selectTab$ }) =>
  selectTab$.map(({ key }) => key).startWith("all");
