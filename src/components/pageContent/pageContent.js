import React  from "react";

export const PageContentComponent = ({children, ...restProps}) => {
    return (
        <section {...restProps}>
            {children}
        </section>
    )
}