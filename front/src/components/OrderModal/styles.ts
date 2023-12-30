import styled from 'styled-components';

export const Overlay = styled.div`
  left: 0px;
  top: 0px;

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4.5px);

  width: 100%;
  height: 100%;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 480px;
  border-radius: 10px;
  padding: 32px;


  header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong{
      font-size: 24px;
    }

    button{
      display: flex;
    border: 0;
    background: transparent;
  }
}

.status-container{
  margin-top: 32px;

  small{
    font-size: 14px;
    opacity: 0.8;
  }

  div{
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  strong {
    font-weight: 500;
    font-size: 14px;
  }

  .order-items{
    margin-top: 16px;

    .item{
      display: flex;
      margin-top: 16px;
    }

    & + .item {
      margin-top: 16px;
    }

    img{
      border-radius: 6px;
    }

    .quantity {
      font-size: 14px;
      color: #666;
      display: block;
      min-width: 20px;
      margin-left: 20px;
    }

    .product-details{
      margin-left: 4px;
      strong{
        	//display: flex;
          display: block;
          margin-bottom: 4px ;
          font-weight: bold;
      }

      span{
        font-size: 14px;
      }
    }
  }

  .total{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    span{
      font-size: 18px;
    }

    strong{
      font-weight: bold;
      font-size: 18px;
    }
  }


`;

export const Actions = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin: 20px 0px;

  .primary{
    width: 100%;
    background: #333333;
    border-radius: 48px;
    border: 0;
    color: #fff;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 8px;
  }

  .secondary{

    padding: 14px 24px;
    color: red;
    font-weight: bold;
    border: 0;
    background: transparent;
    //background: blue;
    margin-top: 16px;
    border-radius: 48px;
   // width: 100%;

  }
`;
