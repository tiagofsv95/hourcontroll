import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Form = styled.form`
  height: 100%;
  width: 600px;
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
    width: 370px;
  }

  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }

  ul {
    list-style: none;
    margin-top: 30px;

    li {
      padding: 15px 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      span {
        padding: 10px;
      }

      & + li {
        border-top: 1px solid #eee;
      }

      a {
        color: #7159c1;
        text-decoration: none;
      }
    }
  }
`;
