import React from "react";
import { Container } from "./styles";
import LinkedInLogo from "../../assets/icons/logo.svg";
import {HeaderOption} from "../HeaderOption"

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SendIcon from '@mui/icons-material/Send';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


export function Header() {

  return (
    <Container>
      <div className="header__left">
        <img src={LinkedInLogo} alt="" />

        <SearchIcon className="header__mobile__searchLogo" />
        <div className="header__search">
          <SearchIcon className="header__searchLogo" />

          <input type="text" placeholder="Pesquisar" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Início" active={true} />
        <HeaderOption Icon={PeopleAltIcon} title="Minha rede" />
        <HeaderOption Icon={BusinessCenterIcon} title="Vagas" />
        <HeaderOption Icon={SendIcon} title="Mensagens" rotate={true} />
        <HeaderOption Icon={NotificationsIcon} title="Notificações" />
        <HeaderOption Icon={MoreHorizIcon} classN="header__mobile__right" />

        <HeaderOption avatar={true} title="Eu" />
      </div>
    </Container>
  );
}
