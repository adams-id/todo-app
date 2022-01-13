import React, { useState } from "react";
import { Footer, Header, PageContent, TaskList, TaskCreator } from "../components";

export const createTask = (currentTasks, message, key) => {
    let tasks = [...currentTasks]
    tasks.push({
        "key": key,
        "message": message,
        "isDone": false
    })
    return tasks; 
}

export const HomePageComponent = () => {

    const [ tasks, setTasks ] = useState([]);

    const generateUniqueId = () => {
        return Math.random().toString(36).slice(2, 9);
    }

    /* const createTask = (currentTasks, message, key) => {
        let tasks = [...currentTasks]
        tasks.push({
            "key": key,
            "message": message,
            "isDone": false
        })
        return tasks; 
    } */

    const createTaskHandler = event => {
        event.preventDefault();

        const msg = document.getElementById("task-creator").value;
        document.getElementById("task-creator").value = ""
        
        if(msg.length > 1) {
            setTasks(createTask(tasks, msg, generateUniqueId()));
        }
    }

    return (
        <section className="hero is-fullheight">
            <Header>
                <TaskCreator createTaskHandler={createTaskHandler} />
            </Header>
            
            <PageContent>
                <TaskList tasks={tasks}/>
            </PageContent>
            <Footer />
        </section>
    )
}

console.log(HomePageComponent.createTask)
