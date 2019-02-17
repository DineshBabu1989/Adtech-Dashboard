export const TOGGLE_SIDE_BAR = "TOGGLE_SIDE_BAR";

/**
 * Triggers an action to show or hide sidebar
 * @param {*} visiblity Boolean value returning either true or false from reducer
 */
export const toggle_side_bar = (visibility) => {
  return {
    type: TOGGLE_SIDE_BAR,
    payload: visibility
  };
};