import { TOGGLE_AUTH } from "./actions";

const init = {
   auth: false,
};

export const authReducer = (store = init, action) => {
   switch (action.type) {
      case TOGGLE_AUTH:
         return {
            auth: action.payload.auth ? true : false,
         };
      default:
         return store;
   }
};
