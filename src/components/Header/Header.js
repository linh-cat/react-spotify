import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useStateContext } from "../../StateProvider";

function Header({ spotify }) {
  const [{ user }] = useStateContext();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search song, playlist, charts ... " />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
