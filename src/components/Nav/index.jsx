// import style
import './styles.scss'

// import hooks
import useVisualMode from '../../hooks/useVisualMode'

// import mode components
import User from './User';
import Guest from './Guest';
import NavItem from './NavItem';

// constants for mode
const HIDDEN = 'HIDDEN';
const GUEST = 'GUEST';
const USER = 'USER';

export default function Nav(props) {
  const {mode, transition, back} = useVisualMode(HIDDEN);

  // function to toggle user menu
  const onHide = () => (mode === HIDDEN) ? transition((props.user ? USER : GUEST)) : back();
  
  return (
    <nav className='nav'>
      <div>
        <img src="https://i.imgur.com/9b9qLqG.png" alt='logo' />
        <ul>
          <NavItem navSelect={props.onSearch} name="Browse" />
        </ul>
      </div>
      <div className="user-menu">
      {mode === USER && <User />}
      {mode === GUEST && <Guest />}
      {mode === HIDDEN && <></>}
        <img onClick={onHide} className="user-profile" src="https://i.imgur.com/NxfgFTE.png" alt="avatar" />
      </div>
    </nav>
  )
}