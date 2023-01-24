import React from "react";

import classNames from "../../lib/class_names";

import styles from "./styles.module.css";


const IconWrapper = (props) => {
    const iconClassName = classNames({
        [styles.iconWhite]: props.isWhite,
        [styles.iconBlack]: props.isDark,
    });

    let title = null;

    if (props.title) {
        title = (
            <title>{props.title}</title>
        );
    }

    return props.children({
        className: iconClassName,
        title,
    });
};

IconWrapper.defaultProps = {
    className: "",
    title: "",

    isWhite: false,
    isDark: false,
};

export default IconWrapper;
