import React  from "react";

/**
 * Page Component for holding all page items
 * 
 * @param {*} props
 * @returns JSX element
 */
export const PageContentComponent = ({children, ...restProps}) => {
    return (
        <section {...restProps}>
            {children}
        </section>
    )
}