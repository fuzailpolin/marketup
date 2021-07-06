import React from "react";
import style from "./SubViewSuitesSection.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import "react-dropdown/style.css";
import CheckAvailabilityForm from "../../../CheckAvailabilityForm";
import { useRouter } from "next/router";
import { suite_options } from "../../../../Assets/Data/FormData";


const SubViewSuitesSection = () => {
  const router = useRouter();

  return (
    <div className={style["SubViewSuites-wrapper"]}>
      {/* content section of the component */}

      <div className={style["SubViewSuites-content-wrapper"]}>
        <p className={style["SubViewSuites-content-text"]}>
          Our extended stay/transitional housing booking options are: nightly,
          weekly, bi-weekly, and month to month. We accept all supportive
          payment programs.
        </p>
        <button
          onClick={() => router.push("/our-suites")}
          className={style["SubViewSuites-content-button"]}
        >
          view our suites <FaLongArrowAltRight className="inline-block" />
        </button>
      </div>

      {/* Form section of the component */}

      <div className={style["SubViewSuites-form-wrapper"]}>
        {/* title of the form */}

        <CheckAvailabilityForm
          suite_options={suite_options}
          calendarClass={style["SubViewSuites-form-calendarClass"]}
        />
      </div>
    </div>
  );
};

export default SubViewSuitesSection;
