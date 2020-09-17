import Firebase from 'firebase';

const firebaseConfig = {
    APIkey : 'AIzaSyAd1RzOtx3aL_zZYHXgt0Zg7wQSOWgwpOg',
    databaseURL : 'https://chatapp-20f71.firebaseio.com/',
    projectId: 'chatapp-20f71',
    appId: '1:576089164879:android:c493d99759d6fc9b7d2e3a'
}

export default Firebase.initializeApp(firebaseConfig);