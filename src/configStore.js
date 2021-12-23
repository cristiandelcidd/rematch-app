const mapState = (state) => ({
  count: state.count,
});
const mapDispatch = (dispatch) => ({
  increment: () => dispatch.count.increment(1),
  incrementAsync: () => dispatch.count.incrementAsync(1),
  decrement: () => dispatch.count.decrement(1),
});

export { mapState, mapDispatch };
