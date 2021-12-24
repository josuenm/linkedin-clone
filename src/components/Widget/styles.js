import styled from "styled-components";

export const Container = styled.div`
  flex: 0.4;
  height: object-fit;

  @media (max-width: 991.98px) {
    flex: 1;
    margin-top: 5rem;
  }

  .widget__footer {
    text-align: center;

    p {
      color: var(--black-a90);
      
      a{
        color: var(--black-a60);

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const News = styled.div`
  position: relative;
  padding: 12px 0 calc(2rem + 12px) 0;

  border-radius: 0.5rem;

  border-width: 0 0.5px 0.5px 0.5px;
  border-style: solid;
  border-color: var(--border-gray-10);
  background: #fff;

  @media (max-width: 575.98px) {
    border-width: 2px 0 2px 0;
    border-radius: 0;
  }

  .widget__header {
    display: flex;
    justify-content: space-between;
    padding: 0 12px;

    h2 {
      font-size: 1.1rem;
      font-weight: 600;
      margin: 0;
    }

    .widget__headerIcon {
      width: 0.8em;
      cursor: pointer;
    }

    .widget__popUpHelp {
      position: absolute;
      top: 0.5rem;
      right: 3rem;
      z-index: 999;

      background: #fff;
      border-radius: 0.5rem;
      box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.4);
      font-size: 0.8rem;
      padding: 0.5rem;

      display: flex;

      width: 300px;
      height: object-fit;

      animation: animeHelpOpen 0.5s ease 1 alternate forwards;

      @keyframes animeHelpOpen {
        from {
          opacity: 0;
          transform: translateX(-1rem);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      p {
        margin: 0;

        span {
          color: var(--blue-active);
          font-weight: bold;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      .widget__headerCloseIcon {
        cursor: pointer;
        width: 0.9em;
        color: var(--black-a60);
      }
    }
  }

  .widget__news {
    list-style: none;
    padding: 0;

    .widget__newsOption {
      position: relative;
      padding: 0.3rem 0.1rem;
      cursor: pointer;

      &:before {
        content: "";
        position: absolute;
        top: 0.8rem;
        left: 12px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--black-a60);
      }

      &:hover {
        background: var(--black-a08);
      }

      .widget__newsTitle {
        padding: 0 calc(12px + 1rem);
        font-weight: 600;
        font-size: 0.9rem;
        margin: 0;
      }

      .widget__newsDescription {
        padding: 0 calc(12px + 1rem);
        color: var(--black-a60);
        font-size: 0.8rem;
        margin: 0;
      }
    }
  }

  .widget__seeMore {
    position: absolute;
    bottom: 0;

    font-weight: 600;
    font-size: 1rem;
    color: var(--black-a60);
    margin-left: calc(12px + 0.5rem);
    padding: 0 0.5rem 0.5rem 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
      background: var(--black-a08);
    }

    .widget__seeMoreIcon {
      transform: translateY(0.4rem) !important;
    }
  }
`;
