export const actionCreatorIgnoresArguments = f => ({
  reducer: f,
  prepare: _ => ({ payload: undefined })
});
