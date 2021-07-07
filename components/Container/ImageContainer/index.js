import style from  "./style.module.css";
import Link from 'next/link'

const ImageContainer = ({image, link}) => {
    return (
        <div className={'my-3'}>
            <div>
                <div className={`${style['main']} overflow-hidden grid items-center rounded-md`}>
                    <div className={`${style['button-container']} grid place-self-center`}>
                    <Link href={link ? link : '#'}>
                        <p className={'py-3 px-8 rounded-sm bg-primary text-white text-base font-primary font-bold cursor-pointer'}>Preview</p>
                    </Link>
                    </div>
                    <div className={'bg-black m-3'}>
                        <img className={`${style["image"]} object-cover transform duration-700`}  src={image} alt='not found' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageContainer;