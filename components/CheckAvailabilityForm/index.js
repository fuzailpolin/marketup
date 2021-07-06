import React, { useState, useEffect, useRef } from "react";
import style from "./style.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DropdownSelector from "./DropdownSelector";
import optionsGenerator from "./optionsGenerator";
import formateDate from "./formateDate";
import {location_options} from "../../Assets/Data/FormData"


const CheckAvailabilityForm = ({ suite_options, calendarClass }) => {
  const [value, setValue] = useState([
    formateDate(new Date()),
    formateDate(new Date()),
  ]);
  const [suite, setSuite] = useState(null);
  const [bed,setBed] =useState(0);
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [showCalendar, setShowCalendar] = useState(false);
  const [location,setLocation] = useState(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const changeValue = (e) => {
    setValue(() => {
      return [formateDate(e[0]), formateDate(e[1])];
    });
    setShowCalendar(false);
  };

  const filtered_options = (type) => {
    const options = suite_options?.map((item) => {
      if (item.value === suite) {
        return optionsGenerator(
         type === "adult"
            ? item.max_adult
            : type === "children"
            ? item.max_children
            : null
        );
      }
    });

    const final_options = options?.filter((item) => item !== undefined);
    return suite
      ? final_options[0]
      : [{ value: 0, label: "Please select the suite first" }];
  };

  

  const filter_bed = () =>{

    const bed = suite_options?.filter((item) => item.value === suite);
    return suite ? bed[0]?.beds :  [{ value: 0, label: "Please select the suite first" }];
  }

  const filter_properties = () =>{
    const property = location_options.find((item)=>item.value===location)
    return location?property.property : [{ value: 0, label: "Please select the location first" }];;
  }

  

  
  return (
    <div ref={wrapperRef}>
      <p className={style["SubViewSuites-form-title"]}>
        Check the available days
      </p>

      <DropdownSelector
        title="Location"
        placeholder="Please Select the Location"
        options={location_options}
        onChange={(e)=>setLocation(e.value)}
      />

      <DropdownSelector
        title="Properties"
        placeholder="Please Select the Property"
        options={location_options}
        options={filter_properties()}
      />

      {/* checkin and checkout field */}

      <div className={style["SubViewSuites-form-datePicker-wrapper"]}>
        {/* Check in date pick field */}

        <div
          className={style["SubViewSuites-form-datePicker-checkin"]}
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <p>Check In</p>
          <input
            type="text"
            label="check in"
            className={style["SubViewSuites-form-datePicker-checkin-input"]}
            onClick={() => setShowCalendar(!showCalendar)}
            value={value[0]}
            readOnly
          />
        </div>

        {/* Check out date pick field */}

        <div
          className={style["SubViewSuites-form-datePicker-checkout"]}
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <p>Check Out</p>
          <input
            type="text"
            label="check in"
            className={style["SubViewSuites-form-datePicker-checkout-input"]}
            onClick={() => setShowCalendar(!showCalendar)}
            value={value[1]}
            readOnly
          />
        </div>
      </div>

      {/* Select suite field */}

      {suite_options?.length && (
        <DropdownSelector
          title="Suites"
          options={suite_options}
          placeholder="please select Suite"
          onChange={(e) => setSuite(e.value)}
        />
      )}

      <DropdownSelector
        title="Bed(s)"
        options={filter_bed()}
        placeholder="please select Bed"
        onChange={(e) => setBed(e.value)}
      />

      {/* Select adult number field */}

      <DropdownSelector
        title="Adults"
        options={filtered_options("adult")}
        placeholder="Number of Adult(s)"
        onChange={(e) => setAdult(e.value)}
      />

      {/* Select children number field */}

      <DropdownSelector
        title="Children"
        options={filtered_options("children")}
        placeholder="Number of children(s)"
        onChange={(e) => setChildren(e.value)}
      />

      {/* calender component that opens when to pick date */}

      {showCalendar && (
        <Calendar
          selectRange
          onChange={changeValue}
          minDate={new Date()}
          className={calendarClass}
        />
      )}

      {/* availability button */}

      <button
        className={style["SubViewSuites-form-check-btn"]}
        onClick={() =>
          alert(`${value[0]} ${value[1]} ${suite} ${adult} ${children} ${bed}`)
        }
      >
        check availability
        <FaLongArrowAltRight
          className={style["SubViewSuites-form-check-btn-icon"]}
        />
      </button>
    </div>
  );
};

export default CheckAvailabilityForm;
