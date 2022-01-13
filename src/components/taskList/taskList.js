import React from "react";

/**
 * Component for listing tasks
 * 
 * @param {} props
 * @returns JSX Element
 */
export const TaskListComponent = ({tasks, isDoneHandler, deleteTaskHandler}) => {
    return (
        <section className="section">
            {tasks.map(item => {
                return (
                    <div
                        id={item['key']}
                        key={item['key']}
                        className={`task-item ${item['isDone'] ? "strike" : null}`}
                    >
                        <input type="checkbox" onClick={isDoneHandler}/>
                        <span className="task-message">{item['message']}</span>
                        <button 
                            className="delete is-medium has-background-danger m-3" 
                            onClick={deleteTaskHandler}
                        />
                    </div>
                )
            })}
        </section>
    )
}
