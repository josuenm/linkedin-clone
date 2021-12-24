import {Container} from "./styles"
import Avatar from '@mui/material/Avatar'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { loggout } from "../../features/userSlice"

export function HeaderOption({avatar, Icon, title, rotate, active, classN}) {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  function loggoutOfApp() {
    dispatch(loggout())
    auth.signOut()
  }

  return (
    <Container onClick={avatar | classN === 'header__mobile__right' && loggoutOfApp}>
      <div className={classN ? `${classN} headerOption` : 'headerOption'} id={active && 'active'}>
        {Icon && <Icon className="headerOption__icon" id={rotate && 'send'} />}
        {avatar && (
          <Avatar className="headerOption__icon" id="avatar" src={user.photoUrl} />
        )}
        <div id='text'>
          <span>{title}</span>
          {avatar && <ArrowDropDownIcon className="headerOption__drop" />}
        </div>
      </div>
    </Container>
  )
}
