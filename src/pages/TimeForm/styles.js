import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  height: 650px;
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100px;
    margin: 10px 0 40px;
  }

  p {
    color: #7159c1;
    margin-bottom: 15px;
    margin-right: 10px;
    border: 1px solid #7159c1;
    padding: 20px;
    width: 360px;
    text-align: center;
  }

  input {
    flex: 1;
    height: 60px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    align-items: center;
  }

  #hours {
    display: flex;
    flex-direction: row;

    p {
      color: #7159c1;
      margin-bottom: 15px;
      margin-right: 10px;
      border: 1px solid #7159c1;
      padding: 20px;
      width: 180px;
      text-align: center;
    }
    input {
      flex: 1;
      height: 60px;
      margin-bottom: 15px;
      padding: 0 20px;
      color: #777;
      font-size: 15px;
      width: 100%;
      border: 1px solid #ddd;
      align-items: center;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
`;
