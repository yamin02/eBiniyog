
module.exports.landing =  {
    repeatRend : async () => { } ,
    
    afterRend : async (data0) =>  
    {  
        
    },

    rend : async () => {
        $("body").html(`
        <header class="desktop-screen-header">
        <div class="desktop-screen-container">
            <img src="./resource/apple-icon.png" style="width: 40px;"> <h2 class="desktop-screen-logo">eBiniyog</h2>
            <nav class="desktop-screen-nav">
                <ul class="desktop-screen-nav-list">
                    <li><a href="#offer">What we offer</a></li>
                    <li><a href="#explore">Explore</a></li>
                    <li><a href="#learn">Learn</a></li>
                </ul>
            </nav>
            <a href="#signup" class="desktop-screen-signup-button">Sign-Up</a>
        </div>
    </header>
    <section class="desktop-screen-hero">
        <div class="desktop-screen-hero-content">
            <h2>Start Investing with <span class="desktop-screen-highlight">Easy Biniyog</span></h2>
            <p>eBiniyog is one stop solution for all kinds of investment opportutnities. One app and thousands of investmnet schemes. Mutual funds, stocks, FDR, REIT, Gold.</p>
            <div class="desktop-screen-app-buttons">
                <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="App Store" class="desktop-screen-store-button"></a>
                <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" class="desktop-screen-store-button"></a>
            </div>
            <div class="desktop-screen-mobile-image">
                <img src="./resource/landingPage.webp" alt="Mobile App">
            </div>
        </div>
    </section>
    <footer class="desktop-screen-footer">
        <div class="desktop-screen-footer-container">
            <div class="desktop-screen-footer-left">
                <img src="./resource/apple-icon.png" style="width: 30px;" alt="Your Brand Logo" class="desktop-screen-footer-logo"> <br>
                <p>eBiniyog is one stop solution for all kinds of investment opportutnities. Mutual funds, stocks, FDR, REIT, Gold. The app allows users to understand, analyze, and seize investment opportunities in the Bangladeshi mutual fund market and maximize their wealth.</p>
                <p>&copy; 2024 Easy Biniyog Ltd.</p>
            </div>
            <div class="desktop-screen-footer-middle">
                <h3>Connect</h3>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#">YouTube</a></li>
                </ul>
            </div>
            <div class="desktop-screen-footer-right">
                <h3>Address</h3>
                <address>
                    RISE Incubation Center, (2nd Floor), Azimpur Road, Dhaka-1000. <br>Email: info@ebiniyog.net
                </address>
                <h3>Get the app</h3>
                <div class="desktop-screen-app-buttons">
                    <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="App Store" class="desktop-screen-store-button"></a>
                    <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" class="desktop-screen-store-button"></a>
                </div>
            </div>
        </div>
    </footer>`)
  }

}




