import styled from "styled-components";


export const Container = styled.div`
    background-color: #212528;
    width: 100%;
    height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    p {
        color: #ffffff;
        opacity: 0.5;
        font-size: 10px;
    }
`;

const Footer = () => {
    return (
        <Container>
            <p>by: Walison Lima</p>
            <p>v1.0.0</p>
        </Container>
    )
}


export default Footer;