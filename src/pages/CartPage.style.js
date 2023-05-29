import styled from "styled-components";

const CartContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    width: 100%;
    text-align: left;
    margin-left: 120px;
    font-size: 20px;
  }
`;

const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .leftContainer {
    width: 650px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .empty {
      font-size: 25px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 120px;

      .goShop {
        margin-top: 60px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        padding: 20px 30px;
        border-radius: 20px;
      }
      .goShop:hover {
        background-color: rgba(88, 85, 85, 0.1);
      }
    }

    .checkbox {
      font-size: 17px;
      margin-top: 20px;
      margin-bottom: 20px;
      margin-left: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;

      input {
        margin-right: 5px;
        width: 20px;
        height: 20px;
        background-color: #4d4022;
      }
      label {
        margin-right: 10px;
      }
    }
  }

  .rightContainer {
    width: 330px;
    height: 200px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    color: #4d4022;

    .flexbox {
      display: flex;
      flex-direction: row;
      width: 300px;
      height: 25px;
      justify-content: space-between;
      margin-bottom: 15px;
    }
    .nowBtn {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px 0px;
      border-radius: 10px;
      background-color: #7d725a;
      color: white;
    }
    .nowBtn:hover {
      background-color: black;
    }
  }
`;

const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: white;
  border-radius: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-left: 55px;
  img {
    width: 48px;
    height: 48px;
  }

  .top {
    margin-top: 10px;
    display: flex;
    flex-direction: row;

    .itemCheck {
      width: 20px;
      height: 20px;
      margin: 0 10px;
    }
    .itemDetail {
      height: 50px;
      margin-left: 10px;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .itemStock {
      }
      .itemTitle {
        color: #5b4f33;
      }
      .itemPrice {
        color: #5b4f33;
        opacity: 0.5;
      }
    }

    .card {
      display: flex;
      flex-direction: row;
    }
  }

  .bottom {
    width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .delBtn {
      margin: 10px 0 10px 10px;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      border: 1px solid #5b4f33;
      padding: 0 10px;
      border-radius: 10px;
    }
    .delBtn:hover {
      background-color: #8c754e;
      opacity: 0.8;
    }

    .orderBtn {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 20px;
      button {
        background-color: white;
        font-size: 25px;
        margin: 0 10px;
      }
    }
  }
`;

export { CartContainer, ItemContainer, ItemCard };
