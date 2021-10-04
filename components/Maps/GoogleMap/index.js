const index = () => {
  return (
    <div className={"bg-black"}>
      <iframe
        className={"w-full h-60 md:h-96"}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.4462437193615!2d90.40898061498099!3d23.731461284598684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9dfc42bdcf1%3A0xd1c0f1754718088!2smarketUP!5e0!3m2!1sen!2sbd!4v1632203802617!5m2!1sen!2sbd"
        allowFullScreen=""
        style={{ filter: "invert(100%)" }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default index;
