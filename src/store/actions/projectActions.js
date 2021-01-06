export const createProject = (project) =>{
    return (dispatch,getState,{getFirebase,getFirestore}) =>{
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const uid = getState().firebase.auth.uid;

        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName : profile.lastName,
            authorId: uid,
            createdAt: new Date()
        }).then(() =>{
            dispatch({type:'CREATE_PROJECT' , project});
        }).catch((error) =>{
            dispatch({type:'CREATE_PROJECT_ERROR' ,error});
        })
        
    }
}