import React, { useState } from 'react';


function SubContactForm({data}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    } 

    return (
        <div className={'container mx-auto'}>
            <div className={'grid grid-cols-10 lg:grid-cols-6'}>
                <div className={'col-span-1'}></div>
                <div className={' col-span-8 lg:col-span-4'}>
                    <div className={'grid place-items-center'}>
                        <img className={'w-2/3'} src={'./Images/Logo.png'} alt='not found' />
                    </div>
                    <div className={'my-14 text-center'}>
                        <p className={'font-secondary font-extrabold text-sub-head-2 lg:text-head-5'}>{data.title}</p>
                        <p className={'font-primary text-base text-grey my-5'}>
                            {data.description}
                        </p>
                    </div>
                    <div>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className={'grid grid-cols-12'}>
                                <div className={'col-span-12 lg:col-span-6 lg:mr-5'}>
                                    <label className={' text-gray-500'}>NAME <span className={'text-red-500'}>*</span></label><br/>
                                    <input 
                                        name='name'
                                        className={'border border-gray-800 w-full h-14 my-3'} 
                                        type='text'
                                        value={name} 
                                        onChange={e=>setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={'col-span-12 lg:col-span-6 lg:ml-5'}>
                                    <label className={' text-gray-500'}>EMAIL <span className={'text-red-500'}>*</span></label><br/>
                                    <input 
                                        name='email'
                                        className={'border border-gray-800 w-full h-14 my-3'} 
                                        type='text' 
                                        value={email}
                                        onChange={e=>setEmail(e.target.value)}
                                        required 
                                    />
                                </div>
                                <div className={'col-span-12'}>
                                    <label className={' text-gray-500'}>SUBJECT</label><br/>
                                    <input 
                                        name='subject'
                                        type='text' 
                                        className={'w-full border border-gray-800 h-14 my-3'} 
                                        value={subject}
                                        onChange={e=>setSubject(e.target.value)}
                                    />
                                </div>
                                <div className={'col-span-12'}>
                                    <label className={' text-gray-500'}>YOUR MESSAGE</label><br/>
                                    <textarea 
                                        name='message'
                                        className={'border border-gray-800 w-full h-14 my-3'}
                                        value={message}
                                        onChange={e=>setMessage(e.target.value)}
                                    >

                                    </textarea>
                                </div>
                                <button 
                                    className={'col-span-12 border h-16 my-3 text-gray-500 hover:text-white hover:bg-gray-500 bg-yellow-primary font-bold'}
                                >
                                    BOOK NOW
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={'col-span-1'}></div>
            </div>
        </div>
    )
}

export default SubContactForm;
