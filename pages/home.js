var utils = require('../functions/utils');

//<div data-tf-live="01HTQPX2J1G2949SDM3MKFNRF5"></div><script src="//embed.typeform.com/next/embed.js"></script>           
module.exports.HomePage =  {
    repeatRend : async () => { } ,
    
    afterRend : async (data0) =>  
    {
        
        $("#stocklist").html(`<div class="main" id="initials">
           
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

        <div class="typeform" id="typeforms">
            <div>
                <h2>Learn Earn and Grow </h2>
                <p>Login to get access to thousands of resource</p>
                <br>
                <button id="fin-advise-btn">Login</button>
                <br>
                <p>Don't have an account ? Sign Up <a>Here</a></p> 

            </div>
        </div>

        `)
        console.log("THIS IS AFTER REND DNDND")
        $("#fin-advise-btn").click(function () { 
            $(".overlay").addClass("active")
            .html(`<div data-tf-live="01HTQPX2J1G2949SDM3MKFNRF5">
            </div><script src="//embed.typeform.com/next/embed.js"></script>
            <button id="close-typeform" onclick="closeOverlay()">Close</button>`);       
        });
        // if(data0){
        //     console.log('trueeee');
        //     var data = JSON.parse(data0) 
        // }else {
        //     var data = JSON.parse(localStorage.getItem('dsedata'))
        // }
        // console.log(JSON.parse(data0))
        // console.log(data)

        data = [
        { 'name' : 'GOLD' , 'change' : 45 , 'trade' : 340  , 'ltp' : '10,185' , 'changeP' : 3  } ,
        {'name' : 'SanchayPatra' , 'change' : 45 , 'trade' : 340  , 'ltp' : '11.5%' , 'changeP' : 3  } ,
        {'name' : 'BOND' , 'change' : 45 , 'trade' : 340  , 'ltp' : '13%' , 'changeP' : 3  } ,
        {'name' : 'MutualFund' , 'change' : 45 , 'trade' : 340  , 'ltp' : '7%' , 'changeP' : 15  },
        {'name' : 'DS30' , 'change' : 45 , 'trade' : 340  , 'ltp' : '17%' , 'changeP' : -13  } ] 
        var count = 0
        for (var i in data)
        {
            var changeval = (data[`${i}`].change < 0)? `${data[`${i}`].change}` : `+${data[`${i}`].change}`
            var color = data[`${i}`].changeP < 0 ? 'red' : 'green' ;
            if(data[`${i}`].changeP==0){color ="blue"} ;

            $("#stocklist").append(`

            <div class="flex main" id="${data[i].name}">
                <div id="name" class="name" style="cursor: pointer;" onclick="window.location='#/eachstock/${data[i].name}'">
                <p>${data[i].name}</p>
                </div>
            
                <div class="chart" id="chart${count}" onclick="alert('This is a chart made from last 15 days')"></div>

                <div id="icon"><i id="fav${data[i].name}" class="fas fa-star ${localStorage.fav? (JSON.parse(localStorage.fav).includes(data[i].name)?'checked':'' ):''}" onclick="fav('${data[i].name}')"></i></div>
                <div id="data">
                <p class="${color}">${data[`${i}`].ltp}</p>
                <p class="${color}1 change">${changeval} , ${data[`${i}`].changeP}%</p>
                </div>
            </div>            
            `)


       var dataDSE_forChart = [14,13,11,13,9,8,10,12,11,10,13,12,10,9,11,13,14,15,17]
       var myarr = Array(dataDSE_forChart.length).fill().map((x,i)=>i) ;
       var datachart =  { labels: myarr ,  series: [{className:`stroke${color}`,  meta:"OK", data: utils.removeZero(dataDSE_forChart) } ]}
         
       new Chartist.Line(`#chart${count}`, datachart , 
       {
           showArea: true,
           width: 140,
           showPoint:false,
           axisX:{  
               showGrid : false ,
               showLabel : false , 
               offset : 15,
               labelInterpolationFnc: function(value, index) {
                   return index % 10 === 0 ? value : null;
               }
           } ,
           axisY : {
               showGrid : true ,
               showLabel : true ,
               }
           });

            count = count +1 ;
        }
    },

    rend : async () => {
    (window.screen.width > 550) ? location.href="/#/landing" : ''  
    utils.topNavSet('home',"eBiniyog")
    // $("#TopNavs").css('display', "block");    
    $("#contents").html(`
    <div id="stocklist"></div>`)
  }

}




