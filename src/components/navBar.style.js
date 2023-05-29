import styled from "styled-components";

const NavBarContainer = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  color: black;
  align-items: center;
  justify-content: space-between;
  .nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 200px;
    div {
      padding: 0 20px;
      border-radius: 5px;
      text-align: center;
      display: flex;
      align-items: center;
      height: 70px;
    }
    div:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
  .logo {
    margin-left: 3rem;
    width: 80px;
    height: 80px;
  }
  .login {
    margin-right: 3rem;
  }
`;

export { NavBarContainer };
