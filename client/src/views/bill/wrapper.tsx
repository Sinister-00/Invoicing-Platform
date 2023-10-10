import styled from 'styled-components';

const Wrapper = styled.section`
  h2 {
    font-size: xx-large;
    margin-bottom: 5px;
  }
  p {
    font-weight: bold;
  }
  .itmss {
    display: flex;
    /* flex-direction: row; */
  }
  .btn {
    margin-top: 15px;
  }
  .it {
    /* color: violet */
  }
  .inn {
    display: flex;
    gap: 60%;
  }
  .order-total--amount {
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    /* justify-content: flex-end; */
    align-items: center;
  }
  .order-total--subdata {
    background-color: #f0f0f0;
    text-align: center;
    width: 50%;
    border: 0.1rem solid #f0f0f0;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    padding: 3.2rem;
  }
`;

export default Wrapper;
