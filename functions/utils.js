
module.exports.parseurl = () => {
    const url = document.location.hash.toLowerCase();
    const request = url.split('/');
    return {
        resource: request[1],
        id: request[2] 
    }
}

module.exports.showloading = () =>{ 
    $(".overlay").addClass("active")
    .html('<div class="loadingio-spinner-disk-li8jvstzdq8"><div class="ldio-tur5clbaxg"><div><div></div><div></div></div></div></div>')
}

module.exports.hideloading = () =>{
    console.log('loading ends');
    $(".overlay").removeClass("active").html("");
}



module.exports.dsetoLocalstorage = async function () {
    localStorage.setItem('dsedata', JSON.stringify(data0['dsedata']));
    return JSON.stringify(data0['dsedata']) ;
}

// Remove zero from the chart datas. replace zero with previous day values
module.exports.removeZero = function(priceArray){
    if(priceArray.includes("0")){
        var index = priceArray.indexOf("0");
        priceArray[index] =priceArray[index-1] ;
        var index2 = priceArray.indexOf("0");
        priceArray[index2] =priceArray[index2-1] ;  //done twice because often has twice data with zero
        return priceArray
    } else {
        return priceArray
    }
}