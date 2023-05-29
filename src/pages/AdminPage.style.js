import styled from "styled-components";

const AdminContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;

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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    form {
      margin-top: 20px;
      img {
        width: 220px;
        height: 220px;
        margin-left: 120px;
        margin-bottom: 10px;
      }
    }
    form > div {
      margin-left: 20px;
      display: flex;
      height: 300px;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      font-size: 17px;
    }
    input {
      background-color: white;
      margin-left: 20px;
      font-size: 17px;
      width: 380px;
    }
    .btnCase {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      padding-bottom: 20px;
    }
    .btnCase > div {
      font-size: 20px;
      font-weight: 800;
      padding: 5px 10px;
      background-color: white;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 10px;
    }
    .green:hover {
      background-color: #7d725a;
    }
    .red:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
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

const AddItem = styled.div`
  display: flex;
  width: 40%;
  height: 30px;
  background-color: whitesmoke;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 20px;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export { AdminContainer, ItemCard, AddItem };
