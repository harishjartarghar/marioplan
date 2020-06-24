const initialState={}

const projectReducers=(state=initialState,actions)=>{
    switch(actions.type){
        case 'CREATE_PROJECT':
            console.log('project created', actions.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('error occured', actions.err);
            return state;
        default:
            return state;
        
    }
}

export default projectReducers;