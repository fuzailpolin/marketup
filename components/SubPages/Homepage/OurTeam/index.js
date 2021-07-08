import TeamCard from "../../../Cards/TeamCard";

const team = [
    {
        name: 'Masuma Aziz',
        designation: 'CSO',
        image: '/Images/temp/temp3.jpg'
    },
    {
        name: 'Nasif Zuhayer Auritro',
        designation: 'COO',
        image: '/Images/temp/temp2.jpg'
    },
    {
        name: 'Tanvir Ahmed (Teyder)',
        designation: 'CMO',
        image: '/Images/temp/temp4.jpg'
    }
]

const OurTeam = () => {
    return (
        <div className={'container mx-auto my-20'}>
            <div>
                <h2 className={'text-secondary pb-5 font-medium text-center text-lg md:text-2xl font-mons'}>
                    Our
                    <span className={'ml-1 text-primary font-bold border-b-2 border-primary'}>
                        Team
                    </span>
                </h2>
            </div>
            <div className={'grid grid-cols-12'}>
                <div className={'col-span-0 md:col-span-3 lg:col-span-4'}></div>
                <div className={'col-span-12 md:col-span-6 lg:col-span-4 mx-5'}>
                    <TeamCard 
                        name={'Faisal Rahim Omi'}
                        designation={'CEO'}
                        image={'/Images/temp/temp1.jpg'}
                    />
                </div>
                <div className={'lg:col-span-4 col-span-0 md:col-span-3 '}></div>
            </div>
            <div className={'grid grid-cols-12'}>
                {
                    team.map((item, index)=>{
                        return (
                            <div key={index} className={'col-span-12 md:col-span-6 lg:col-span-4 mx-5'}>
                                <TeamCard {...item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default OurTeam;