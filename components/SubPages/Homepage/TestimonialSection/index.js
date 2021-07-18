import TestimonialSlider from "../../../Slider/TestimonialSlider";
import { useState, useEffect } from "react";
import axiosGet from "../../../../frontend/helpers/axiosGet";


const TestimonialSection = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axiosGet('/api/testimonials')
            .then(res => setData(
                res.data.map(d => ({
                    text: d.text,
                    name: d.name,
                    designation :d.designation,
                    company: d.company
                }))
            ))
    }, [])

    return (
        <div className={'bg-black'}>
            <div 
                style={{
                    backgroundImage: 'url(/Images/homepage/clientFeedbackBG.png)', 
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }} 
            >
                <div className={'mx-12 p-5'}>
                    <TestimonialSlider data={data} />
                </div>
            </div>
        </div>
    );
}

export default TestimonialSection;
