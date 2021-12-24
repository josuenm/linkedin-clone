import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CloseIcon from '@mui/icons-material/Close';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CelebrationIcon from '@mui/icons-material/Celebration';
import PollIcon from '@mui/icons-material/Poll';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatIcon from '@mui/icons-material/Chat';
import Avatar from '@mui/material/Avatar'
import PublicIcon from '@mui/icons-material/Public';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { Container } from "./styles"
import { InputOption } from "../InputOption"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { hide } from "../../features/isPublishSlice"
import { selectIsPublish } from "../../features/isPublishSlice"
import { useSelector } from "react-redux"
import { db } from "../../firebase"
import firebase from "firebase/compat/app";
import { selectUser } from '../../features/userSlice';

export function Publish() {
  
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
 
  const { isPublish } = useSelector(selectIsPublish)

  function closeModal({target}) {
    if(target.classList.contains("canClose") || target.nodeName === 'path') {
      dispatch(hide())
    }
  }

  const [textInput, setTextInput] = useState('')

  const sendPost = (e) => {
    e.preventDefault()
    
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: textInput,
      photoUrl: user.photoUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    dispatch(hide())
  }

  return (
    <>
      {isPublish && <Container onClick={closeModal} className="canClose">
        <div className="publish__container">
          <form action="post" onSubmit={sendPost}>
            <div className="publish__header">
              <h2>Criar publicação</h2>
              <InputOption 
                Icon={CloseIcon}
                color="var(--black-a60)" 
                size="30"
                onClick={closeModal} 
                rounded={true}
                className="publish__headerCloseIcon" 
                id="close" 
                classNameClose="canClose"
                />
            </div>

            <div className="publish__body">
              <div className="publish__bodyStats">
                <Avatar src={user.photoUrl} />
                <div className="publish__bodyOption">
                  <h2>{user.displayName}</h2>
                  <div className="publish__bodyTarget">
                    <PublicIcon className="publish__bodyIcon" />
                    <span>Todos</span>
                    <ArrowDropDownIcon />
                  </div>
                </div>
              </div>
              <div className="publish__bodyText">
                <textarea 
                value={textInput} 
                onChange={({target}) => setTextInput(target.value)}
                placeholder="No que você está pensando?" 
                className="publish__bodyInput"
                style={{resize: "none"}}
                rows="7"
                ></textarea>

                <button className="publish__bodyHashTag">Adicionar hashtag</button>
              </div>
            </div>

            <div className="publish__footer">
              <div className="publish__footerOptions">
                <InputOption Icon={ImageIcon} color="var(--black-a60)" rounded={true} size="25" />
                <InputOption Icon={SubscriptionsIcon} color="var(--black-a60)" rounded={true} size="25" />
                <InputOption Icon={InsertDriveFileIcon} color="var(--black-a60)" rounded={true} size="25"/>
                <InputOption Icon={BusinessCenterIcon} color="var(--black-a60)" rounded={true} size="25" />
                <InputOption Icon={CelebrationIcon} color="var(--black-a60)" rounded={true} size="25" />
                <InputOption Icon={PollIcon} color="var(--black-a60)" rounded={true} size="25" />
                <InputOption Icon={MoreHorizIcon} color="var(--black-a60)" rounded={true} size="25" />
              </div>
              <div className="publish__mobile__footerOptions">
                <InputOption Icon={MoreHorizIcon} color="var(--black-a60)" rounded={true} size="25" />
              </div>
              <span className="publish__footerLine"></span>
              <div className="publish__footerPublish">
                <div className="publish__footerPublishChatIcon">
                  <InputOption 
                  Icon={ChatIcon} 
                  color="var(--black-a60)" 
                  title="Qualquer pessoa" 
                  size="25"
                  textSize=".9"
                  containerSize={true} 
                  />
                </div>
                <div className="publish__mobile__footerPublishChatIcon">
                  <InputOption 
                  Icon={ChatIcon} 
                  color="var(--black-a60)" 
                  title="Qualquer pessoa" 
                  size="20" 
                  textSize=".9"
                  />
                </div>

                <input 
                type="submit" 
                value="Publicar" 
                className="publish__footerPublishInput" 
                disabled={textInput !== '' ? false : true} />
              </div>
            </div>
          </form>
        </div>
      </Container>}
    </>
  )
}