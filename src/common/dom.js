export const toSelector = (className) => `.${className}`;

export const getData = (element, key) => {
  while (element && !(key in element.dataset)) {
    element = element.parentElement;
  }
  return element ? element.dataset[key] : null;
};
