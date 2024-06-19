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
                        borderColor: '#28a745',
                        borderWidth: 6,
                        fill: false,
                        tension: 0.1,
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
                $('.mf-active').removeClass('mf-active');
                $(this).addClass('mf-active');
                currentPeriod = $(this).data('period');
                myChart.data.datasets[0].data = chartData[currentPeriod];
                myChart.update();
            });
        
            $('#mf-cagr-period').on('change', function() {
                const selectedPeriod = $(this).val();
                $('#mf-cagr-value').text(cagrValues[selectedPeriod]);
            });
        
            $('.terms-info').on('click', function() {
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
        
        $(document).ready(function() {
            const allocations = $('.allocation') ;
            const max = Math.max(...allocations.map((_, el) => parseFloat($(el).data('allocation'))).get());
            
            allocations.each(function() {
                const value = parseFloat($(this).data('allocation'));
                $(this).css({
                    'border-bottom': '3px solid #28a745',
                    'width': `${(value / max) * 100 + 20}px`
                });
            });
        })
            $('.toggle-sectors').on( 'click' ,function() {
                // e.preventDefault();
                const hiddenItems = $(this).parent().find('.hidden');
                if (hiddenItems.is(':hidden')) {
                    hiddenItems.css('display', 'flex');
                    $(this).text('Hide all');
                } else {
                    hiddenItems.css('display', 'none');
                    $(this).text('View all');
                }
            });
        
        
    },

    rend : async () => {

    topNavSet('back',"Fund Info") ;
    var mf_details = { 
        'FundName' : 'Shanta Fixed Income Fund', 
        'CAGR' : 12.45 , 'NavPrice' : 60.33 , 'NavChange' : 0.13 , 
        'AUM' : 102.56 , 'Risk' : 'High' , 'Custodian' : 'BracBank',
        'Sector' : [['Finance',20.4] , ['Information Technology', 8.15] , ['Industrial',7.84] , ['Private Equity' , 6.8] , ['Energy' , 5.4] , ['Insurance', 3.7] ],
        'Holdings' : [['Brac Bank',20.4] , ['Genexil', 8.15] , ['BatBC',7.84] , ['Green Delta Insurace' , 6.8] , ['GP' , 5.4] , ['Robi', 3.7] ],
        'Dividend' : [[2024, 11.23] , [2023 , 10.34] ],
        'about' : 'Shanta Fixed Income Fund is a mutual fund scheme designed to generate stable returns at minimum risk for investors. It predominantly invests in high-rated fixed income securities (e.g., corporate bonds, government bonds, and money market instruments)',
    }

    var mfhtml = 
    `<div class="mf-container">
    <div class="mf-header">
        <img src="https://ucbstock.com.bd/wp-content/uploads/2020/11/cropped-ucbsbl_logo.png" alt="Logo">
        <h1>${mf_details.FundName}</h1>
    </div>
    <div class="mf-sub-header">Direct | Growth | Equity - ELSS</div>
    <div class="mf-main-content">

        <div class="mf-details">
            <div class="mf-nav-title">Current NAV (24th May 2024)</div>
            <div class="mf-price">৳ ${mf_details['NavPrice']}</div>
            <div class="mf-change">-${mf_details['NavChange']}%</div>
            <br>
            <div class="mf-row">
                <div class="mf-item">CAGR 
                    <select id="mf-cagr-period">
                        <option value="3">3 Years</option>
                        <option value="4">4 Years</option>
                        <option value="5" selected>5 Years</option>
                    </select>
                    <span id="mf-cagr-value">+${mf_details['CAGR']}%</span>
                </div>
                <div class="mf-item">Min. investment<span>৳ 5000.0</span></div>
            </div>
            <div class="mf-row">
                <div class="mf-item">Exit load <ion-icon class='terms-info' name="information-circle-outline" data-info="expense-ratio" ></ion-icon>
                <span>0.0%</span> </div>
                <div class="mf-item">Expense ratio <ion-icon class='terms-info' name="information-circle-outline" data-info="expense-ratio"></ion-icon> 
                <span>0.91%</span> </div>
            </div>
            <div class='mf-buttons-div'> 
                <button class="mf-btn" id='fin-advise-btn'>One-Time</button>
                <button class="mf-btn" id='fin-advise-btn'>Monthly SIP</button>
            </div>
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
<div class="fund-container">
<div class="fund-header">
<div class="mf-details">
            <div class="mf-row">
                <div class="mf-item">AUM <span id="mf-cagr-value">${mf_details['AUM']} cr</span></div>
                <div class="mf-item">Risk Involved<span>${mf_details['Risk']}</span></div>
            </div>
            <div class="mf-row">
                <div class="mf-item">AUM <span id="mf-cagr-value">102.45 cr</span></div>
                <div class="mf-item">Risk Involved<span>High</span></div>
            </div>
            <div class="mf-row">
                <div class="mf-item">Inception<span>22 Aug,2022</span> </div>
                <div class="mf-item">Custodian<span>Brac Bank Ltd</span> </div>
            </div>
        </div>
</div>

<div class="fund-manager">
    <img src="https://businesspostbd.com/files/thumbs/daily-media/2022/07/14/964x551/36.webp" alt="Mirae Asset">
    <div>Fund manager <br> <a> Mr. Neelesh Surana</a> </div>
</div>
<br>
<div class="fund-details">
    <h3>About the fund</h3> <br>
    <p>${mf_details['about']}</p>
</div>

<div class="fund-sectors">
   <h2>Sectors</h2> <br>
    <ul id="fund-sector-list">
    ${mf_details.Sector.map((i,index) => `<li class=${ index > 3 ? 'hidden' : ''}><span>${i[0]}</span><span class="allocation" data-allocation="${i[1]}">${i[1]}%</span></li>`).join(' ')}
    </ul>
    <button class="toggle-sectors">View all</button>
</div>

<div class="fund-sectors">
    <h2>Holdings</h2> <br>
    <ul id="fund-sector-list">
    ${mf_details.Holdings.map((i,index) => `<li class=${ index > 3 ? 'hidden' : ''}><span>${i[0]}</span><span class="allocation" data-allocation="${i[1]}">${i[1]}%</span></li>`).join(' ')}
    </ul>
    <button class="toggle-sectors">View all</button>
</div>
<div class="fund-sectors">
    <h2>Dividends</h2> <br>
    <ul id="fund-sector-list">
    ${mf_details.Dividend.map((i,index) => `<li class=${ index > 3 ? 'hidden' : ''}><span>${i[0]}</span><span class="allocation" data-allocation="${i[1]}">${i[1]}%</span></li>`).join(' ')}
    </ul>
</div>
</div>`
    $("#contents").html(mfhtml);

  }

}




