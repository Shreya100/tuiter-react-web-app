import React from "react";
import TuitItem from "./tuit_item";
import {useSelector} from "react-redux";
import WhatsHappening from "../whats-happening";

const Home = () => {
    const { tuits } = useSelector(state => state.tuits)
    return (
        <>
        <WhatsHappening/>
        <div className="list-group">
            {
                tuits.map(tuit => {
                    return (<TuitItem tuit={tuit}/>);
                })
            }
        </div>
        </>
    );
}

export default Home;