const initialState = {
    users:[
        {
            name:"Vardges",
            lastName:"Hamazaspyan",
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
            lastName:"Mkrtchyan",
            city:"Erevan",
            country:"Armenia",
            address:"Komunarner",
            address2:"",
            legal:"Individual",
            packageKind:"Premium",
            id:1
        },
        {
            name:"Sevada",
            lastName:"Grigoryan",
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
    editableUser:{

    }
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
            state.newUser = {
            ...state.newUser,
                    packageKind: action.packagekind,
                    legal:action.legal
            };
            return {
                ...state,
                users : [...state.users,state.newUser]
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
            state.editableUser = {
                ...state.editableUser,
                packageKind: action.packagekind,
                legal:action.legal
            };
            userState[editableUserId] = state.editableUser;

            return {
                ...state,
                users:userState
            }
        }
        case "DELETE_USER" : {
            let newUsers = state.users;
            newUsers.splice(action.userId,1);
            newUsers.map((item,index)=>{
                item.id = index
            });
            return {
                ...state,
                users:newUsers
            }
        }
        default:
            return state
    }
}
