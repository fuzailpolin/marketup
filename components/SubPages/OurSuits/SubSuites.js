import { SuitImage } from "../../";
import SubSuitDescription from "./SubSuitDescription";

const SubSuites = ({ roomImage, roomFacilities, orientation }) => {
    return (
        <div
            className={`flex md:items-center ${
                orientation === "LR" ? "flex-col" : "flex-col-reverse"
            }  md:flex-row gap-4 px-5 md:px-20 py-10 md:py-15 font-suit`}
        >
            {orientation === "LR" ? (
                <>
                    <SuitImage image={roomImage} />
                    <SubSuitDescription
                        facilities={roomFacilities}
                        orientation={orientation}
                    />
                </>
            ) : (
                <>
                    <SubSuitDescription
                        facilities={roomFacilities}
                        orientation={orientation}
                    />
                    <SuitImage image={roomImage} />
                </>
            )}
        </div>
    );
};

export default SubSuites;
