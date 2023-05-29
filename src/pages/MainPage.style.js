import styled from "styled-components";

const MainContainer = styled.div`
  padding-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 0 auto;
  color: black;
`;

const Category = styled.div`
  margin-top: 15px;
  height: 100vh;
  min-width: 250px;
  border-radius: 5px;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  input {
    width: 80%;
    margin: 20px 0;
  }
  div {
    margin: 10px 0;
    width: 80%;
    color: rgba(0, 0, 0, 0.8);
    padding: 10px;
    border-radius: 5px;
  }
  div:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
`;

const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 280px;
    height: 280px;
    margin: 15px;
  }
  div {
    margin-left: 15px;
  }
  .title {
    color: rgba(0, 0, 0, 0.8);
  }
  .price {
    margin-top: 5px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export { MainContainer, Category, CardContainer, ItemCard };
