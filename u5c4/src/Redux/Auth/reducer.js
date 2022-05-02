import { LOGIN_TOGGLE } from "./actions";

// const init = {
//    role: false,
// };

export const reducer = (store, { type, payload }) => {
   switch (type) {
      case LOGIN_TOGGLE:
         return {
            ...store,
            login: payload.login,
         };
      default:
         return store;
   }
};
