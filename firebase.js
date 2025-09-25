<!-- firebase.js -->
<!-- Load Firebase from CDN (no import needed) -->
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-storage-compat.js"></script>

<script>
  // Your Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyAkGJmIvQddRNgny8io8IjYH9GECpPYIug",
    authDomain: "rampurhat-app.firebaseapp.com",
    projectId: "rampurhat-app",
    storageBucket: "rampurhat-app.appspot.com",
    messagingSenderId: "923536190277",
    appId: "1:923536190277:web:9447aed6eb8846cc2b2c2c"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Make global references
  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();
</script>
