import PartnershipSlider from "../../../Slider/PartnershipSlider";
import {useState, useEffect} from "react";
import axiosGet from "../../../../frontend/helpers/axiosGet";



const PartnershipSection = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axiosGet('/api/partners')
            .then(res => {
                setData(
                    res.data.map(d => ({
                        name:  d.name,
                        designation: d.designation,
                        image: d.image,
                        companyLogo: d.company_logo,
                        text: d.text
                    }))
                )
            })
            .catch(err => setData([]))
    }, [])


    return (
        <div className={'bg-black'}>
            <div className={'pt-20'}>
                <h2 className={'text-gray-200 pb-10 font-medium text-center text-lg md:text-2xl font-typoSlab'}>
                        Partnership 
                    <span className={'ml-1 text-primary font-bold border-b-2 border-primary'}>
                        Program
                    </span>
                </h2>
            </div>
            <div className={'bg-sectionBG px-10'}>
                <div className={'py-8'}>
                    <PartnershipSlider data={data} />
                </div>
            </div>
            
            
        </div>
    );
}

export default PartnershipSection;
