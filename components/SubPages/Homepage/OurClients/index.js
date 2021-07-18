import LogoSlider from '../../../Slider/LogoSlider';
import {useState, useEffect} from "react";
import axiosGet from "../../../../frontend/helpers/axiosGet";

const OurClients = () => {
    const [logos, setLogos] = useState([])

    useEffect(() => {
        axiosGet('/api/clients')
            .then(res => setLogos(res.data.map(l => l.image)))
            .catch(err => setLogos([]))
    }, [])

    return (
        <div className={'bg-black pb-10'}>
        <div className={'container mx-auto pt-20'} id={'client'}>
            <div>
                <h2 className={'text-gray-200 pb-5 font-medium text-center text-lg md:text-2xl font-typoSlab'}>
                    Our
                    <span className={'ml-1 text-primary font-bold border-b-2 border-primary'}>
                        Clients
                    </span>
                </h2>
            </div>
            <div className={'mt-10'}>
                <LogoSlider logos={logos} />
            </div>
            
        </div>
        </div>
    );
}

export default OurClients;
