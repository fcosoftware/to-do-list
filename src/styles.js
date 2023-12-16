import styled from "styled-components"

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc"

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ToDoList = styled.div`
    background: #ffffff;
    padding: 30px 20px;
    border-radius: 5px;

    ul {
        padding: 0;
        margin-top: 60px;
    }
`

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.40);
    border-radius: 5px;
    height: 40px;
    margin-right: 40px;
    width: 340px;
`

export const Button = styled.button`
   background: #8052EC;
   border-radius: 5px;
   border: none;

   color: #ffffff;
   font-size: 17px;
   font-weight: 900;
   line-height: 2.5px;
   height: 40px;
   width: 130px;

   cursor: pointer;

   &:hover {
    opacity: 0.8;
   }

   &:active {
    opacity: 0.2;
   }
`

export const ListItem = styled.div`
    background: ${(props) => (props.isFinished ? '#e8ff8b' : '#e4e4e4')};
    box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.20);
    border-radius: 5px;
    height: 60px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 30px;
    padding: 0 10px;
    width: 500px;

    li {
        list-style: none;
    }
`

export const Trash = styled(FcEmptyTrash)`
    cursor: pointer;
`

export const Check = styled(FcCheckmark)`
    cursor: pointer;
`