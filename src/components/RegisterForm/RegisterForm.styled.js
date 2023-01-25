import styled from 'styled-components';
import { Link } from 'react-router-dom';
// export const Form = styled.form`
//   display: flex;
//   gap: 10px;
//   flex-direction: column;
//   align-items: center;
// `;

// export const Label = styled.label`
//   display: flex;
//   flex-display: column;
//   gap: 5px;
// `;

// export const Button = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: gray;
//   border: none;
//   border-radius: 4px;
//   color: white;
//   font-size: 18px;
//   cursor: pointer;

//   &:disabled {
//     border: 1px solid #999999;
//     background-color: #cccccc;
//     color: #666666;
//   }
// `;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: block;
  height: 66px;
  font-weight: bold;
  width: 300px;
  color: ${props => (props?.passwordInvalid ? 'red' : 'black')};
`;

export const LabelCheckbox = styled.label`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 26px;
  gap: 10px;
  font-weight: 400;
  width: 150px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 18px;
  cursor: pointer;

  &:disabled {
    cursor: default;
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
`;

export const ButtonBlock = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const RedirectLink = styled(Link)`
  border: none;
  border-radius: 4px;
  color: black;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: teal;
    text-decoration: none;
  }
`;
