import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  flex: 0.22;
  font-size: 0.8rem;
  padding-top: 1rem;

  display: flex;
  
  flex-direction: column;

  @media (max-width: 991.98px) {
    position: relative;
    flex: 1;
  }

  .sidebar__mobile__seeMore {
    display: none;
    text-align: center;
    font-weight: 600;
    font-size: .9rem;
    color: var(--black-a60);
    margin-left: calc(12px + 0.5rem);
    margin-top: -1px;
    border-radius: 0.5rem;
    cursor: pointer;

    @media (max-width: 575.98px) {
      display: block;
    }

    &:hover {
      background: var(--black-a08);
    }

    .sidebar__mobile__seeMoreIcon {
      transform: translateY(0.4rem) !important;
    }
  }

`;

export const SidebarTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;

  border-width: 0 0.5px 0.5px 0.5px;
  border-style: solid;
  border-color: var(--border-gray-10);

  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background: #fff;

  @media (max-width: 575.98px) {
    border-width: 0 0 3px 0;
    border-radius: 0;
  }

  .sidebar__cover {
    width: 100%;
    height: 60px;
    object-fit: cover;
    margin-bottom: -30px;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;

    @media (max-width: 575.98px) {
      border-radius: 0;
    }
  }

  .sidebar__profile {
    cursor: pointer;

    &:hover h2 {
      text-decoration: underline;
    }

    h2 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .sidebar__avatar {
      margin: 0 auto;
      margin-bottom: 2rem;
      border: 2px solid #fff;
      width: 70px;
      height: 70px;
    }
  }

  .sidebar__description {
    p {
      font-size: 0.75rem;
      margin: 0;
      color: gray;
    }
  }
`;

export const SidebarStats = styled.div`
  border-width: 0 0.5px 0.5px 0.5px;
  border-style: solid;
  border-color: var(--border-gray-10);

  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  padding: 1rem 0;
  background: #fff;

  @media (max-width: 575.98px) {
    display: none;
  }

  .sidebar__stat {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 12px;
    font-size: 1rem;

    .sidebar__statNumber {
      font-weight: bold;
      color: var(--blue-active);
    }
  }
`;

export const SidebarBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px 12px 12px;
  margin-top: 1rem;
  border: 0.5px solid var(--border-gray-10);
  border-radius: 0.5rem;
  background: #fff;

  @media (max-width: 575.98px) {
    display: none;
  }

  .sidebar__bottomTitle {
    font-weight: 600;
    font-size: 1.1rem;
  }

  .sidebar__recentItem {
    display: flex;
    cursor: pointer;
    color: gray;
    font-size: 0.9rem;
    padding: 0.5rem 0;
    font-weight: bold;

    &:hover {
      color: var(--black-a90);
    }

    p {
      margin: 0;

      .sidebar__hash {
        margin-right: 0.5rem;
        font-weight: bold;
      }
    }
  }
`;
