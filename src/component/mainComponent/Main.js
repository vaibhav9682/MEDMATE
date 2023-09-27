import style from "./main.module.css"
import { Link } from "react-router-dom";


const Main = () => {


    return (
        <>
            <div className={style.mainBox}  >
                <section className={style.introDiv}>
                    <h1 className={style.heading}>Organize your work and life, finally.</h1>
                    <p className={style.paragraph}>
                        Become focused, organized, and calm with Todoist. The world’s #1 task manager and to-do list app.
                    </p>
                    <Link to="/habit/form" className={style.redBtn}>Add New</Link>
                </section>



            </div>
        </>
    )
}

export default Main;