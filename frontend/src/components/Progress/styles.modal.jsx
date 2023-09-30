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
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;

/* Add more styling as needed */
