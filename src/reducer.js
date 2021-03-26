export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // token:
  //   "BQCqrew5QKVfc7ioUlvixZIJIBB2Mg-dG4mbIUGOVat2rwWMEcZMqga-DUPn4lbYpFVr1U_txlnqkGVv437fT4ZuT1115OYxQnzhmfutCmn6S5eLMIa2D1cIRnQTnsN-0ptunv5HtWQTfdVoY4WqpTM4W8GHTF742F_L_Zkg2eseOhNO ",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    default:
      return state;
  }
};

export default reducer;
