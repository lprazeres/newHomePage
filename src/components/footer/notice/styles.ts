import styled from "styled-components";

export const NoticeFooterContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;

`;

export const NoticeFooterArea = styled.div`
display: flex;
align-items: center;
gap: 1rem;
width: 30%;

h1{
    font-size: 1.5rem;
}
h2{
    font-size: 1.1rem;
    font-weight: bold;
    color: ${props => props.theme['gray-900']};
}
p{
    font-size: 0.9rem;
}
img{
    height: 150px;

    &:hover{
        opacity: 0.2;
    }
}
`;
export const NoticeFooterContent = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
`;