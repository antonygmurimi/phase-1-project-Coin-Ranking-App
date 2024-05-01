

const baseUrl= "https://api.coinranking.com/v2/coins"
const proxyUrl = "https://cors-anywhere.herokuapp.com/"
const apiKey = "coinranking00ff8f67adcbaf94d8d7eace08b2e73946ff067577e9d193"



  
  fetch(`${proxyUrl}${baseUrl}`, {
    method: "GET",
    headers: {
        'Content-Type': `application/json`,
        'x-access-token': `${apiKey}`,
        'Access-Control-Allow-Origin': `*`

    }

  })
  .then((response) => {
    if(response.ok) {
        response.json().then((json)=> {
             console.log(json.data.coins)

             let coinsData = json.data.coins
             if(coinsData.length>0) {
                var cryptoCoins = ""
             }

             //for loop starts
             coinsData.forEach((coin) => {
                cryptoCoins += "<tr>"
                cryptoCoins += `<td> ${coin.uuid}</td>`;
                cryptoCoins += `<td> ${coin.btcPrice}</td>`;
                cryptoCoins += `<td> ${coin.rank}</td>`;
                cryptoCoins += `<td> ${coin.tier}</td>`;
                cryptoCoins += `<td> ${coin.name}</td>`;
                cryptoCoins += `<td> ${coin.price}</td>`;
                cryptoCoins += `<td> ${coin.symbol} </td>`;
                "<tr>";

             })
             //append with html
             document.getElementById("data").innerHTML = cryptoCoins
        })
    }

  })
  .catch((error) =>{
    console.log(error)
  })
       



 //coinranking00ff8f67adcbaf94d8d7eace08b2e73946ff067577e9d193
  