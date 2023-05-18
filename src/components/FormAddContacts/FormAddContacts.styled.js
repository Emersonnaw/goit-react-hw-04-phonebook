import styled from '@emotion/styled'
import { Form, Field  } from 'formik';

export const Container = styled.div`
    display: flex;
   
    flex-direction: column;
   
`;



export const FormCastom = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 50px;
    
    border: 2px solid silver;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
   
`;

export const LabelCastom = styled.label`
    display: flex;
  
    flex-direction: column;
    
    gap:10px;

    padding: 15px;
    font-size: 30px;
`;

export const InputCastom = styled(Field)`
    padding-left:15px;
    font-size:30px;
    border: 2px solid  #1e90ff;
    border-radius: 10px;

`;

export const Button = styled.button`
margin-left: 15px;
margin-bottom: 25px;
padding: 5px;
width: 160px;
border-radius: 10px; 
font-size: 18px;
font-weight:600;
cursor: pointer;
background-image: linear-gradient(-180deg,  #7cfc00, #E62C03);
box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
color: #FFFFFF;
`;

