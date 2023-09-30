// UserList.styles.js
import styled from 'styled-components';

export const UserListContainer = styled.div`
  display: flex;
  
  align-items: center;
  margin: 20px;
`;

export const UserGroup = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 10px 0;
    font-size: 1.2rem;
    color: #666;
    border-bottom: 1px solid #ddd;
    padding-bottom: 5px;

    &:last-child {
      border-bottom: none;
      margin-bottom: 0;
    }
  }

  @media (min-width: 768px) {
    /* On screens larger than 768px, display user groups as flex */
    display: flex;
    flex-direction: column;

    ul {
      width: 100%;
    }

    li {
      margin: 0;
      padding: 10px;
      border-bottom: none;

      &:not(:last-child) {
        border-right: 1px solid #ddd;
      }
    }
  }
`;
