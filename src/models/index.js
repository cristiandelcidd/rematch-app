export const count = {
  state: {
    value: 0,
    users: [],
  },
  reducers: {
    increment(state, payload) {
      return { ...state, value: state.value + payload };
    },
    decrement(state, payload) {
      return { ...state, value: state.value - payload };
    },
    addUser(state, payload) {
      return { ...state, users: [...state.users, payload] };
    },
    deleteUser(state, payload) {
      return {
        ...state,
        users: state.users.filter((user) => user.id !== payload),
      };
    },
  },
  effects: (dispatch) => ({
    async incrementAsync(payload, _) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    },
  }),
};
