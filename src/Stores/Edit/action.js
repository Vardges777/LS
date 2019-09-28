export const EditChange = (event) => dispatch => {
    dispatch({
        type: "EDIT_CHANGE",
        name: event.target.name,
        value: event.target.value
    })

};

export const MakeChange = (event) => dispatch => {
    event.preventDefault();
    let editUserInfo = document.querySelectorAll(".editUserInfo");
    let valid = true;
    editUserInfo.forEach((item)=>{
        if (item.value.length === 0){
            item.style.border="3px solid red";
            valid = false
        }
    });
    if (valid){
        return  dispatch({
            type:"MAKE_CHANGE",
        })
    }

};
