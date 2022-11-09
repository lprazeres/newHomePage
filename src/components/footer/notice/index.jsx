import { NoticeFooterContainer, NoticeFooterArea, NoticeFooterContent } from "./styles";
import NoticePhotoOne from '../../../assets/image-retro-pcs.jpg';
import NoticePhotoTwo from '../../../assets/image-top-laptops.jpg';
import NoticePhotoThrwee from '../../../assets/image-gaming-growth.jpg';

export function NoticeFooter() {
    return (
        <NoticeFooterContainer>
            <NoticeFooterArea>
                <div>
                    <img src={NoticePhotoOne} />
                </div>
                <NoticeFooterContent>
                    <h1>01</h1>
                    <h2>Reviving Retro PCs</h2>
                    <p>What happens when old PCs are given modern upgrades?</p>
                </NoticeFooterContent>
            </NoticeFooterArea>

            <NoticeFooterArea>
                <div>
                    <img src={NoticePhotoTwo} />
                </div>
                <NoticeFooterContent>
                    <h1>02</h1>
                    <h2>Top 10 laptops of 2022</h2>
                    <p>Our best picks for various needs and budgets.</p>
                </NoticeFooterContent>
            </NoticeFooterArea>

            <NoticeFooterArea>
                <div>
                    <img src={NoticePhotoThrwee} />
                </div>
                <NoticeFooterContent>
                    <h1>03</h1>
                    <h2>The Growth of Gaming</h2>
                    <p>How the pandemic has sparked fresh opportunities.</p>
                </NoticeFooterContent>
            </NoticeFooterArea>

        </NoticeFooterContainer>
    )
}