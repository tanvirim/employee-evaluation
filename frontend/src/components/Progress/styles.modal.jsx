// ProgressModalStyles.js
import styled from 'styled-components';

export const ModalWrapper = styled.div`
  /* Styles for the modal container */
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  ${props => props.isOpen && 'display: flex;'}
`;

export const ModalContent = styled.div`
  /* Styles for the modal content */
  position:relative;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
 span{
  position:absolute;
  top:0;
  right:0;
  padding:10px;
  color:red;
  cursor: pointer;
  border-radius: 5px;
  &:hover{
    background-color: #f10000;
    color:white;
    border:2px solid #c80000;
  }
 }
  form div {
    display: flex;
    flex-direction: column;
    padding:10px;
  }
  form div input{
    height:40px;
    font-size:1.3rem;
  }
  form div input ,textarea{
    border-radius: 5px;
    border:2px solid #f1c5c5;
    padding:10px;
  }

.button-group{
  font-size:1.3rem;
  display:flex;
  justify-content:space-between;
  padding:20px;
}
.save-button{
  background-color: #27d057;
  width:100px;
  color:white;
  padding:10px;
  border-radius: 5px;
  cursor: pointer;
 &:hover{
 background-color:white;
 color:#078a2c;
 border:2px solid #27d057;
 }
}
.cancel-button{
  background-color: #f10000;
  width:100px;
  color:white;
  padding:10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
 background-color:white;
 color:#d70000;
 border:2px solid #c80000;
 }
}

`;

/* Add more styling as needed */
