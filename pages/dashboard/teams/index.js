import AdminLayout from "../../../layouts/AdminLayout";
import {useEffect, useState} from "react";
import axiosGet from "../../../frontend/helpers/axiosGet";
import axiosDelete from "../../../frontend/helpers/axiosDelete";
import TeamCard from "../../../components/Cards/TeamCard";
import Modal from 'react-modal'


const Teams = () => {
    const [teamMembers, setTeamMembers] = useState([])

    const [deleteModal, setDeleteModal] = useState({
        show: true,
        deleteId: null
    })

    Modal.setAppElement('#__next');


    const getAllTeams = async () => {
        try{
            const allTeam = await axiosGet('/api/team')
            setTeamMembers(allTeam.data)
        }catch (e) {
            setTeamMembers([])
        }
    }

    const deleteTeam = (e) => {
        e.target.parentElement.parentElement.classList.add('hidden')
        axiosDelete('/api/team/delete/' + deleteModal.deleteId)
            .then(res => {
                e.target.parentElement.parentElement.classList.remove('hidden')
                setDeleteModal({
                    show: false,
                    deleteId: null
                })
                getAllTeams()
            })
            .catch(err => {
                e.target.parentElement.parentElement.classList.remove('hidden')
                setDeleteModal({
                    show: false,
                    deleteId: null
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

            <Modal isOpen={deleteModal.show} onRequestClose={() => setDeleteModal({show: false, deleteId: null})} className={'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg bg-white p-4 border-0 rounded'}>
               <h2 className={'px-2 text-gray-800 pb-2 text-base font-bold'}>Are you sure want to delete?</h2>
                <div className={'flex justify-center py-3'}>
                    <button onClick={deleteTeam} className={'py-1 mr-2 px-3 focus:outline-none rounded bg-red-600 text-black text-black text-center'}>Yes</button>
                    <button onClick={() => setDeleteModal({show: false, deleteId: null})} className={'py-1 px-3 focus:outline-none rounded bg-gray-600 text-white text-center'}>No</button>
                </div>
            </Modal>

            <div className="grid grid-cols-12 bg-gray-700 pb-8">
                {
                    teamMembers.map(team => {
                        return (
                            <div key={team._id} className="col-span-12 md:col-span-6 lg:col-span-4 mx-4">
                                <TeamCard
                                image={team.image}
                                name={team.name}
                                designation={team.designation}
                                />

                                <div className={'flex justify-around py-3'}>
                                    <button className={'py-1 px-5 focus:outline-none rounded-lg bg-white text-black text-center'}>Edit</button>
                                    <button onClick={() => setDeleteModal({show: true, deleteId: team._id})} className={'py-1 px-5 focus:outline-none rounded-lg bg-red-500 text-black text-center'}>Delete</button>
                                </div>


                            </div>
                        )
                    })
                }
            </div>
        </AdminLayout>
    )
}


export default Teams
