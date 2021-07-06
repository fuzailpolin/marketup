import Link from "next/link";

const SuitPriceButton = ({ singleSuitData }) => {
  return (
    <>
      <div
        className={
          "w-full grid place-items-center py-2 border border-black mx-2 my-4"
        }
      >
        <div>
          <h1 className={"font-bold text-3xl"}>${singleSuitData?.price}</h1>
        </div>
        <div>
          <p className={"font-semibold uppercase"}>single Price</p>
        </div>
      </div>

      <Link href={`booking/${singleSuitData?.slug}`}>
        <a
          className={
            "w-full grid place-items-center py-4 border border-black font-semibold text-base mx-2 uppercase bg-white hover:bg-black text-black hover:text-white transition duration-100"
          }
        >
          Book Now
        </a>
      </Link>
    </>
  );
};

export default SuitPriceButton;
