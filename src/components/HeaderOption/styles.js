import styled from "styled-components";

export const Container = styled.div`
  .headerOption {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1.5rem;
    color: var(--black-a60);
    cursor: pointer;

    @media (max-width: 991.98px) {
      padding: 0;
    }

    &:hover {
      color: var(--black-a90);
    }

    .headerOption__icon {
      object-fit: contain;
      width: 1.6rem;
      height: 1.6rem;
      margin: 0;
    }

    #send {
      transform: translateY(-0.1rem) rotate(-45deg) !important;
    }

    #avatar {
      transform: translateY(20%);

      @media (max-width: 991.98px) {
          display: none;
      }
    }
    

    span {
      display: block;
      margin: 0;
    }

    #text {
      display: flex;
      align-items: center;

      @media (max-width: 991.98px) {
          display: none;
      }

      .headerOption__drop {
        width: 30px;
        height: 30px;
      }
    }
  }

  #active {
    position: relative;
    color: black;
    color: var(--black-a90);

    &:after {
      content: "";
      position: absolute;
      bottom: -0.4rem;
      width: 100%;
      height: 1.5px;
      background-color: var(--black-a90);

      @media (max-width: 991.98px) {
          display: none;
      }
    }
  }
`;
