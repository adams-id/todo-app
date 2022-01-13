import React, { useState } from "react";
import { Footer, Header, PageContent, TaskList, TaskCreator } from "../components";
import { getCSVData } from "../logic/exportCSV";

/**
 * Adds new task to task list
 * 
 * @param {{key:String, message:String, isDone:String}[]} currentTasks 
 * @param {String} message 
 * @param {String} key 
 * @returns updated tasks list
 */
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

    // State management for tasks
    const [ tasks, setTasks ] = useState([]);

    /**
     * Generate a unique string id
     * 
     * @returns random string
     */
    const generateUniqueId = () => {
        return Math.random().toString(36).slice(2, 9);
    }

    /**
     * Creates a new task
     * 
     * @param {Event} event
     */
    const createTaskHandler = event => {
        // Prevent default form behaviour
        event.preventDefault();

        const msg = document.getElementById("task-creator").value;
        document.getElementById("task-creator").value = ""

        if (msg.trim().length > 1) {
            setTasks(createTask(tasks, msg, generateUniqueId()));
        }
    }

    /**
     * Delete a task
     * @param {Event} e
     */
    const deleteTask = e => {
        let currentTasks = [...tasks]
        const key = e.target.parentElement.id;

        const index = currentTasks.indexOf(
            currentTasks.filter(item => item.key === key)[0]
        )
        currentTasks.pop(index);
        setTasks(currentTasks);
    }

    /**
     * Toggle state of task
     * @param {Event} event 
     */
    const toggleCompletedState = event => {
        const key = event.target.parentElement.id;
        const checked = event.target.checked;
        let isDone = false;

        if (checked) {
            isDone = true;
        }

        let currentTasks = [...tasks]
        currentTasks.forEach(item => {
            if (item.key === key) {
                item.isDone = isDone;
            }
        })

        setTasks(currentTasks);
    }

    /**
     * Downloads a csv file of the user's tasks
     */
    const csvDownloadHandler = () => {
        const csvData = getCSVData(tasks);
        const filename = 'todo_tasks.csv'

        //creating an invisible element
        const element = document.createElement('a');
        element.setAttribute('href', 
            'data:text/plain;charset=utf-8, '
        + encodeURIComponent(csvData));
        element.setAttribute('download', filename);
      
        document.body.appendChild(element);
        element.click();
      
        // Remove invisible element
        document.body.removeChild(element);
    }

    return (
        <section className="hero is-fullheight">
            <Header>
                <TaskCreator
                    createTaskHandler={createTaskHandler}
                    csvDownloadHandler={csvDownloadHandler}
                />
            </Header>
            
            <PageContent>
                <TaskList
                    isDoneHandler={toggleCompletedState}
                    tasks={tasks}
                    deleteTaskHandler={deleteTask}
                />
            </PageContent>
            <Footer />
        </section>
    )
}
