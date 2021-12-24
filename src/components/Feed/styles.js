import styled from "styled-components";

export const Container = styled.section`
  flex: 0.6;
  padding-bottom: 8rem;
  
  @media (max-width: 575.98px) {
    flex: 1;
    padding-bottom: 0;
  }
  
  @media (min-width: 575.99) and (max-width: 991.98px) {
    flex: .5;
    padding-bottom: 0;
  }


  .post__filter {
    position: relative;
    cursor: pointer;

    display: flex;
    flex-direction: row-reverse;

    .post__filterTitle {
      font-size: 0.8rem;
      color: var(--black-a60);

      &:before {
        content: "";
        position: absolute;
        top: 75%;
        left: 0;
        width: 65%;
        height: 1px;
        background: var(--black-a60);
        opacity: 0.5;

        @media (max-width: 575.98px) {
          width: 48%;
        }
      }

      strong {
        color: var(--black-a90) !important;

        .post__filterIcon {
          transform: translateY(25%) !important;
        }
      }
    }
  }
`;

export const Share = styled.div`
  height: object-fit;
  border-radius: 0.5rem;
  padding: 12px 12px 0 12px;

  border-width: 0 0.5px 0.5px 0.5px;
  border-style: solid;
  border-color: var(--border-gray-10);

  display: flex;
  flex-direction: column;
  background: #fff;

  @media (max-width: 575.98px) {
    border-width: 2px 0 2px 0;
  }

  .feed__shareFirstContainer {
    display: flex;
    gap: 1rem;

    .feed__sharePhoto {
      width: 50px;
      height: 50px;
    }

    .feed__shareInput {
      width: 100%;
      background: transparent;
      border: 0.5px solid var(--border-gray-40);
      border-radius: 3rem;
      text-align: left;
      padding: 1rem;

      &:hover {
        background: var(--black-a08);
      }

      span {
        padding: 0;
        margin: 0;
        color: var(--black-a60);
        font-weight: bold;
      }
    }
  }
`;

export const InputOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
