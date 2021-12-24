import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1.5rem;
  border-radius: 0.5rem;
  background: #fff;

  border-width: 1px;
  border-style: solid;
  border-color: var(--border-gray-10);

  @media (max-width: 575.98px) {
    border-width: 2px 0 2px 0;
    border-radius: none;
  }

  .post__header {
    display: flex;
    justify-content: space-between;
    padding: 12px 12px 0 12px;

    .post__headerContent {
      display: flex;
      gap: 0.5rem;

      .post__headerContentProfile {
        width: 50px;
        height: 50px;
        cursor: pointer;
      }

      .post__headerInfo {
        cursor: pointer;

        h2 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;

          &:hover {
            text-decoration: underline;
          }
        }
        p {
          font-size: 0.9rem;
          margin: 0;
          color: var(--black-a60);
        }
      }
    }

    .post__headerMoreIcon {
      border-radius: 50%;
      padding: 0.2rem;
      width: 30px;
      height: 30px;
      color: var(--black-a60);
      cursor: pointer;

      &:hover {
        background: var(--black-a08) !important;
      }
    }
  }

  .post__body {
    padding: 0 12px 12px 12px;
  }

  .post__buttons {
    display: flex;
    justify-content: space-evenly;
  }
`;
