import TeamCard from "../../../Cards/TeamCard";
import TeamSlider from "../../../Slider/TeamSlider";
import {useState, useEffect} from "react";
import axiosGet from "../../../../frontend/helpers/axiosGet";



const OurTeam = () => {
    const [team, setTeam] = useState([])

    useEffect(() => {
        axiosGet('/api/team')
            .then(res => {
                setTeam(res.data);
            })
            .catch(err => setTeam([]))
    }, [])

    return (
        <div className={'bg-black'}>
            <div className={'container mx-auto pt-20'} id={'team'}>
                <div>
                    <h2 className={'text-gray-100 pb-5 font-medium text-center text-lg md:text-2xl font-typoSlab'}>
                        Our
                        <span className={'ml-1 text-primary font-bold border-b-2 border-primary'}>
                            Team
                        </span>
                    </h2>
                </div>
                <div className={'grid grid-cols-12'}>
                    <div className={'col-span-0 md:col-span-3 lg:col-span-4'}></div>
                    <div className={'col-span-12 md:col-span-6 lg:col-span-4 mx-5'}>
                        {
                            team?.map((item, key)=>{
                                if(item.designation.toUpperCase() === 'CEO' || item.designation.toUpperCase() === 'CHIEF EXECUTIVE OFFICER'){
                                    return (<TeamCard 
                                        key = {key}
                                        name={item.name}
                                        designation={item.designation}
                                        image={item.image}
                                    /> )
                                }
                            })
                        }
                    </div>
                    <div className={'lg:col-span-4 col-span-0 md:col-span-3 '}></div>
                </div>
                <div className={'mx-10'}>
                    <TeamSlider team={team} />
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
