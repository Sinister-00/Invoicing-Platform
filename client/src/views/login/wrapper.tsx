import styled from 'styled-components';

const Wrapper = styled.section`
  .login-container {
    align-items: center;
    text-align: center;
    background-color: #ffffff;
    border-radius: 8px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 60px;
    align-items: center;
  }

  input {
    padding: 10px;
    height: 50px;
    width: 400px;
    border: 1px solid #ccc;
    border-radius: 4px;
    align-items: center;
  }

  button {
    width: 40%;
  }
`;

export default Wrapper;
