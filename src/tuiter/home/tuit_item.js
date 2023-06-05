import React from "react";
import {useDispatch} from "react-redux";
import { deleteTuit } from "../reducers/tuits-reducer";
import {RxCross2} from "react-icons/rx"
const TuitItem = (
 {
   tuit 
 }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
    }

    return(
        <div className="list-group-item">
            <div className="row">
                <div className="col-1 me-2">
                    <img src={require(`./images/${tuit.image}`)} className="rounded-circle"  height="48px" width="48px" alt= "nt"/>
                </div>
                <div className="col-10 p-0">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <span className="text-black me-1">{tuit.userName}</span>
                        <i className="fa fa-check-circle me-1" style={{color: "blue"}}></i>
                        <span className="text-secondary">{tuit.handle} . {tuit.time}</span>
                    </div>
                    <RxCross2 onClick={() => deleteTuitHandler(tuit._id)} />
                </div>
                <span className="text-black d-block">{tuit.tuit}</span>
            </div>
                
            </div>
            
            <div className="row">
                <div className="col-1"></div>
            <div className="col-2">
                <i className='fa fa-comment text-secondary'>&nbsp;{tuit.replies}</i>
            </div>
            <div className="col-2">
                <i className='fa fa-share-alt text-secondary'>&nbsp;{tuit.retuits}</i>
            </div>
            <div className="col-2">
                <i className='fa fa-heart text-secondary' style={{color: "red"}} >&nbsp;{tuit.likes}</i>
            </div>
            <div className="col-2">
                <i className='fa fa-download text-secondary'></i>
            </div>
            </div>
        </div>
    );
}
export default TuitItem;

