import React from "react";
import { useDispatch } from "react-redux";

import { resetChecker } from "../../redux/allChecker/action";
import { resetOrder } from "../../redux/order/actions";

import Button from "../Button";

import styles from "./styles.module.css";

const Panel = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <Button
                onReset={() => {
                    dispatch(resetChecker());
                    dispatch(resetOrder());
                }}
                isOrange
            >
                Start over
            </Button>
        </div>);
}

export default Panel;