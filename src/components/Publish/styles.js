import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 1000;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  background: rgba(0, 0, 0, 0.6);


  .publish__container {
    background: #fff;
    border-radius: 0.5rem;
    height: object-fit;
    transform: translateY(5%);

    @media (max-width: 575.98px) {
      width: 100%;
    }

    .publish__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px;
      border: 1px solid var(--border-gray-10);


      h2 {
        margin: 0;
        font-weight: 400;
        font-size: 1.3rem;
        color: var(--black-a90);
      }

      .publish__headerCloseIcon {
        color: var(--black-a60);
        width: 30px;
        height: 30px;
      }
    }

    .publish__body {
      padding: 12px;

      .publish__bodyStats {
        display: flex;
        align-items: center;

        .publish__bodyOption {
          display: flex;
          justify-content: center;
          flex-direction: column;
          margin-left: 1rem;

          h2 {
            color: var(--black-a90);
            font-weight: 500;
            font-size: 1rem;
            margin: 0;
          }

          .publish__bodyTarget {
            display: flex;
            justify-content: center;
            align-self: flex-start;
            align-items: center;
            padding: 0.2rem 0.5rem;
            margin-top: 0.2rem;

            border-radius: 3rem;
            border: 1px solid var(--black-a60);
            color: var(--black-a60);

            transition: all 0.1s;
            &:hover {
              background: var(--black-a08);
              box-shadow: inset 0 0 0 1px var(--black-a60);
            }

            .publish__bodyIcon {
              width: 17px;
              height: 17px;
            }

            span {
              margin: 0 0.2rem;
              font-size: 0.9em;
              font-weight: 600;
            }
          }
        }
      }

      .publish__bodyText {
        padding: 0;

        .publish__bodyInput {
          width: 100%;
          border: none;
          outline: none;
          font-size: 1rem;
          margin-top: 1rem;
        }

        .publish__bodyHashTag {
          color: var(--blue-active);
          border: none;
          border-radius: 0.5rem;
          padding: 0.5rem;
          font-weight: bold;
          font-size: 1rem;
          background: none;

          &:hover {
            background: var(--blue-50);
          }
        }
      }
    }

    .publish__footer {
      display: flex;
      align-items: center;
      padding: 12px;


      .publish__footerOptions {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        @media (max-width: 575.98px) {
          display: none;
        }
      }
      
      .publish__mobile__footerOptions {
        display: none;

        @media (max-width: 575.98px) {
          display: block;
        }
      }

      .publish__footerLine {
        position: relative;
        margin: 0 1rem;

        &:before {
          content: "";
          position: absolute;
          top: -20px;
          left: 0;
          right: 0;
          width: 1px;
          height: 35px;
          background: var(--border-gray-10);
        }
      }

      .publish__footerPublish {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .publish__footerPublishChatIcon {
          @media (max-width: 575.98px) {
            display: none;
          }
        }

        .publish__mobile__footerPublishChatIcon {
          display: none;

          @media (max-width: 575.98px) {
            display: block;
          }
        }

        .publish__footerPublishInput {
          border-radius: 1rem;
          padding: 0.5rem 1rem;
          font-size: 1.1rem;
          font-weight: 600;
          background: var(--blue-active);
          color: #fff;
          border: none;

          @media (max-width: 575.98px) {
            margin-left: 3rem;
          }

          transition: background 0.2s;
          &:hover {
            background: var(--blue-a80);
          }
        }

        .publish__footerPublishInput[disabled] {
          background: var(--black-a08);
          color: gray;
        }
      }
    }
  }
`;
