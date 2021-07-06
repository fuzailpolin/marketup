import React, {useState} from "react";
import {TabButton, TabCard} from "../../";
import {TabcardContent} from "../../../Assets/Data/TabData";

const SubTabSection = () => {
    const [tabSlected, setTabSlected] = useState("property");

    const handleClick = (text) => {
        setTabSlected(text);
    };

    return (
        <div>
            <div
                className={
                    "py-7 flex flex-col md:flex-row  justify-center items-center"
                }
            >
                <TabButton
                    icon={true}
                    btnText={"PROPERTY INFORMATION"}
                    slug={"property"}
                    handleClick={handleClick}
                    active={tabSlected === "property" ? true : false}
                />
                <TabButton
                    icon={true}
                    btnText={"USEFUL INFORMATION"}
                    slug={"useful"}
                    handleClick={handleClick}
                    active={tabSlected === "useful" ? true : false}
                />
            </div>
            <div
                className="grid w-9/12 md:w-4/5 sm:w-full mx-auto md:grid-cols-3 sm:grid-cols-2 gap-7 md:px-10 sm:px-5 py-10">
                {TabcardContent.filter(
                    (item) => item.slug.toLowerCase() === tabSlected.toLowerCase()
                ).map((content, index) => (
                    <div key={index} className={"px-3 mb-8 md:mb-16"}>
                        <TabCard {...content} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubTabSection;
