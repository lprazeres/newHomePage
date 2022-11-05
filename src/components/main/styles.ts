import styled from "styled-components";

export const MainArea = styled.div`
width: 65%;

display: flex;
flex-direction: column;
gap: 1rem;

h1{
    color: ${props => props.theme['gray-900']};
}

button{
    background-color: ${props => props.theme['gray-900']};
    color:${props => props.theme['gray-300']};
    padding: 5px 20px;
    border-radius: 5px;
    border: 0;
    &:hover{
        background-color: ${props => props.theme['red-500']};
        border: 0;
    }
}
`;

export const MainTextArea = styled.div`
display: flex;
gap: 2rem;
align-items: center;

`;

export const MainLinkArea = styled.div`
width: 75%;
`;