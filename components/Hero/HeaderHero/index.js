import style from './style.module.css'

const HeaderHero = ({text, image, height=0}) => {
    return (
        <div className={`${style['overlayMaker'] } w-full relative z-0 h-vh-30 md:h-vh-70`}>
            <img src={image} className={'w-full h-full object-cover'}  alt='not found' />
            <p className={`${style['hero-div']} uppercase z-10`}>{text}</p>
        </div>
    )
}

export default HeaderHero;
