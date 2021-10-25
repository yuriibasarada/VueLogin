import firebase from "firebase/compat";

export default {
    actions: {
        async login({commit} ,email) {
            let actionCodeSettings = {
                url: `https://${process.env.VUE_APP_URL}`,
                handleCodeInApp: true
            };
            try {
                await firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
                    .then(() => {
                        window.localStorage.setItem('emailForSignIn', email);
                    })
                    .catch(e => console.log(e))
            } catch (e) {
                console.log(e)
            }
        },
        async authEmailLink({commit}) {
            if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
                let email = window.localStorage.getItem('emailForSignIn');
                if (!email) {
                    email = window.prompt('Please provide your email for confirmation');
                }
                firebase.auth().signInWithEmailLink(email, window.location.href)
                    .then(r => window.localStorage.removeItem('emailForSignIn'))
                    .catch(e => console.log(e));
            }
        }
    },
}