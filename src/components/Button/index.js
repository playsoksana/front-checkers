import React from "react";

import classNames from "../../lib/class_names";


import styles from "./styles.module.css";

const Button = (props) => {
    if (!props.children) {
        return null;
    }

    const buttonClassName = classNames({
        [styles.button]: true,
        [styles.orangeTheme]: props.isOrange,
    })

    return (
        <div
            className={buttonClassName}
            onClick={props.onReset}
        >
            {props.children}
        </div>
    );
};

Button.defaultProps = {
    children: null,
    onReset: () => { },
    isOrange: false,
}

export default Button;