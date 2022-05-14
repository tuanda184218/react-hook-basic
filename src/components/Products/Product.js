import "./Product.scss"
import snicker1 from "../../assets/images/snicker1.png";
import snicker2 from "../../assets/images/snicker2.png";
import snicker3 from "../../assets/images/snicker3.png";
import snicker4 from "../../assets/images/snicker4.png";
import { useState } from "react";
import Lightbox from 'react-image-lightbox';

const images = [
    snicker1,
    snicker2,
    snicker3,
    snicker4
];

const Product = () => {

    const [currentLargeImage, setCurrentLargeImage] = useState(snicker1);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const handleClickPreviewImg = () => {

        let index = images.findIndex(item => item === currentLargeImage);
        setPhotoIndex(index);
        setIsOpen(true);

    }

    return (
        <div>
            <div className="product-container">
                <div className="content-left">
                    <div className="img-up">
                        <img src={currentLargeImage} onClick={() => handleClickPreviewImg()} />
                    </div>
                    <div className="img-down">
                        <div className="img-small">
                            <img src={snicker2} onClick={() => setCurrentLargeImage(snicker2)} className={currentLargeImage === snicker2 ? "active" : ""} />
                        </div>
                        <div className="img-small">
                            <img src={snicker3} onClick={() => setCurrentLargeImage(snicker3)} className={currentLargeImage === snicker3 ? "active" : ""} />
                        </div>
                        <div className="img-small">
                            <img src={snicker4} onClick={() => setCurrentLargeImage(snicker4)} className={currentLargeImage === snicker4 ? "active" : ""} />
                        </div>
                        <div className="img-small">
                            <img src={snicker1} onClick={() => setCurrentLargeImage(snicker1)} className={currentLargeImage === snicker1 ? "active" : ""} />
                        </div>
                    </div>


                </div>
                <div className="content-right">
                    <div className="title">Giày chạy bộ nam NEW BALANCE Performance M860E11</div>
                    <div className="price">1.478.000</div>
                    <div className="size">Size: 30</div>
                    <div className="action">
                        <label className="quantity">Số lượng</label>
                        <input type="number" min={1} value={1} />
                        <button className="buy">Chọn mua</button>
                    </div>

                </div>
            </div>

            {
                isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                        animationDuration={500}
                    />
                )
            }
        </div>
    )
}

export default Product;