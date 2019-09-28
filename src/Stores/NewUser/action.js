export const HandleChange = (event) => dispatch => {
    dispatch({
        type:"HANDLE_CHANGE",
        name:event.target.name,
        value:event.target.value
    })
};

export const SubmitForm = (event) => dispatch => {
    let addUserinfo = document.querySelectorAll(".newUserInfo");
    let valid = true;
    addUserinfo.forEach((item)=>{
        if (item.value.length === 0){
            item.style.border="3px solid red";
            valid = false
        }
    });

    event.preventDefault();
    if (valid){
        return  dispatch({
            type:"SUBMIT_FORM",
        })
    }

};

