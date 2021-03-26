import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import Login from "./components/login/Login";
import Player from "./components/Player/Player";
import { getTokenFromResponse } from "./components/Spotify/Spotify";
import { useStateContext } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token, discover_weekly }, dispatch] = useStateContext();

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const haveToken = hash.access_token;

    if (haveToken) {
      spotify.setAccessToken(haveToken);
      // setToken(haveToken);
      dispatch({
        type: "SET_TOKEN",
        token: haveToken,
      });

      spotify.getPlaylist("1fFYteWylaWZVPLcEx0s48").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((data) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: data,
        });
      });
    }
  }, []);
  // console.log("USER", user);
  // console.log("DISCOVER", discover_weekly);
  // console.log("TOKEN", token);
  console.log("DISCOVER_WEEKLY", discover_weekly);
  // console.log("Get playlist", );
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
