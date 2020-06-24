const initialState={
    authError:null
}

const authReducers=(state={initialState},actions)=>{
    switch(actions.type){
        case 'LOGIN_ERROR':
            console.log('login error');
            return{
                ...state,
                authError:'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return{
                ...state,
                authError:null
            }
        case 'SIGNOUT':
            console.log('signout succesfull');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup successfull');
            return{
                ...state,
                authError:null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error',actions.err.message);
            return{
                ...state,
                authError:actions.err.message
            }
        default:
            return state;
    }
}

export default authReducers;