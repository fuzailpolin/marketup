const HeroSection = () => {
    return (
        <div className={'relative z-0'}>
            <img className={'w-full h-25vh md:h-70vh'} src="/Images/Website-front-cover-02.png" alt="Home Hero"/>
            <img src="/Images/logo2.gif" alt="Logo" className={'absolute -bottom-0 h-4/5 left-1/2 transform -translate-x-1/2'}/>
        </div>
    )
}


export default HeroSection
