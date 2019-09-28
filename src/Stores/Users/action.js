export const ShowUser = (event) => dispatch => {
    dispatch({
        type:"SHOW_USER",
        userId:event.target.id
    })
};

export const Delete = (event) => dispatch => {
    dispatch({
        type:"DELETE_USER",
        userId:event.target.id
    })
}


