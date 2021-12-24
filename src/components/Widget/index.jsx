import { useState } from "react"
import { Container, News } from "./styles"

import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export function Widget() {

const [popUpHelp, setPopUpHelp] = useState(false);

  return (
    <Container>
      <News>
        <div className="widget__header">
          <h2 className="widget__headerTitle">LinkedIn Notícias</h2>
          <HelpCenterIcon className="widget__headerIcon" onClick={() => setPopUpHelp(true)} />

          {popUpHelp && <div className="widget__popUpHelp">
            <p>
              Estas são as principais notícias e conversas profissionais do dia. <span>Saiba mais</span> sobre como elas são selecionadas.
            </p>
            <CloseIcon className="widget__headerCloseIcon" onClick={() => setPopUpHelp(false)}  />
          </div>}
        </div>

        <ul className="widget__news">
          <li className="widget__newsOption">
            <p className="widget__newsTitle">Covid-19: as últimas notícias sobre as va...</p>
            <p className="widget__newsDescription">Notícias mais lidas • 6.179 leitores</p>
          </li>
          <li className="widget__newsOption">
            <p className="widget__newsTitle">Brasil cai em ranking da indústria global</p>
            <p className="widget__newsDescription">há 2 d • 405 leitores</p>
          </li>
          <li className="widget__newsOption">
            <p className="widget__newsTitle">EBANX adquire fintech Remessa Online...</p>
            <p className="widget__newsDescription">há 10 h • 496 leitores</p>
          </li>
          <li className="widget__newsOption">
            <p className="widget__newsTitle">iFood começa a usar drones para delive...</p>
            <p className="widget__newsDescription">há 10 h • 496 leitores</p>
          </li>
          <li className="widget__newsOption">
            <p className="widget__newsTitle">Turismo deve crescer 21,9% em 2021</p>
            <p className="widget__newsDescription">há 1 d</p>
          </li>
        </ul>

        <h2 className="widget__seeMore">
          Exibir mais <KeyboardArrowDownIcon className="widget__seeMoreIcon" />
        </h2>
      </News>

      <div className="widget__footer">
        <p>Feito por: <a href="https://www.instagram.com/josueonfroy/" target="_blank" rel="noopener noreferrer">Josué N. Mendonça</a></p>
        <p>Créditos para: <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        <p>LinkedIn Clone</p>
      </div>
    </Container>
  )
}