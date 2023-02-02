import React from "react";
import { useDispatch } from "react-redux";

import { resetChecker } from "../../redux/action";

import Button from "../Button";

import styles from "./styles.module.css";

const Panel = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <Button
                onReset={() => { dispatch(resetChecker()) }}
                isOrange
            >
                Start over
            </Button>
        </div>);
}

export default Panel;