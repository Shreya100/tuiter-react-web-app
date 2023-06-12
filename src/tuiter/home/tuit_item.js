import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk,updateTuitThunk} from "../services/tuits-thunks";
import {RxCross2} from "react-icons/rx"
import { useState } from "react";
import {FaHeart,FaThumbsDown} from "react-icons/fa"

const TuitItem = (
 {
   tuit 
 }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
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
            <FaHeart
                // className="text-danger"
                onClick={() =>
                    dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1}))
                }
                />
                <span className="ms-2">{tuit.likes}</span>
            </div>
            <div className="col-2">
            <FaThumbsDown
                // className="text-danger"
                onClick={() =>
                    dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes - 1 }))
                }
                />
                <span className="ms-2">{tuit.dislikes}</span>
            </div>

            <div className="col-2">
                <i className='fa fa-download text-secondary'></i>
            </div>
            </div>
        </div>
    );
}
export default TuitItem;