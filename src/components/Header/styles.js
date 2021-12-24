import styled from "styled-components";

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 500;
  border-bottom: 0.5px solid var(--border-gray-10);
  background: #fff;
  padding: 0 3.5rem 0 4.5rem;
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 12rem;
  
  @media (max-width: 991.98px) {
    padding: 0;
    gap: 0;
  }

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    padding-left: 4rem;
  }

  .header__left {
    display: flex;
    align-items: center;
    width: object-fit;


    .header__mobile__searchLogo {
      display: none;
      
      @media (max-width: 991.98px) {
        display: block;
        margin: 0 .8rem;
      }
    }

    img {
      object-fit: contain;
      height: 3rem;
    }

    .header__search {
      padding: 1.1rem;
      width: 100%;
      height: 0.8rem;
      cursor: text;

      display: flex;
      align-items: center;
      border-radius: 0.25rem;

      color: var(--black-a60);
      background: #eef3f8;

      @media (max-width: 991.98px) {
        display: none;
      }

      .header__searchLogo {
        width: 1.4rem;
        height: 1.4rem;
      }

      input {
        background: none;
        border: none;
        outline: none;
        width: 250px;
      }
    }
  }

  .header__right {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.9rem;
    
    @media (min-width: 575.98px) and (max-width: 991.98px) {
      width: 100%;
      justify-content: space-between;
    }

    @media (max-width: 991.98px) {
      gap: 1.1rem;
    }

    .header__mobile__right {
      display: none;

      @media (max-width: 991.98px) {
        display: block;
      }
    }

    
  }
`;
