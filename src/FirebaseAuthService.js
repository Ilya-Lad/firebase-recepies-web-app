import firebase from "./FirebaseConfig";

const auth = firebase.auth();

//the below funcs return a promise
const registerUser = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

const loginUser = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

//relinguishes JWT token
const logoutUser = () => {
  return auth.signOut();
};

const sendPasswordResetEmail = (email) => {
  return auth.sendPasswordResetEmail(email);
};

const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return auth.signInWithPopup(provider);
};

const subscribeToAuthChanges = (handleAuthChange) => {
  //Adds an observer for changes to the user's sign-in state.
  //On the change, calls handleAuthChange(user) with the param being:
  // curr user that has just signed in, or null if user has signed out. Check that you understand it correctly
  auth.onAuthStateChanged((user) => {
    handleAuthChange(user);
  });
};

const FirebaseAuthService = {
  registerUser,
  loginUser,
  logoutUser,
  sendPasswordResetEmail,
  loginWithGoogle,
  subscribeToAuthChanges 
};

export default FirebaseAuthService;

