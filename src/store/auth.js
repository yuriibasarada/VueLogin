import firebase from "firebase/compat";
export default {
    actions: {
        async login({commit}, email) {
            try {
                console.log(commit)
                await firebase.auth().signInWithEmailLink(email)
            } catch (e) {
                console.log('here')
            }
        }
    }
}