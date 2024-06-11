const { topNavSet } = require("../functions/utils");

module.exports.infotab =  {
    repeatRend : async () => { } ,
    
    afterRend : async (data0) =>  
    {  
        $(document).ready(function() {
            const ctx = $('#mf-myChart')[0].getContext('2d');
            const chartData = {
                '3M': Array.from({length: 12}, () => Math.floor(Math.random() * 100)),
                '6M': Array.from({length: 12}, () => Math.floor(Math.random() * 100)),
                '1Y': Array.from({length: 12}, () => Math.floor(Math.random() * 100)),
                '2Y': Array.from({length: 12}, () => Math.floor(Math.random() * 100)),
                '3Y': Array.from({length: 12}, () => Math.floor(Math.random() * 100)),
                'Max': Array.from({length: 12}, () => Math.floor(Math.random() * 100)),
            };
        
            let currentPeriod = '3Y';
            const cagrValues = {
                '3': '+10.23%',
                '4': '+11.45%',
                '5': '+12.65%',
            };
        
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: 'NAV',
                        data: chartData[currentPeriod],
                        borderColor: '#ff5733',
                        borderWidth: 2,
                        fill: false,
                        tension: 0.1
                    }]
                },
                options: {
                    animation: false,
                    scales: {
                        xAxes: [{
                            display: false,
                        }],
                        yAxes: [{
                            display: false,
                        }]
                    },
                    tooltips: {
                        enabled: true,
                        mode: 'nearest',
                        intersect: false,
                        callbacks: {
                            label: function(tooltipItem, data) {
                                return ` ${tooltipItem.yLabel}`;
                            }
                        }
                    },
                    legend: {
                        display: false
                    }
                }
            });
        
            $('.mf-nav button').on('click', function() {
                $('.nav button.active').removeClass('active');
                $(this).addClass('active');
                currentPeriod = $(this).data('period');
                myChart.data.datasets[0].data = chartData[currentPeriod];
                myChart.update();
            });
        
            $('#mf-cagr-period').on('change', function() {
                const selectedPeriod = $(this).val();
                $('#cagr-value').text(cagrValues[selectedPeriod]);
            });
        
            $('.fa-info-circle').on('click', function() {
                const infoType = $(this).data('info');
                let infoText = '';
                if (infoType === 'exit-load') {
                    infoText = 'Exit load is a fee charged to investors when they redeem their units before a specified period.';
                } else if (infoType === 'expense-ratio') {
                    infoText = 'Expense ratio is the fee charged by the fund to manage the investments, expressed as a percentage of the fund\'s average assets.';
                }
                $('#popup-content').text(infoText);
                $('#popup').css('display', 'block');
                $('.popup-overlay').css('display', 'block');
            });
        });
        

    },

    rend : async () => {

        topNavSet('back',"Fund Info")

    $("#BottomSlider").show();

    $(".nav-two a").removeClass("navactive");
    $(".fa-house-user").addClass("navactive");

    $("#contents").html(`<div class="mf-container">
    <div class="mf-header">
        <img src="https://ucbstock.com.bd/wp-content/uploads/2020/11/cropped-ucbsbl_logo.png" alt="Logo">
        <h1>UCB AML FIRST MUTUAL FUND</h1>
    </div>
    <div class="mf-sub-header">Direct | Growth | Equity - ELSS</div>
    <div class="mf-main-content">
        <div class="mf-details">
            <div class="mf-nav-title">Current NAV (24th May 2024)</div>
            <div class="mf-price">৳ 60.33</div>
            <div class="mf-change">-0.13%</div>
            <br>
            <div class="mf-row">
                <div class="mf-item">CAGR 
                    <select id="mf-cagr-period">
                        <option value="3">3 Years</option>
                        <option value="4">4 Years</option>
                        <option value="5" selected>5 Years</option>
                    </select>
                    <span id="mf-cagr-value">+12.65%</span>
                </div>
                <div class="mf-item">Min. investment<span>₹500.0</span></div>
            </div>
            <div class="mf-row">
                <div class="mf-item">Exit load <a class="fas fa-info-circle" data-info="exit-load"></a>
                <span>0.0%</span> </div>
                <div class="mf-item">Expense ratio <a class="fas fa-info-circle" data-info="expense-ratio"></a>
                <span>0.91%</span> </div>
            </div>
            <button class="mf-login">Login to invest</button>
        </div>
        <div class="mf-chart-container">
            <canvas id="mf-myChart" class="mf-chart"></canvas>
            <div class="mf-nav">
                <button data-period="3M" class="mf-active">3M</button>
                <button data-period="6M">6M</button>
                <button data-period="1Y">1Y</button>
                <button data-period="2Y">2Y</button>
                <button data-period="3Y">3Y</button>
                <button data-period="Max">Max.</button>
            </div>
        </div>
    </div>
</div>
<div class="popup-overlay"></div>
<div class="popup" id="popup">
    <p id="popup-content"></p>
    <button id="closePopupBtn">Close</button>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>`)
  }

}




