import Avatar from '@mui/material/Avatar'
import { Container, SidebarBottom, SidebarStats, SidebarTop } from "./styles"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

export function Sidebar() {

  const user = useSelector(selectUser)

  const recentItem = (topic) => {
    return (<div className="sidebar__recentItem">
      <p>
        <span className="sidebar__hash">#</span>
        {topic}
      </p>
    </div>)
  }

  return (
    <Container>
      <SidebarTop>
        <img src="https://images.unsplash.com/photo-1637270868253-a871f965b936?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=3640&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzOTQzMzI2Nw&ixlib=rb-1.2.1&q=80&w=5464" alt="" className="sidebar__cover" />
        <div className="sidebar__profile">
          <Avatar className="sidebar__avatar" src={user.photoUrl} />
          <h2>{user.displayName}</h2>
        </div>
        <div className="sidebar__description">
          <p>Entre em contato comigo:</p>
          <p>direct.josue@gmail.com</p>
        </div>
      </SidebarTop>

      <SidebarStats>
        <div className="sidebar__stat">
          <p>Quem viu seu perfil</p>
          <p className="sidebar__statNumber">147</p>
        </div>

        <div className="sidebar__stat">
          <p>Quem viu seus posts</p>
          <p className="sidebar__statNumber">341</p>
        </div>
      </SidebarStats>

      <SidebarBottom>
        <h2 className="sidebar__bottomTitle">Recente</h2>

        {recentItem("programming")}
        {recentItem("reactjs")}
        {recentItem("developer")}
        {recentItem("reactnative")}
        {recentItem("design")}
      </SidebarBottom>
      
      <h2 className="sidebar__mobile__seeMore">
        Exibir mais <KeyboardArrowDownIcon className="sidebar__mobile__seeMoreIcon" />
      </h2>

    </Container>
  )
}