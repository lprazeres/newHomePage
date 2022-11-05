import { MainArea, MainLinkArea, MainTextArea } from "./styles";
import MainNoticePhoto from '../../assets/image-web-3-desktop.jpg';

export function Main() {
    return (

        <MainArea>
            <img src={MainNoticePhoto} />
            <MainTextArea>
                <h1>The Bright Future of Web 3.0?</h1>
                <MainLinkArea>
                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfitiling its promise?</p>
                    <button>Read More</button>
                </MainLinkArea>
            </MainTextArea>
        </MainArea>



    )
}