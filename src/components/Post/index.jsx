import { Container } from "./styles";
import { InputOption } from "../InputOption";

import Avatar from '@mui/material/Avatar'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

export function Post({name, description, message, photoUrl}) {
  return (
    <Container>
      <div className="post__header">
        <div className="post__headerContent">
          <Avatar className="post__headerContentProfile" src={photoUrl} />
          <div className="post__headerInfo">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <MoreHorizIcon className="post__headerMoreIcon" />
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltIcon} title="Gostei" color="var(--black-a60)" classN="post" />
        <InputOption Icon={ChatIcon} title="Comentar" color="var(--black-a60)" classN="post" />
        <InputOption Icon={ShareIcon} title="Compartilhar" color="var(--black-a60)" classN="post" />
        <InputOption Icon={SendIcon} title="Enviar" color="var(--black-a60)" rotate={true} classN="post" />
      </div>
    </Container>
  )
}