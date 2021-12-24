import { useState, useEffect } from "react"
import {InputOption} from "../InputOption"
import { Container, InputOptions, Share } from "./styles"
import { Post } from "../Post"
import { db } from "../../firebase"


import Avatar from '@mui/material/Avatar'
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch, useSelector} from "react-redux"
import { show } from "../../features/isPublishSlice";
import { Head } from "../Head"
import { selectUser } from "../../features/userSlice"
import FlipMove from "react-flip-move"

export function Feed() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => (
      setPosts(
        snapshot.docs.map(doc => (
          {
            id: doc.id,
            data: doc.data(),
          }
        ))
      )
    ))
  }, [])

  return(
    <Container>

      <Head 
        title="Feed | LinkedIn"
        description=""
      />


      <Share>
        <div className="feed__shareFirstContainer">
          <Avatar className="feed__sharePhoto" src={user.photoUrl} />
          <button className="feed__shareInput" onClick={() => dispatch(show())}>
            <span>Começar publicação</span>
          </button>
        </div>
        <InputOptions>
          <InputOption Icon={ImageIcon} title="Foto" color="#7085F9" />
          <InputOption Icon={SubscriptionIcon} title="Vídeo" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Evento" color="#C0CBCD" />
          <InputOption Icon={CalendarViewDayIcon} title="Escrever artigo" color="#7FC15E" />
        </InputOptions>
      </Share>

      <div className="post__filter">
        <span className="post__filterTitle">
          Classificar por: <strong>Principais <ArrowDropDownIcon className="post__filterIcon" /></strong>
        </span>
      </div>

      <FlipMove>
        {posts.map(({id, data: { name, description, message, photoUrl }}) => (
          <Post 
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl} />
        ))}
      </FlipMove>
    </Container>
  )
}