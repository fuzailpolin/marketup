import AdminLayout from "../../../layouts/AdminLayout";
import {useEffect, useState, useRef} from "react";
import axiosGet from "../../../frontend/helpers/axiosGet";
import axiosDelete from "../../../frontend/helpers/axiosDelete";
import Modal from 'react-modal'
import {BiLoaderCircle} from 'react-icons/bi';
import {Image, Transformation} from "cloudinary-react";


const Teams = () => {
    const [contacts, setContacts] = useState(null)


    const [deleteModal, setDeleteModal] = useState({
        show: false,
        deleteId: null,
        loading: false
    })

    Modal.setAppElement('#__next');


    const getAllContacts = async () => {
        try {
            const allContacts = await axiosGet('/api/contact')
            setContacts(allContacts.data)
        } catch (e) {
            setContacts([])
        }
    }

    const deleteTeam = (e) => {
        if (deleteModal.loading) {
            return
        }

        setDeleteModal({
            ...deleteModal, loading: true
        });
        axiosDelete('/api/contact/delete/' + deleteModal.deleteId)
            .then(res => {

                setDeleteModal({
                    show: false,
                    deleteId: null,
                    loading: false
                })
                getAllContacts()
            })
            .catch(err => {

                setDeleteModal({
                    show: false,
                    deleteId: null,
                    loading: false
                })
                getAllContacts()
            })
    }

    useEffect(() => {

        getAllContacts()

    }, [])

    return (
        <AdminLayout>
            <h2 className={'text-center text-gray-700 text-poppins text-lg text-bold pb-5'}>Dashboard / Contacts</h2>


            {/* delete modal */}
            <Modal isOpen={deleteModal.show} onRequestClose={() => deleteModal.loading == false && setDeleteModal({
                show: false,
                deleteId: null,
                loading: false
            })}
                   className={'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg bg-white p-4 border-0 rounded'}>
                <h2 className={'px-2 text-gray-800 pb-2 text-base font-bold'}>Are you sure want to delete?</h2>
                <div className={'flex justify-center py-3'}>
                    <button onClick={deleteTeam}
                            className={deleteModal.loading ? 'py-1 mr-2 px-3 focus:outline-none rounded bg-red-600 text-black text-black text-center bg-gray-500 text-white' : 'py-1 mr-2 px-3 focus:outline-none rounded bg-red-600 text-black text-black text-center bg-red-600 text-black'}>
                        {deleteModal.loading ?
                            (<span>Loading <BiLoaderCircle className={'spinner inline-block'}/> </span>)
                            :
                            'Yes'
                        }
                    </button>
                    {
                        deleteModal.loading == false && <button
                            onClick={() => deleteModal.loading == false && setDeleteModal({
                                show: false,
                                deleteId: null,
                                loading: false
                            })}
                            className={'py-1 px-3 focus:outline-none rounded bg-gray-600 text-white text-center'}>No</button>
                    }

                </div>
            </Modal>



            {/*display section start*/}

            <div className="bg-gray-700 pt-4 pb-8 mb-8">

                {
                    contacts?.length ?
                        contacts.map(contact => {
                            return (
                                <div key={contact._id} className={'m-1 bg-gray-500 rounded'}>
                                    <div className="p-4">
                                        <p className="text-sm font-bold tracking-wider">{new Date(contact.created_at).toDateString()}</p>
                                        <p className="text-sm font-bold tracking-wider">{new Date(contact.created_at).toTimeString()}</p>
                                        <br/>
                                        <p className={'text-lg'}><span className="font-bold ">Name :</span> {contact?.name}</p>
                                        <p className={'text-lg'}><span className="font-bold ">Email :</span> {contact?.email || 'no mail!'}</p>
                                        <p className={'text-lg'}><span className="font-bold ">Phone :</span> {contact?.phone || 'no phone!'}</p>
                                        <p className={'text-lg'}><span className="font-bold ">Subject :</span> {contact?.subject || 'no subject!'}</p>
                                        <p className={'text-lg'}><span className="font-bold ">Message :</span> {contact?.message || 'no content!'}</p>
                                    </div>

                                    <div className={'flex py-3'}>
                                        <button onClick={() => setDeleteModal({
                                            show: true,
                                            deleteId: contact._id,
                                            loading: false
                                        })}
                                                className={'py-1 px-8 mx-2 focus:outline-none rounded bg-red-500 text-black text-center'}>Delete
                                        </button>
                                    </div>


                                </div>
                            )
                        })
                        :

                        contacts?.length == 0 ? (<div className="col-span-12 text-center py-10 text-xl font-bold text-white">No Data !</div>)  : null


                }
            </div>
        </AdminLayout>
    )
}


export default Teams
