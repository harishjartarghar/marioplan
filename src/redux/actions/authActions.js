export const signIn=(credentials)=>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type:'LOGIN_SUCCESS'});
        }).catch(err=>{
            dispatch({type:'LOGIN_ERROR',err});
        })
    }
}

export const signOut=()=>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type:'SIGNOUT'});
        })
    }
}

export const signUp=(NewUser)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase=getFirebase();
        const firestore=getFirestore();
        
        firebase.auth().createUserWithEmailAndPassword(
            NewUser.email,
            NewUser.password
        ).then(resp=>{
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName:NewUser.firstName,
                lastName:NewUser.lastName,
                initials:NewUser.firstName[0]+NewUser.lastName[0]
            })
        }).then(()=>{
            dispatch({type:'SIGNUP_SUCCESS'})
        }).catch((err)=>{
            dispatch({type:'SIGNUP_ERROR',err})
        })
    }
}