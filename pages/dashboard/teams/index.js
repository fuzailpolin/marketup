import AdminLayout from "../../../layouts/AdminLayout";
import {useEffect, useState, useRef} from "react";
import axiosGet from "../../../frontend/helpers/axiosGet";
import axiosDelete from "../../../frontend/helpers/axiosDelete";
import TeamCard from "../../../components/Cards/TeamCard";
import Modal from 'react-modal'
import {BiLoaderCircle} from 'react-icons/bi';
import axiosPost from "../../../frontend/helpers/axiosPost";


const Teams = () => {
    const [teamMembers, setTeamMembers] = useState(null)

    const createForm = useRef(null)

    const [createTeamForm, setCrateTeamForm] = useState({
        name: '',
        designation: '',
        image: '',
        loading: false,
        show: false,
        errors: {}
    })

    const openCreateModal = () => {
        createForm?.current?.reset()
        setCrateTeamForm({
            name: '',
            designation: '',
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
        form.append('name', createTeamForm.name || '')
        form.append('designation', createTeamForm.designation || '')
        form.append('image', createTeamForm.image || '')

        axiosPost('/api/team/create', form, {})
            .then(response => {
                setTeamMembers([
                    ...teamMembers,
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


    const getAllTeams = async () => {
        try {
            const allTeam = await axiosGet('/api/team')
            setTeamMembers(allTeam.data)
        } catch (e) {
            setTeamMembers([])
        }
    }

    const deleteTeam = (e) => {
        if (deleteModal.loading) {
            return
        }

        setDeleteModal({
            ...deleteModal, loading: true
        });
        axiosDelete('/api/team/delete/' + deleteModal.deleteId)
            .then(res => {

                setDeleteModal({
                    show: false,
                    deleteId: null,
                    loading: false
                })
                getAllTeams()
            })
            .catch(err => {

                setDeleteModal({
                    show: false,
                    deleteId: null,
                    loading: false
                })
                getAllTeams()
            })
    }

    useEffect(() => {

        getAllTeams()

    }, [])

    return (
        <AdminLayout>
            <h2 className={'text-center text-gray-700 text-poppins text-lg text-bold pb-5'}>Dashboard / Teams</h2>


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
                        <label className={'block text-gray-600'}>Name:</label>
                        <input onChange={changeCreateTeamFormValue} placeholder={'Name'} name={'name'} type="text"
                               className={'block w-full rounded border-gray-800 px-1 py-1 border focus:outline-none'}/>
                        <p className={'text-sm text-red-600 pl-1'}>{createTeamForm.errors?.name}</p>
                    </div>

                    <div className="py-2">
                        <label className={'block text-gray-600'}>Designation:</label>
                        <input onChange={changeCreateTeamFormValue} placeholder={'Designation'} name={'designation'}
                               type="text"
                               className={'block w-full rounded border-gray-800 px-1 py-1 border focus:outline-none'}/>
                        <p className={'text-sm text-red-600 pl-1'}>{createTeamForm.errors?.designation}</p>
                    </div>

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

            <div className="grid grid-cols-12 bg-gray-700 pb-8 mb-8">
                <div className="col-span-12 py-5">
                    <button
                        onClick={openCreateModal}
                        className={'py-1 ml-4 px-3 shadow-lg focus:outline-none rounded text-black  text-center bg-white text-blue-500'}>Add New Member
                    </button>
                </div>
                {
                    teamMembers?.length ?
                        teamMembers.map(team => {
                            return (
                                <div key={team._id} className="col-span-12 md:col-span-6 lg:col-span-4 mx-4">
                                    <TeamCard
                                        image={team.image}
                                        name={team.name}
                                        designation={team.designation}
                                    />

                                    <div className={'flex justify-around py-3'}>
                                       <button onClick={() => setDeleteModal({
                                            show: true,
                                            deleteId: team._id,
                                            loading: false
                                        })}
                                                className={'py-1 w-1/2 mx-2 focus:outline-none rounded bg-red-500 text-black text-center'}>Delete
                                        </button>
                                    </div>


                                </div>
                            )
                        })
                        :

                            teamMembers?.length == 0 ? (<div className="col-span-12 text-center py-10 text-xl font-bold text-white">No Data !</div>)  : null


                }
            </div>
        </AdminLayout>
    )
}


export default Teams
