import React, { useState } from 'react';
import style from './form.module.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/habitReducer';

 var date= new Date().getDate()

function Form() {
    const [taskName, setTaskName] = useState('');
    const [taskHour, setTaskHour] = useState('01');
    const [taskMinute, setTaskMinute] = useState('00');
    const [taskAmPm, setTaskAmPm] = useState('AM');

    const dispatch = useDispatch()

    const handleTaskNameChange = (e) => {
        setTaskName(e.target.value);
    };

    const handleTaskHourChange = (e) => {
        setTaskHour(e.target.value);
    };

    const handleTaskMinuteChange = (e) => {
        setTaskMinute(e.target.value);
    };

    const handleTaskAmPmChange = (e) => {
        setTaskAmPm(e.target.value);
    };

    const handleAddTask = () => {
        dispatch(addTodo({
            id: Date.now(),
            task: taskName,
            time: {
                hours: taskHour,
                min: taskMinute,
                meridian: taskAmPm
            },
            status: [{date:date, state:"None"}]
        }))

        setTaskName("")
        setTaskHour("01")
        setTaskMinute("00")
        setTaskAmPm("am")

      

    };

    return (
        <div className={style.taskform}>
            <h2>Add Task</h2>
            <form>
                <div className={style.formgroup}>
                    <label htmlFor="taskName">Task Name:</label>
                    <input
                        type="text"
                        id="taskName"
                        value={taskName}
                        onChange={handleTaskNameChange}
                    />
                </div>
                <div className={`${style.formgroup} ${style.time}`}>
                    <label>Task Time:</label>
                    <select value={taskHour} onChange={handleTaskHourChange}>
                        {/* Add options for hours */}
                        {Array.from({ length: 12 }, (_, i) => {
                            const hour = (i + 1).toString().padStart(2, '0');
                            return <option key={hour} value={hour}>{hour}</option>;
                        })}
                    </select>
                    <span>:</span>
                    <select value={taskMinute} onChange={handleTaskMinuteChange}>
                        {/* Add options for minutes */}
                        {Array.from({ length: 60 }, (_, i) => {
                            const minute = i.toString().padStart(2, '0');
                            return <option key={minute} value={minute}>{minute}</option>;
                        })}
                    </select>
                    <select value={taskAmPm} onChange={handleTaskAmPmChange}>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>
                </div>
                <button type="button" onClick={handleAddTask}>Add Task</button>
            </form>
        </div>
    );
}

export default Form;
