const initialState = {
    users:[
        {
            name:"Vardges",
            surname:"Hamazaspyan",
            email:"hamazaspyan.vardges@mail.ru",
            phone:"077853382",
            city:"Ejmiadzin",
            country:"Armenia",
            address:"Prospekt",
            address2:"Saryan",
            legal:"Company",
            packageKind:"Standart",
            id:0
        },
        {
            name:"Hovo",
            surname:"Mkrtchyan",
            email:"hovo.mkrtchyan@mail.ru",
            phone:"077878787",
            city:"Erevan",
            country:"Armenia",
            address:"Komunarner",
            address2:"",
            legal:"Individual",
            packageKind:"Premium",
            id:1
        },
        {
            name:"Norayr",
            surname:"Melkumyan",
            email:"norayr.melkumyan@mail.ru",
            phone:"077656565",
            city:"Erevan",
            country:"Armenia",
            address:"Prospekt",
            address2:"Saryan",
            legal:"Company",
            packageKind:"Premium",
            id:2
        },
    ],
    newUser: {

    },
};

export default (state = initialState,action) => {
    switch(action.type){
        case "ADD_USER" : {
            return{
                ...state
            }
        }
        case 'HANDLE_CHANGE': {
            return{
                ...state,
                newUser: {
                    ...state.newUser,
                    [action.name]: action.value
                }
            }
        }
        case "SUBMIT_FORM" : {
            let id = state.users.length;
            let newUser = state.newUser;
            newUser.id = id;
            return {
                ...state,
                users:[...state.users,newUser]
            }
        }
        case "SHOW_USER" : {
            let editUser = {};
            state.users.map((user) => {
                if (action.userId == user.id){
                    editUser = user
                }
            });
            return {
                ...state,
                editableUser:editUser,
            }
        }
        case "EDIT_CHANGE" : {
            return {
                ...state,
                editableUser:{
                    ...state.editableUser,
                    [action.name]: action.value
                }
            }
        }
        case 'MAKE_CHANGE' : {
            let userState = state.users;
            let editableUserId = state.editableUser.id;
            userState[editableUserId] = state.editableUser;
            return {
                ...state,
                users:userState
            }
        }
        case "DELETE_USER" : {
            let newUsers = state.users;
            newUsers.splice(action.userId,1);
            return {
                ...state,
                users:newUsers
            }
        }
        default:
            return state
    }
}
