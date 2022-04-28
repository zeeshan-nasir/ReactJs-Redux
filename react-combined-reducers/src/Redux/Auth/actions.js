export const TOGGLE_AUTH = "TOGGLE_AUTH";

export const toggleAuth = (data) => {
   return {
      type: TOGGLE_AUTH,
      payload: data,
   };
};
