const index = () => {
    return (
        <div className={'bg-black pt-8'}>
                <iframe className={'w-full h-60 md:h-96'}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14593.529954832293!2d90.40427345887082!3d23.876051964805423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1625727000429!5m2!1sen!2sbd"
                    allowFullScreen="" style={{filter: 'invert(100%)'}} loading="lazy"></iframe>
        </div>
    );
}

export default index;