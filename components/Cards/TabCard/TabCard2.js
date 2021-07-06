import style from "./TabCard.module.css";
const TabCard2 = ({ Logo, title }) => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className={"col-span-12 md:col-span-6 mr-2 p-2"}>
          <img src={Logo} className={style["tab-card-logo-two"]} />
        </div>
        <div className={"col-span-12 md:col-span-6 mt-2"}>
          <p className={style["tab-card-title-two"]}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TabCard2;
