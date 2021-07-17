import AdminLayout from "../../../layouts/AdminLayout";
import {useEffect, useState, useRef} from "react";
import axiosGet from "../../../frontend/helpers/axiosGet";
import axiosDelete from "../../../frontend/helpers/axiosDelete";
import Modal from 'react-modal'
import {BiLoaderCircle} from 'react-icons/bi';
import axiosPost from "../../../frontend/helpers/axiosPost";
import OpeningsDetails from "../../../components/SubPages/CareerPage/CurrentOpenings/OpeningsDetails/OpeningsDetails";


const Teams = () => {
    const [careers, setCareers] = useState(null)

    const createForm = useRef(null)

    const [createTeamForm, setCrateTeamForm] = useState({
        position: '',
        vacancy: '',
        jobType: '',
        lastDate: '',
        fb: '',
        insta: '',
        loading: false,
        show: false,
        errors: {}
    })

    const openCreateModal = () => {
        createForm?.current?.reset()
        setCrateTeamForm({
            position: '',
            vacancy: '',
            jobType: '',
            lastDate: '',
            fb: '',
            insta: '',
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
        } else {
            setCrateTeamForm({
                ...createTeamForm, [e.target.name]: e.target.value
            })
        }
    }
    const submitCreateTeamForm = () => {
        if(createTeamForm.loading){
            return
        }

        setCrateTeamForm({
            ...createTeamForm,
            loading: true,
            errors: {}
        })
        const form = new FormData();
        form.append('position', createTeamForm.position || '')
        form.append('vacancy', createTeamForm.vacancy || '')
        form.append('jobType', createTeamForm.jobType || '')
        form.append('lastDate', createTeamForm.lastDate || '')
        form.append('fb', createTeamForm.fb || '')
        form.append('insta', createTeamForm.insta || '')

        axiosPost('/api/jobs/create', form, {})
            .then(response => {
                setCareers([
                    ...careers,
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


    const getAllCareers = async () => {
        try {
            const allCareers = await axiosGet('/api/jobs')
            setCareers(allCareers.data)
        } catch (e) {
            setCareers([])
        }
    }

    const deleteTeam = (e) => {
        if (deleteModal.loading) {
            return
        }

        setDeleteModal({
            ...deleteModal, loading: true
        });
        axiosDelete('/api/jobs/delete/' + deleteModal.deleteId)
            .then(res => {
                setCareers(careers.filter(c => c._id != deleteModal.deleteId))

                setDeleteModal({
                    show: false,
                    deleteId: null,
                    loading: false
                })

            })
            .catch(err => {

                setDeleteModal({
                    show: false,
                    deleteId: null,
                    loading: false
                })
                getAllCareers()
            })
    }

    useEffect(() => {

        getAllCareers()

    }, [])

    return (
        <AdminLayout>
            <h2 className={'text-center text-gray-700 text-poppins text-lg text-bold pb-5'}>Dashboard / Testimonials</h2>


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


            <Modal isOpen={createTeamForm.show} onRequestClose={() => createTeamForm.loading == false && setCrateTeamForm({...createTeamForm, errors: {}, show: false})}
                   className={'absolute top-1/2 left-1/2 transform -translate-x-1/2 w-1/3 -translate-y-1/2 shadow-lg bg-white p-4 border-0 rounded'}>
                <h2 className={'px-2 text-gray-800 pb-2 text-base font-bold text-center'}>Create New Member!</h2>
                <form ref={createForm}>
                    <div className="py-2">
                        <label className={'block text-gray-600'}>Position:</label>
                        <input onChange={changeCreateTeamFormValue} placeholder={'Position'} name={'position'} type="text"
                               className={'block w-full rounded border-gray-800 px-1 py-1 border focus:outline-none'}/>
                        <p className={'text-sm text-red-600 pl-1'}>{createTeamForm.errors?.position}</p>
                    </div>

                    <div className="py-2">
                        <label className={'block text-gray-600'}>Vacancy:</label>
                        <input onChange={changeCreateTeamFormValue} placeholder={'Vacancy'} name={'vacancy'} type="number"
                               className={'block w-full rounded border-gray-800 px-1 py-1 border focus:outline-none'}/>
                        <p className={'text-sm text-red-600 pl-1'}>{createTeamForm.errors?.vacancy}</p>
                    </div>

                    <div className="py-2">
                        <label className={'block text-gray-600'}>Job Type:</label>
                        <input onChange={changeCreateTeamFormValue} placeholder={'ex: Full-time / Part-time / Temporary ...'} name={'jobType'} type="text"
                               className={'block w-full rounded border-gray-800 px-1 py-1 border focus:outline-none'}/>
                        <p className={'text-sm text-red-600 pl-1'}>{createTeamForm.errors?.jobType}</p>
                    </div>

                    <div className="py-2">
                        <label className={'block text-gray-600'}>Deadline:</label>
                        <input onChange={changeCreateTeamFormValue} placeholder={'Deadline'} name={'lastDate'} type="date"
                               className={'block w-full rounded border-gray-800 px-1 py-1 border focus:outline-none'}/>
                        <p className={'text-sm text-red-600 pl-1'}>{createTeamForm.errors?.lastDate}</p>
                    </div>

                    <div className="py-2">
                        <label className={'block text-gray-600'}>Facebook:</label>
                        <input onChange={changeCreateTeamFormValue} placeholder={'Facebook Link'} name={'fb'} type="url"
                               className={'block w-full rounded border-gray-800 px-1 py-1 border focus:outline-none'}/>
                        <p className={'text-sm text-red-600 pl-1'}>{createTeamForm.errors?.fb}</p>
                    </div>

                    <div className="py-2">
                        <label className={'block text-gray-600'}>Instagram:</label>
                        <input onChange={changeCreateTeamFormValue} placeholder={'Instagram Link'} name={'insta'} type="url"
                               className={'block w-full rounded border-gray-800 px-1 py-1 border focus:outline-none'}/>
                        <p className={'text-sm text-red-600 pl-1'}>{createTeamForm.errors?.insta}</p>
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
                <div className="py-5">
                    <button
                        onClick={openCreateModal}
                        className={'py-1 ml-4 px-3 shadow-lg focus:outline-none rounded text-black  text-center bg-white text-blue-500'}>Add New Job
                    </button>
                </div>
                {
                    careers?.length ?
                        careers.map(career => {
                            return (
                                <div key={career._id} className={'m-2 shadow-lg bg-gray-500 rounded'}>
                                    <OpeningsDetails
                                        position={career.position}
                                        vacancy={career.vacancy}
                                        jobType={career.jobType}
                                        deadLine={{lastDate: career.lastDate}}
                                        link={{
                                            fb: career?.fb || "#",
                                            insta: career?.insta || "#"
                                        }}

                                    />

                                    <div className={'flex justify-around py-3'}>
                                        <button onClick={() => setDeleteModal({
                                            show: true,
                                            deleteId: career._id,
                                            loading: false
                                        })}
                                                className={'py-1 w-1/2 mx-2 focus:outline-none rounded bg-red-500 text-black text-center'}>Delete
                                        </button>
                                    </div>


                                </div>
                            )
                        })
                        :

                        careers?.length == 0 ? (<div className="col-span-12 text-center py-10 text-xl font-bold text-white">No Data !</div>)  : null


                }
            </div>
        </AdminLayout>
    )
}


export default Teams
