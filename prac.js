
const firebaseConfig = {
    apiKey: "AIzaSyA7s96Hoz3DJt8IsbwY27QXPJM-uNxxgv0",
    authDomain: "ebiniyog-yamin.firebaseapp.com",
    projectId: "ebiniyog-yamin",
    storageBucket: "ebiniyog-yamin.appspot.com",
    messagingSenderId: "1045006862883",
    appId: "1:1045006862883:web:cdcec203983add0bacff96",
    measurementId: "G-00PFG6BJZ1"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const googleSignInBtn = document.getElementById('googleSignInBtn');

googleSignInBtn.addEventListener('click', async () => {
try {
// Create a Google provider object
const provider = new firebase.auth.GoogleAuthProvider();

// Initiate Google sign-in flow
const result = await auth.signInWithPopup(provider);

// Handle successful sign-in
const user = result.user;
console.log('Logged in user:', user);

// You can redirect to a different page after successful login
// window.location.href = '/dashboard';

} catch (error) {
console.error('Login error:', error);
// Handle errors, e.g., display an error message to the user
}
});
