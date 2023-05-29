import styled from "styled-components";

const DetailContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  overflow: hidden;

  img {
    min-width: 512px;
    min-height: 570px;
    object-fit: cover;
    transition: all 0.2s linear;
  }
  img:hover {
    transform: scale(4.5);
  }
`;

const ItemContainer = styled.div`
  width: 45%;
  color: #585555;
  min-height: 570px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  font-size: 25px;
  margin-left: 30px;
  flex-wrap: wrap;

  button {
    background-color: #5b4f33;
    color: white;
    font-size: 1rem;
    min-width: 480px;
    padding: 5px 20px;
    border-radius: 5px;
    font-weight: 800;
    margin: 50px 0px;
    box-shadow: 0 0 10px 5px;
    a {
      color: white;
    }
  }

  button:hover {
    background-color: #7d725a;
  }

  div {
    font-size: 1rem;
  }

  .titleCase {
    div {
      margin-bottom: 15px;
      font-size: 1rem;
    }
    .stock {
      width: 100%;
      text-align: center;
      background-color: #312e2e;
      color: white;
      padding: 0px 10px;
      font-size: 20px;
    }
  }
`;

const PurchaseBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  .flexbox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
  }
  .purchase {
    display: flex;
    flex-direction: row;
    align-items: center;
    div {
      font-size: 15px;
    }
  }

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  .purchaseBtn {
    border: 1px solid #585555;
    border-radius: 5px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px 10px;
  }
  .purchaseBtn:hover {
    background-color: rgba(88, 85, 85, 0.1);
  }
`;

const DetailBox = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  div {
    font-weight: 300;
    font-size: 15px;
    margin-bottom: 7px;
  }
`;

const AdressBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 480px;
  height: 70px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-top: 20px;
  width: 480px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.8);

  :hover {
    background-color: rgba(88, 85, 85, 0.1);
  }
`;

export {
  DetailContainer,
  ImageContainer,
  ItemContainer,
  PurchaseBox,
  DetailBox,
  AdressBox,
  ContactBox,
};
