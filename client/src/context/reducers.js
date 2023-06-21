import { DISPLAY_ALERT, CLEAR_ALERT } from './actions';
const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      altertType: 'danger',
      alertText: 'Please provide all values!',
    };
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: true,
      altertType: 'danger',
      alertText: '',
    };
  }

  throw new Error(`no such action :${action.type} `);
};
export default reducer;
