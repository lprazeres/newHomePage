import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { Aside } from "../../components/aside";
import { Footer } from "../../components/footer";
import { HomeContainer, MainContainer } from "./styles";


export function Home() {
    return (
        <HomeContainer>
            <Header />
            <MainContainer>
                <Main />
                <Aside />
            </MainContainer>
            <Footer />
        </HomeContainer>
    )

}