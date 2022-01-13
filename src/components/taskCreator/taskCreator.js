import React from "react";

/**
 * Component containing task creation and csv download button
 * @param {} props
 * @returns JSX element
 */
export const TaskCreatorComponent = ({createTaskHandler, csvDownloadHandler}) => {
    return (
        <div className="column">
            <form onSubmit={createTaskHandler}>
                <div className="columns is-centered">
                    <div className="column">
                        <input
                            id="task-creator"
                            name="task-creator"
                            className="input is-link is-large"
                            type="text"
                            placeholder="Add new task" />
                    </div>
                    <div className="column">
                        <button className="button is-large is-outlined has-text-link" type="submit">
                            Add task
                        </button>
                    </div>
                </div>
            </form>
            <div className="" onClick={csvDownloadHandler}>
                <button className="button is-large is-outlined has-text-link" type="submit">
                    Download CSV
                </button>
            </div>
        </div>
    )
}