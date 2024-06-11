const firebaseConfigjson = require('../firebaseConfig.json');
const { topNavSet } = require('../functions/utils');
firebase.initializeApp(firebaseConfigjson);


module.exports.loginAuth =  {
    repeatRend : async () => { } ,
    
    afterRend : async () =>  
    {

    // const firebaseConfig = firebaseConfigjson;
    // firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth(); 
      
        $('#googleSignInBtn').on('click', async function() {
          try {
            // Create a Google provider object
            const provider = new firebase.auth.GoogleAuthProvider();
      
            // Initiate Google sign-in flow
            const result = await auth.signInWithPopup(provider);
      
            // Handle successful sign-in
            const user = result.user;
            console.log('Logged in user:', user);
            localStorage.setItem('user',JSON.stringify(user));
      
            // You can redirect to a different page after successful login
            window.location.href = '/#/dashboard';
      
          } catch (error) {
            console.error('Login error:', error);
            // Handle errors, e.g., display an error message to the user
          }
        });

    },

    rend : async () => 
    {
        topNavSet('back','Login')
        // $("#TopNavs").css('display', "none");
        $("#contents").html(`    
        <div class="login-container">
        <div class="login-logo">
            <img src="./resource/512.png" alt="eBiniyog Logo">
            <span>eBiniyog</span>
        </div>
        <div class="login-subtitle">Simple & Free Investing<br>Invest easily in mutual funds!</div>
        <button class="gsi-material-button" id="googleSignInBtn">
              <div class="gsi-material-button-state"></div>
              <div class="gsi-material-button-content-wrapper">
                <div class="gsi-material-button-icon">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: block;">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                  </svg>
                </div>
                <span class="gsi-material-button-contents">Sign in with Google</span>
                <span style="display: none;">Sign in with Google</span>
              </div>
        </button>
        <div class="login-terms">
            By proceeding, I agree to <a href="#">Terms & Conditions</a></a>
        </div>
    </div>`)
    }

}



module.exports.dashboard = {
  afterRend : async => {

    $('.logout').on('click',()=>{
        localStorage.removeItem("user");
        location.href = "/#/home"
    })

    $("#profile-image-input").on('change',function (event) { 
        const $input = $(event.target);
        if ($input[0].files && $input[0].files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                $('.profile-image').attr('src', e.target.result);
            };
            reader.readAsDataURL($input[0].files[0]);
        }
        
    });
  },

  rend : async => {
    (localStorage["user"]) ? '' : window.location.href  = '/#/login' ; 
    topNavSet('back', 'Profile')

      $("#contents").html(`
      <div class="profile-container">
          <div class="profile-header">
              <div class="profile-image-wrapper">
                  <img src="https://via.placeholder.com/100" alt="Profile Picture" class="profile-image">
                  <input type="file" id="profile-image-input" accept="image/*" capture="camera">
                  <ion-icon name="camera-outline" class="add-image-icon"></ion-icon>
  
              </div>
              <div class="profile-info">
                  <h1>${JSON.parse(localStorage["user"]).displayName}</h1>
                  <p class="designation">${JSON.parse(localStorage["user"]).email}</p>
                  <span class="status">Not Verified</span>
              </div>
          </div>
          <div class="profile-stats">
              <div class="stat-item">
                  <p class="stat-number">৳ 970000</p>
                  <p class="stat-label">Invested</p>
              </div>
              <div class="stat-item">
                  <p class="stat-number">৳ 7500000</p>
                  <p class="stat-label">Current Value</p>
              </div>
              <div class="stat-item">
                  <p class="stat-number">63%</p>
                  <p class="stat-label">Percent Change</p>
              </div>
          </div>
          <div class="profile-menu">
              <div class="menu-item" onclick="toggleForm('notifications-form')">
                  <ion-icon name="notifications-outline" class="menu-icon" style="color: #40C4FF;"></ion-icon>
                  <p>Last Purchase</p>
                  <ion-icon name="checkmark-circle" class="verified-icon"></ion-icon>
              </div>

              <div id="notifications-form" class="collapsible-content">
                  <form>
                      <label for="email-notifications">Email Notifications:</label>
                      <input type="checkbox" id="email-notifications" name="email-notifications"><br>
                      <label for="sms-notifications">SMS Notifications:</label>
                      <input type="checkbox" id="sms-notifications" name="sms-notifications"><br>
                      <button type="submit">Save</button>
                  </form>
              </div>
              <div class="menu-item" onclick="toggleForm('plan-details-form')">
                  <ion-icon name="calendar-outline" class="menu-icon" style="color: #FF7043;"></ion-icon>
                  <p>NID verification</p>
                  <ion-icon name="checkmark-circle" class="verified-icon"></ion-icon>
              </div>
              <div id="plan-details-form" class="collapsible-content">
                  <form>
                      <label for="name">Name:</label>
                      <input type="text" id="name" name="name"><br>
                      <label for="address">Address:</label>
                      <input type="text" id="address" name="address"><br>
                      <label for="mobile">Mobile Number:</label>
                      <input type="text" id="mobile" name="mobile"><br>
                      <button type="submit">Submit</button>
                  </form>
              </div>
              <div class="menu-item" onclick="toggleForm('privacy-policy-form')">
                  <ion-icon name="lock-closed-outline" class="menu-icon" style="color: #66BB6A;"></ion-icon>
                  <p>Add Bank Account</p>
                  <ion-icon name="checkmark-circle" class="verified-icon"></ion-icon>
              </div>
              <div id="privacy-policy-form" class="collapsible-content">
                  <p>Your privacy is important to us...</p>
              </div>
              <div class="menu-item" onclick="toggleForm('terms-service-form')">
                  <ion-icon name="document-text-outline" class="menu-icon" style="color: #7E57C2;"></ion-icon>
                  <p>Add BO Account</p>
                  <ion-icon name="checkmark-circle" class="verified-icon"></ion-icon>
              </div>
              <div id="terms-service-form" class="collapsible-content">
                  <p>By using this service, you agree to...</p>
              </div>
          </div>

          <script> 
              function toggleForm(formId) {
                const $form = $('#' + formId);
                if ($form.css('display') === 'block') {
                    $form.css('display', 'none');
                } else {
                    $form.css('display', 'block');
                }
               }
          </script>

          <div class="spacer"></div>
          <div class="logout">
              <ion-icon name="log-out-outline"></ion-icon>
              <p>Logout</p>
          </div>
          <div class="version">
              <p>Version 1.0.0</p>
          </div>
      </div>`)
  }
}