import AdminLayout from "../../../layouts/AdminLayout";
import {useEffect, useState, useRef} from "react";
import axiosGet from "../../../frontend/helpers/axiosGet";
import axiosDelete from "../../../frontend/helpers/axiosDelete";
import Modal from 'react-modal'
import {BiLoaderCircle} from 'react-icons/bi';
import axiosPost from "../../../frontend/helpers/axiosPost";
import {Image, Transformation} from "cloudinary-react";


const Teams = () => {
    const [clients, setClients] = useState(null)

    const createForm = useRef(null)

    const [createTeamForm, setCrateTeamForm] = useState({
        image: '',
        loading: false,
        show: false,
        errors: {}
    })

    const openCreateModal = () => {
        createForm?.current?.reset()
        setCrateTeamForm({
            image: '',
            loading: false,
            show: true,
            errors: {}
        })
    }

    const changeCreateTeamFormValue = (e) => {
        if (e.target.type == 'file') {
            setCrateTeamForm({
                ...createTeamForm, [e.target.name]: e.target.files[0] || ''
            })
        }
    }
    const submitCreateTeamForm = () => {
        if (createTeamForm.loading) {
            return
        }

        setCrateTeamForm({
            ...createTeamForm,
            loading: true,
            errors: {}
        })
        const form = new FormData();
        form.append('image', createTeamForm.image || '')

        axiosPost('/api/clients/create', form, {})
            .then(response => {
                setClients([
                    ...clients,
                    response.data
                ])
                setCrateTeamForm({
                    setCrateTeamForm,
                    loading: false,
                    show: false
                })

            })
            .catch(err => {
                setCrateTeamForm({
                    ...createTeamForm, loading: false, errors: err.errors
                })
            })

    }


    const [deleteModal, setDeleteModal] = useState({
        show: false,
        deleteId: null,
        loading: false
    })

    Modal.setAppElement('#__next');


    const getAllClients = async () => {
        try {
            const allClients = await axiosGet('/api/clients')
            setClients(allClients.data)
        } catch (e) {
            setClients([])
        }
    }

    const deleteTeam = (e) => {
        if (deleteModal.loading) {
            return
        }

        setDeleteModal({
            ...deleteModal, loading: true
        });
        axiosDelete('/api/clients/delete/' + deleteModal.deleteId)
            .then(res => {

                setDeleteModal({
                    show: false,
                    deleteId: null,
                    loading: false
                })
                getAllClients()
            })
            .catch(err => {

                setDeleteModal({
                    show: false,
                    deleteId: null,
                    loading: false
                })
                getAllClients()
            })
    }

    useEffect(() => {

        getAllClients()

    }, [])

    return (
        <AdminLayout>
            <h2 className={'text-center text-gray-700 text-poppins text-lg text-bold pb-5'}>Dashboard / Clients</h2>


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

            {/* create modal */}


            <Modal isOpen={createTeamForm.show}
                   onRequestClose={() => createTeamForm.loading == false && setCrateTeamForm({
                       ...createTeamForm,
                       errors: {},
                       show: false
                   })}
                   className={'absolute top-1/2 left-1/2 transform -translate-x-1/2 w-1/3 -translate-y-1/2 shadow-lg bg-white p-4 border-0 rounded'}>
                <h2 className={'px-2 text-gray-800 pb-2 text-base font-bold text-center'}>Create New Member!</h2>
                <form ref={createForm}>

                    <div className="py-2">
                        <label className={'block text-gray-600'}>Image:</label>
                        <input onChange={changeCreateTeamFormValue} placeholder={'Image'} name={'image'} type="file"
                               accept={'image/png, image/jpg, image/jpeg'}
                               className={'block w-full rounded border-gray-800 px-1 py-1 border focus:outline-none'}/>
                        <p className={'text-sm text-red-600 pl-1'}>{createTeamForm.errors?.image}</p>
                    </div>

                </form>

                <div className={'flex justify-center py-3'}>
                    <button
                        onClick={submitCreateTeamForm}
                        className={createTeamForm.loading ? 'py-1 mr-2 px-3 focus:outline-none rounded bg-red-600 text-black text-black text-center bg-gray-500 text-white' : 'py-1 mr-2 px-3 focus:outline-none rounded bg-red-600 text-black text-white text-center bg-blue-600 text-black'}>
                        {createTeamForm.loading ?
                            (<span>Loading <BiLoaderCircle className={'spinner inline-block'}/> </span>)
                            :
                            'Submit'
                        }
                    </button>
                    {
                        createTeamForm.loading == false && <button
                            onClick={() => createTeamForm.loading == false && setCrateTeamForm({
                                ...createTeamForm,
                                show: false
                            })}
                            className={'py-1 px-3 focus:outline-none rounded bg-gray-600 text-white text-center'}>Cancel</button>
                    }

                </div>
            </Modal>

            {/*display section start*/}

            <div className="bg-gray-700 pb-8 mb-8">
                <div className="w-full py-5">
                    <button
                        onClick={openCreateModal}
                        className={'py-1 ml-4 px-3 shadow-lg focus:outline-none rounded text-black  text-center bg-white text-blue-500'}>Add
                        New Client
                    </button>
                </div>
                <br/>
                {
                    clients?.length ?
                        clients.map(client => {
                            return (
                                <div key={client._id} className="mx-4 md:inline-block">
                                    <div className={'md:inline-block'}>
                                        <div className={'px-3'}>
                                            <Image className={'w-full'} cloudName="dmkch2bnk" publicId={client.image}>
                                                <Transformation height="80" gravity="south" crop="fill"/>
                                            </Image>
                                        </div>

                                        <div className={'flex justify-around py-3'}>
                                            <button onClick={() => setDeleteModal({
                                                show: true,
                                                deleteId: client._id,
                                                loading: false
                                            })}
                                                    className={'py-1 w-1/2 mx-2 focus:outline-none rounded bg-red-500 text-black text-center'}>Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :

                        clients?.length == 0 ? (
                            <div className="col-span-12 text-center py-10 text-xl font-bold text-white">No Data
                                !</div>) : null


                }
            </div>
        </AdminLayout>
    )
}


export default Teams
