var utils = require('../functions/utils');

//<div data-tf-live="01HTQPX2J1G2949SDM3MKFNRF5"></div><script src="//embed.typeform.com/next/embed.js"></script>           
module.exports.HomePage =  {
    repeatRend : async () => { } ,
    
    afterRend : async (data0) =>  
    {
        
        $("#stocklist").html(`
    <div class="main" id="initials">   
        <div class="All-offers">
            <div class="offers">
                <div class="tweet-image">
                    <img src="https://as1.ftcdn.net/v2/jpg/03/13/18/98/1000_F_313189896_QyuLogiCyOnjJHMSyPWcPg9vqp5qIHGY.jpg" alt="Sample Image" class="tweet-image">
                </div>
                <!-- <br> -->
                <h4>🔥 One App : Thousands of Investment Opportunity </h4>
                <p> Invest in Bonds, Mutual Funds, Stocks, Sanchaya Patra, FDR from the app </p>
            </div>
            <div class="offers">
                <div class="tweet-image">
                    <img src="https://media.licdn.com/dms/image/D4D12AQGO8MRZH1BlwA/article-cover_image-shrink_720_1280/0/1682610497839?e=1719446400&v=beta&t=KT_1WQXL3QQh68uhKTg8-ehQ787sUJVH2uvXcw1QcZw" alt="Sample Image" class="tweet-image">
                </div>
                <br>
                <h4>📈 One App, Thousands of Investment Opportunity </h4>
                <p> Invest in Bonds, Mutual Funds, Stocks, Sanchaya Patra, FDR from the app </p>
            </div>
            <div class="offers">
                <div class="tweet-image">
                    <img src="https://cdn.idropnews.com/wp-content/uploads/2020/10/21142712/Investing-Apps.jpg" alt="Sample Image" class="tweet-image">
                </div>
                <br>
                <h4>📢 One App, Thousands of Investment Opportunity </h4>
                <p> Invest in Bonds, Mutual Funds, Stocks, Sanchaya Patra, FDR from the app </p>
            </div>
        </div>

        <div class="home-page-login">
            <div>
                <h2>Learn Earn and Grow </h2>
                <p>Login to get access to thousands of resource</p>
                <br>
                <a id="fin-advise-btn" href="/#/login">Login</a>
                <br>
                <p>Don't have an account ? Sign Up <a href="/#/login"><u>Here</u></a></p> 
            </div>
        </div>

        <div class="All-offers">
            <div class="home-page-card">
                <div class="home-page-revenue-title">DS30 Index</div>
                <div class="home-page-revenue">5,400</div>
                <div class="home-page-percentage">+24%</div>
                <div class="home-page-chart-container">
                    <div class="home-page-chart-overlay"></div>
                    <canvas id="revenueChart"></canvas>
                </div>
            </div>   

            <div class="home-page-card">
                <div class="home-page-revenue-title">GOLD (11.66 gm)</div>
                <div class="home-page-revenue">৳ 116,898</div>
                <div class="home-page-percentage">+44%</div>
                <div class="home-page-chart-container">
                    <div class="home-page-chart-overlay"></div>
                    <canvas id="revenueChart"></canvas>
                </div>
            </div>  
        </div>    


        <div class="explore-container">
        <header class="explore-header">
            <h1>Explore</h1>
            <p>Explore top funds by category</p>
            <div class="search-bar">
                <ion-icon name="search-outline">Life</ion-icon>
                <input type="text" placeholder="Search 3000+ mutual funds">
            </div>
        </header>

        <section class="explore-content">
            <div class="explore-card">
                <span class="explore-icon">
                    <ion-icon name="bar-chart-outline" style="color: darkgoldenrod;"></ion-icon>
                </span>                
                <div>
                    <h2>Ongoing NFOs</h2>
                    <p>Explore open new fund offerings</p>
                </div>
            </div>
            <div class="explore-card">
                <span class="explore-icon">
                    <ion-icon name="calculator-outline" style="color:gold"></ion-icon>
                </span>
                <div>
                    <h2>Save taxes</h2>
                    <p>Build wealth and save taxes</p>
                </div>
            </div>
            <div class="explore-card">
                <span class="explore-icon">
                    <ion-icon name="cash-outline" style="color: darkseagreen;"></ion-icon>
                </span>
                <div>
                    <h2>Low-cost index funds</h2>
                    <p>Long term wealth creation at low cost</p>
                </div>
            </div>
            <div class="explore-card">
                <span class="explore-icon">
                    <ion-icon name="flame-outline" style="color:darkkhaki;"></ion-icon>
                </span>
                <div>
                    <h2>Smart beta</h2>
                    <p>Hybrid of active and passive</p>
                </div>
            </div>
            <div class="explore-card">
                <span class="explore-icon">
                    <ion-icon name="shapes-outline" style="color: bisque;"></ion-icon>
                </span>
                <div>
                    <h2>Equity + Debt</h2>
                    <p>Stable growth</p>
                </div>
            </div>
            <div class="explore-card">
                <span class="explore-icon">
                    <ion-icon name="wallet-outline" style="color: cadetblue;"></ion-icon>
                </span>
                <div>
                    <h2>Alternatives to bank FDs</h2>
                    <p>Tax efficient; better returns than FDs</p>
                </div>
            </div>
            <div class="video-section-container">
                <div class="video-section">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6pBWgIPmztIjZKF1WVXRfQaV-QPrJCZULweuhJST1cgvtcaqAMeT6x43&s=10" alt="Basics of mutual funds">
                    <div class="video-info">
                        <h2>Basics of mutual funds</h2>
                        <p>13 lessons on the basics of mutual funds that every investor must know</p>
                    </div>
                </div>
                <div class="video-section">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6pBWgIPmztIjZKF1WVXRfQaV-QPrJCZULweuhJST1cgvtcaqAMeT6x43&s=10" alt="Basics of mutual funds">
                    <div class="video-info">
                        <h2>Basics of mutual funds</h2>
                        <p>13 lessons on the basics of mutual funds that every investor must know</p>
                    </div>
                </div>
            </div>

        </section>
    </div>

    <footer class="footer">

        <div class="registration">
            <p>eBiniyog</p>
            <p>Trade Licence Registration: INZ000031633</p>
            <a href="#">Terms & Conditions</a>
        </div>

    </footer>

    </div>
        `)

     // Generate random data for the chart
     const labels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
     const data = Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000));
     const ctx = document.getElementById('revenueChart').getContext('2d');
     const revenueChart = new Chart(ctx, {
         type: 'line',
         data: {
             labels: labels,
             datasets: [{
                 label: 'Revenue',
                 data: data,
                 radius: 0,
                 borderColor: 'green',
                 backgroundColor: 'white',
                 fill: false,
                 tension: 0.1
             }]
         },
         options: {
             responsive: true,
             maintainAspectRatio: true,
             scales: {
                 x: {display: false},
                 y: {display: false}
             },
             plugins: {
                 legend: {display: false}
             }
         }
     });    

    },

    rend : async () => {
    (window.screen.width > 550) ? location.href="/#/landing" : ''  
    utils.topNavSet('home',"eBiniyog")
    // $("#TopNavs").css('display', "block");    
    $("#contents").html(`
    <div id="stocklist"></div>`)
  }

}




