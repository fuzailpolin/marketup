import SubSingleSuitLeft from "./SubSingleSuitLeft";
import SubSingleSuitRight from "./SubSingleSuitRight";

const SubSIngleSuit = ({ singleSuitData }) => {
  return (
    <div className="grid grid-cols-12 w-5/6 md:w-4/5 sm:w-full mx-auto gap-7 md:px-10 sm:px-5 py-10 ">
      <SubSingleSuitLeft singleSuitData={singleSuitData} />
      <SubSingleSuitRight singleSuitData={singleSuitData} />
    </div>
  );
};

export default SubSIngleSuit;
