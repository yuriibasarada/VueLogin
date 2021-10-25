import firebase from "firebase/compat";

export default {
    actions: {
        async login({commit}, email) {
            let actionCodeSettings = {
                url: `http://${process.env.VUE_APP_URL}/login`,
                handleCodeInApp: true
            };
            await firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
                .then(() => window.localStorage.setItem('emailForSignIn', email))
                .catch(e => {
                })
        },
        async logout() {
            await firebase.auth().signOut()
        },
        async authEmailLink({commit}) {
            if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
                let email = window.localStorage.getItem('emailForSignIn');
                if (!email) {
                    email = window.prompt('Please provide your email for confirmation');
                }
                await firebase.auth().signInWithEmailLink(email, window.location.href)
                    .then(r => window.localStorage.removeItem('emailForSignIn'))
                    .catch(e => console.log(e));
            }
        },
        async getUsers({commit}, {startAt, endAt}) {
            try {
               return (await firebase.database().ref(`/users`).orderByKey()
                   .startAt(startAt)
                   .endAt(endAt)
                   .get()).toJSON()
            } catch (e) {
                console.log(e)
            }
        }
    },
}