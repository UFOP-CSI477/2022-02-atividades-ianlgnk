export const getters = {
  getUser: (state) => state.user,
  getError: (state) => state.error,
  getSuccess: (state) => state.success,
  getToken: (state) => {
    if (state.user === undefined) return undefined;
    return state.user.token;
  },
  isUserLoggedInCompany: (state) => {
    if (state.user === undefined) return undefined;
    return state.user.isCompany;
  },
};
