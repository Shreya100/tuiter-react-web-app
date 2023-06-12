import React, {useEffect} from "react";
import TuitItem from "./tuit_item";
import {useDispatch, useSelector} from "react-redux";
import WhatsHappening from "../whats-happening";
import {findTuitsThunk} from "../services/tuits-thunks";

     
const Home = () => {
    const {tuits, loading} = useSelector(state => state.tuits)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
      }, [])
    return (
        <>
        <WhatsHappening/>
        <div className="list-group">
            { loading &&
            <li className="list-group-item">
                Loading...
            </li>
            }

            {
                tuits.map(tuit => {
                    return (<TuitItem key={tuit._id} tuit={tuit}/>);
                })
            }
        </div>
        </>
    );
}

export default Home;