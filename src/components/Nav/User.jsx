import classNames from "classnames";

import NavItem from "./NavItem";
import Button from "../Button";

export default function User(props) {

  const userButtonClass = classNames('user-button', {
    'user-button-hidden': props.hidden,
    'user-button-show': !props.hidden
  });

  return (
    <div className={userButtonClass}>
      <ul>
        <NavItem navSelect={props.onFavorites} name="Favorites" />
        <NavItem navSelect={props.onMyListings} name="My Listings" />
        <NavItem navSelect={props.onSoldListings} name="Sold Listings" />
        <NavItem navSelect={props.onMessages} name="Messages" />
      </ul>
      <Button danger onClick={props.onLogout}>Logout</Button>
    </div>
  );
};