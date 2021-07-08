import style from  "./style.module.css";
import { useState } from "react";
import Modal from 'react-modal';
import { RiCloseCircleFill } from "react-icons/ri";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      maxHeight: '85vh',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


const ImageContainer = ({previewImg, images}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    return (
        <div className={'my-3'}>
            <div>
                <div className={`${style['main']} overflow-hidden grid items-center rounded-md`}>
                    <div className={`${style['button-container']} grid place-self-center`}>
                    <p onClick={openModal} 
                        className={modalIsOpen ? 'hidden' : 'py-3 px-8 rounded-sm bg-primary text-white text-base font-primary font-bold cursor-pointer'}
                    >
                        Preview
                    </p>
                    </div>
                    <div className={'bg-black m-3 rounded-sm overflow-hidden'}>
                        <img className={`${style["image"]} object-cover transform duration-700`}  src={previewImg} alt='not found' />
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Image modal"
            >
                <div>
                    <div className="flex justify-end">
                        <RiCloseCircleFill onClick={closeModal} className="w-6 h-6 text-primary cursor-pointer -mt-4 -mr-2" />
                    </div>
                    <div className={'grid grid-cols-12'}>
                        {images.map((item, index)=>{
                            return(
                                <div key={index} className={'col-span-12 md:col-span-6 lg:col-span-4 grid'}>
                                    <img className={'h-30vh w-full p-3 object-cover'} src={item.link} alt='not found' />
                                </div>
                            ) 
                        })}
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ImageContainer;