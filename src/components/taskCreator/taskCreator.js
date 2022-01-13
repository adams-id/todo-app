import React from "react";

export const TaskCreatorComponent = ({createTaskHandler}) => {
    return (
        <div className="column">
            <form onSubmit={createTaskHandler}>
                <div className="columns is-centered">
                    <div className="column is-half">
                        <input
                            id="task-creator"
                            name="task-creator"
                            className="input is-link is-large"
                            type="text"
                            placeholder="Add new task" />
                    </div>
                    <div className="column is-one-quarter">
                        <button className="button is-large is-outlined has-text-link" type="submit">
                            Add task
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}