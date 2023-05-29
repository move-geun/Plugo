import styled from "styled-components";

const AdminContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 500px;
  display: flex;
  flex-direction: row;

  .leftContainer {
    width: 500px;
    background-color: white;
    overflow: auto;
    .title {
      font-size: 20px;
      text-align: center;
      margin-top: 10px;
    }
  }
  .rightContainer {
    width: 550px;
    background-color: white;
  }
`;

const ItemCard = styled.div`
  display: flex;
  margin-top: 10px;
  img {
    width: 70px;
    height: 70px;
    margin: 0 20px;
  }
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  .flexCol {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    opacity: 0.8;
  }
`;

export { AdminContainer, ItemCard };
