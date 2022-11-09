import { NoticeArea } from "./styles";


export function Notice() {
    return (
        <>
            <NoticeArea>
                <h2>Hydrogen VS Eletric Cars</h2>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                <hr />
            </NoticeArea>
            <NoticeArea>
                <h2>The Downsides of Al Artistry</h2>
                <p>What are the possible adverse effects of on-demand Al image generation?</p>
                <hr />
            </NoticeArea>
            <NoticeArea>
                <h2>Is VC Funding Drying Up?</h2>
                <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                <hr />
            </NoticeArea>
        </>
    )
}