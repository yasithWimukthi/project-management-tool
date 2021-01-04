export const createProject = (project) =>{
    return (dispatch,getState,{getFirebase,getFirestore}) =>{
        const firestore = getFirestore();

        firestore.collection('projects').add({
            ...project,
            authorFirstName: '',
            authorLastName : '',
            authorId: '',
            createdAt: new Date()
        }).then(() =>{
            dispatch({type:'CREATE_PROJECT' , project});
        }).catch((error) =>{
            dispatch({type:'CREATE_PROJECT_ERROR' ,error});
        })
        
    }
}