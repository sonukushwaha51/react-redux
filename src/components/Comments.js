import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button} from "reactstrap";
import { addComments, fetchComments } from "../redux/actions/createActions";

function Comments() {

    const commentsState = useSelector(state => state.commentReducer.comments)
    const loadCommentState = useSelector(state => state.loadComment.loadcomments)
    const dispatch = useDispatch();
    const [fullName, setFullName] = useState("")
    const [newComment,setNewComment] = useState("")
    const addComment = () => dispatch(
        addComments(fullName,newComment)
    )
    const loadComment = () => {
        dispatch(fetchComments())
    }
    return(
        <React.Fragment>
            <div className="col-lg-12 col-md-12">
                <div className="container">
                    <h1>Enter your comments below:</h1>
                    <div className="comment-block">
                            <label>Enter name:</label>
                            <label><input className="name-box" type="text" value={fullName} onChange={e=> setFullName(e.target.value)}></input></label><br></br>
                            <label className="comment-box mt-3">Enter your feedback:</label>
                            <label><input className="comment" type="text" value={newComment} onChange={e=> setNewComment(e.target.value)}></input></label><br>
                            </br>
                            <Button color="success" onClick={addComment}>Add comment</Button>
                            <Button color="danger">Cancel</Button>
                        <div className="print-comments">
                            <div>
                                <Button color="primary" onClick={loadComment}>LOAD COMMENTS</Button>
                                {loadCommentState.map(lc => {
                                    return(
                                        <div key={lc.id}>
                                            <h2>{lc.title}</h2>
                                            <p>{lc.body}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            {commentsState.map((pr) => {
                                return (
                                    <div key={pr.id}>
                                        <div><h2>{pr.names}</h2></div>
                                        <div><p>{pr.comment}</p></div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Comments;