import React, { useEffect, useState } from 'react';
import Header from './Header';
import AddNewItem from './AddNewItem';
import ItemList from './ItemList';
import UpdateInput from './UpdateInput';

const Todolist = () => {

    // Task list to store all task
    const [taskList, setTaskList] = useState(['Dates', 'Coconuts', 'Bananas', 'Apples']);

    // Function to setTaskList from sessionStorage
    const getList = () => setTaskList(JSON.parse(sessionStorage.getItem('taskList')));

    useEffect(() => {
        // Getting taskList from sessionStorage
        const getTaskList = JSON.parse(sessionStorage.getItem('taskList'));

        // Check taskList available in sessionStorage
        // If taskList not available then set in sessionStorage
        if (getTaskList) {
            setTaskList(getTaskList);
        } else {
            sessionStorage.setItem('taskList', JSON.stringify(taskList));
        }
        // eslint-disable-next-line
    }, [])

    // Selected task to store task and their id
    const [selectedTask, setSelectedTask] = useState({
        task: '',
        taskId: null
    });

    return (<>
        <div className='container position-relative'>
            <div
                className='row'
                style={{
                    height: '100vh',
                    zIndex: '1'
                }}
            >
                <div className='col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4
                    mx-auto my-auto border rounded shadow'>
                    {/* Header Component */}
                    <Header />
                    {/* Add New Item Component */}
                    <AddNewItem
                        taskList={taskList}
                        getList={getList}
                    />
                    {/* Item List Component */}
                    <ItemList
                        taskList={taskList}
                        setSelectedTask={setSelectedTask}
                        getList={getList}
                    />
                </div>
            </div>
            {/* Update Input Component */}
            <UpdateInput
                taskList={taskList}
                selectedTask={selectedTask}
                setSelectedTask={setSelectedTask}
                getList={getList}
            />
        </div>
    </>)
}

export default Todolist;