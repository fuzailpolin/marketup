import style from './style.module.css'

const HeroCardWithChildren = ({children, image}) => {
    return (
        <div className={`${style['overlayMaker'] } w-full relative z-0`}>
            <img src={image} className={'w-full h-full'} alt='not found' />
            <div className={`${style['hero-div']} z-10`}>{children}</div>
        </div>
    )
}

export default HeroCardWithChildren;
