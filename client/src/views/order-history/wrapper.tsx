import styled from 'styled-components';

const Wrapper = styled.section`
  h2 {
    margin-top: 10px;
    text-align: center;
    font-size: xx-large;
    margin-bottom: 5px;
  }
  h3 {
    text-align: center;
    font-size: larger;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .order-list {
    align-items: center;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    font-size: large;
  }

  .order-card {
    width: 50%;
    border: 0.1rem solid #f0f0f0;
    padding: 1.6rem;
    background-color: #f0f0f0;
  }

  .order-details {
    display: flex;
    justify-content: space-between;
  }

  .order-items {
    flex: 1;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  .order-total {
    flex: 1;
    text-align: right;
  }
`;

export default Wrapper;
