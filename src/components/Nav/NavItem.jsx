import classNames from "classnames";

export default function NavItem(props) {
  const navClass = classNames('nav-item', {'nav-item--selected': props.selected,});

  return (
    <li className={navClass} onClick={props.navSelect}>
      <h3 className="nav-text">{props.name}</h3>
    </li>
  )
}