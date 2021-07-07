import style from './ServiceCard.module.css'

const ServiceCard = ({title, children, text}) => {
    return (
        <div className={style['service-card']}>
            <div className={`flex justify-center ${style['service-section-icon']}`}>
                {
                    children
                }

            </div>

            <div className={style['service-card-content']}>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>

        </div>
    )
}


export default ServiceCard
