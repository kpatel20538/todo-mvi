
export const type = Symbol("type");

export const select = (options) => (action) => {
  const handler = options[action[type]] || options._;
  if (!handler) {
    throw new Error("Unhandled action");
  }
  return handler(action);
};
