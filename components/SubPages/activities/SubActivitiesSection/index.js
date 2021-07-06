import React from 'react';
import UniversalSection from '../UniversalSection';


const data = [
    {
        title: 'SPA & SAUANA HAMMAM',
        description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.`,
        benifits: ['ANXIETY', 'STRESS', 'SOFT TISSUE INJURIES', 'HIGH BLOOD PRESSURE', 'INSOMNIA'],
        images: [
            {link: '/Images/activities/img4.jpg'},
            {link: '/Images/activities/img3.jpg'},
            {link: '/Images/activities/img2.jpg'},
            {link: '/Images/activities/img1.jpg'},
            {link: '/Images/activities/img5.jpg'}
        ]
    },
    {
        title: 'AMAZING WATER SPORTS',
        description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.`,
        benifits: ['WINDSURFING', 'JET SKIING', 'WAKE BOARDING', 'WATER SKIING', 'TRIATHLON', 'SKIMBOARDING', 'BODYBOARDING', 'WATERPOLO', 'RAFTING'],
        images: [
            {link: '/Images/activities/img1.jpg'},
            {link: '/Images/activities/img2.jpg'},
            {link: '/Images/activities/img3.jpg'},
            {link: '/Images/activities/img4.jpg'},
            {link: '/Images/activities/img5.jpg'}
        ]
    },
    {
        title: 'NIGHT DANCE SHOW',
        description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.`,
        benifits: [],
        images: [
            {link: '/Images/activities/img2.jpg'},
            {link: '/Images/activities/img4.jpg'},
            {link: '/Images/activities/img3.jpg'},
            {link: '/Images/activities/img1.jpg'},
            {link: '/Images/activities/img5.jpg'}
        ]
    },
    {
        title: 'SCUBA',
        description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.`,
        benifits: [],
        images: [
            {link: '/Images/activities/img5.jpg'},
            {link: '/Images/activities/img2.jpg'},
            {link: '/Images/activities/img3.jpg'},
            {link: '/Images/activities/img1.jpg'},
            {link: '/Images/activities/img4.jpg'}
        ]
    }
]

const SubActivitiesSection = () => {
    return (
        <div>
            <UniversalSection data={data} textLeft={0} />
        </div>
    )
}

export default SubActivitiesSection;
