import React from "react";
import Header from "../Header/Header";
import "./Body.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useStateContext } from "../../StateProvider";
import SongRow from "../SongRow/SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateContext();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:1fFYteWylaWZVPLcEx0s48`,
      })
      .then(
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        })
      );
  };

  const playSong = (id) => {
    console.log(id);
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__infor">
        <img src={discover_weekly?.images[1].url} alt="" />
        <div className="body__inforText">
          <p style={{ textTransform: "uppercase" }}>{discover_weekly?.type}</p>

          <h2>{discover_weekly?.name}</h2>

          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteBorderIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {/* list song */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
