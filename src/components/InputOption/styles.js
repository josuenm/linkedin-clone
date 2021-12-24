import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 5px 0;

  @media (max-width: 575.98px) {
    padding: 1rem .3rem !important;
    margin: 0;
  }

  &:hover {
    background: var(--black-a08);
  }

  h4 {
    margin: 0 0 0 1rem;
    font-weight: 600;
    color: var(--black-a60);

    @media (max-width: 575.98px) {
     margin: 0 0 0 .5rem;
     font-size: .8rem;
    }
  }

  [data-icon] {

    @media (max-width: 575.98px) {
      width: 1.2rem;
      height: 1.2rem;
    }
  }

  .post__title {
    margin-left: 0.5rem;
  }

  #send {
    transform: translateY(-0.1rem) rotate(-45deg) !important;
  }
`;
