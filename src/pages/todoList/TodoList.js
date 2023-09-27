import { useSelector, useDispatch } from "react-redux";
import { todoSelector } from "../../redux/habitReducer";
import style from './todoList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faXmark, faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons'
import { updatetodayStatus, deleteTodo, toggleView, toggleStatus } from "../../redux/habitReducer";
const { format, addDays, startOfWeek } = require('date-fns');






const TodoList = () => {
    // var [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const tasks = useSelector(todoSelector)
    const date = new Date().getDate()
    const month = new Date().getMonth() + 1
    console.log(tasks)


    // array of current week days

    const today = new Date();
    const startOfWeekDate = startOfWeek(today, { weekStartsOn: 0 });

    const weekDays = [];

    for (let i = 0; i < 7; i++) {
        const currentDate = addDays(startOfWeekDate, i);

        const formatDate = format(currentDate, 'dd/MM/yy');
        // console.log(formatDate)
        const dayName = format(currentDate, 'EEEE');

        weekDays.push({ dayName, date: formatDate });
    }
    // console.log(weekDays)


    // handle task status
    const handleToggleStatus = (id, date) => {
        let d = date.substring(0, 2)
        dispatch(toggleStatus([id, d]))
    }


    // delete the task
    const deleteTask = (id) => {
        dispatch(deleteTodo(id))
    }

    // handle today task status
    const handleTaskStatusChange = (e, id) => {
        dispatch(updatetodayStatus([id, e.target.value, date, month]))
        console.log(tasks)
    }

    // handle task week view
    const handletoggleView = (id) => {
        dispatch(toggleView(id))
    }

    return (

        <div className={style.listContainer}>
            <h1> your all tasks are here !</h1>

            <ul className={style.listBox}>
                {tasks.map((task, i) => (
                    <li className={style.taskWrapper} key={i}>
                        <div className={style.task} >
                            <div className={style.taskInfo}>
                                <ul>
                                    <li>
                                        <p><span>Task :</span> {task.task}</p>
                                    </li>
                                    <li>
                                        <p><span>Time :</span> {`${task.time.hours}:${task.time.min} ${task.time.meridian}`}</p>
                                    </li>
                                </ul>
                            </div>

                            <div className={style.taskStatus}>

                                <p><span>Status : </span>
                                    {(task.status.find((t) => t.date === date)) ? (task.status.find((t) => t.date === date)).state : "Set State"}
                                </p>
                                <select
                                    value={""}
                                    onChange={(e) => handleTaskStatusChange(e, task.id)}
                                    required
                                >
                                    <option value="" disabled >
                                        Select Status
                                    </option>
                                    <option value="Done">Done</option>
                                    <option value="Not Done">Not Done</option>
                                    <option value="None">None</option>
                                </select>

                            </div>
                            <div >
                                <button className={style.viewBtn} onClick={() => handletoggleView(task.id)}>View</button>

                            </div>

                            <div className={style.taskFormat}>


                                <div className={style.deleteTask} onClick={() => deleteTask(task.id)}>
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </div>
                            </div>
                        </div>

                        <ul className={task.view ? style.showWeekDays : style.hideWeekDays}>
                            {weekDays.map((day, i) => (
                                <div className={style.weekStatus} key={i}>
                                    <li onClick={() => handleToggleStatus(task.id, day.date)}>
                                        {day.dayName.substring(0, 3)}
                                        <span>-</span>
                                        {day.date.substring(0, 2)}
                                    </li>
                                    <div>


                                        {(task.status.find((t) => t.date == day.date.substring(0, 2)))?.state === 'Done' ? (

                                            <FontAwesomeIcon icon={faCheck} />
                                        ) : (task.status.find((t) => t.date == day.date.substring(0, 2)))?.state === 'Not Done' ? (
                                            <FontAwesomeIcon icon={faXmark} />
                                        ) : (
                                            <FontAwesomeIcon icon={faExclamation} />
                                        )}

                                        {/* {console.log(day.date.substring(0, 2), )} */}

                                    </div>
                                </div>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>






    )
}

export default TodoList;