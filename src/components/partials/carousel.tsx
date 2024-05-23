
import Carousel from "nuka-carousel"
export default function Gallery() {
    return (
        <>
            <Carousel autoplay={true} withoutControls={true} wrapAround={true}>
                <img src="/images/image1.png" alt="Home" className="w-full md:rounded-md"/>
                <img src="/images/image2.png" alt="Home" className="w-full md:rounded-md"/>
                <img src="/images/image3.png" alt="Home" className="w-full md:rounded-md"/>
            </Carousel>
        </>
    )
}
