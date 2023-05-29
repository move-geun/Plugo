import styled from "styled-components";

const AddContainer = styled.div`
  margin: 0 auto;
  margin-top: 80px;
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
  .btnCase {
    width: 70%;
    margin: 10px auto;
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
`;

export { AddContainer };
