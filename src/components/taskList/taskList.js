import React from "react";

export const TaskListComponent = ({tasks}) => {

    console.log(tasks)
    return (
        <section className="section">
            {tasks.map(item => {
                return (
                    <div key={item['key']} className="box is-rounded">
                        {item['message']}
                    </div>
                )
            })}
        </section>
    )
}
