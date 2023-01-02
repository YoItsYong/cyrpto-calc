let price = document.getElementsByClassName('price');
let btn = document.getElementsByClassName('currency');
const URL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana&vs_currencies=usd'

const coinInput = document.getElementById('coin-price');
const qty = document.getElementById('qty');
const sellPrice = document.getElementById('sell-input');
const submit = document.getElementsByClassName('submit');
const result = document.getElementById('result')

const coinGecko = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data)
    const btcPrice = data.bitcoin
    const ethPrice = data.ethereum
    const solPrice = data.solana
    console.log(btcPrice)
    console.log(ethPrice)
    console.log(solPrice)

    const btcBtn = document.getElementById('btc')
    const ethBtn = document.getElementById('eth')
    const solBtn = document.getElementById('sol')

    btcBtn.addEventListener('click', () => {
        coinInput.value = btcPrice.usd;
        console.log(coinInput.value)
    })

    ethBtn.addEventListener('click', () => {
        coinInput.value = ethPrice.usd;
        console.log(coinInput.value)
    })

    solBtn.addEventListener('click', () => {
        coinInput.value = solPrice.usd
        console.log(coinInput.value)
    })
}

coinGecko();

function activeBtn(e, bg) {

    for (i = 0; i < btn.length; i++) {
        btn[i].style.backgroundColor = ''
        btn[i].style.color = 'black'
    }
    document.getElementById(e).style.display = 'block';
    if (bg.style.bakgroundColor != 'black') {
        bg.style.color = 'white';
        bg.style.backgroundColor = 'black';
    } else {
        bg.style.backgroundColor = '';
        bg.style.color = 'black';
    }
}

qty.addEventListener('input', () => {
    qty.textContent = this.value
})

sellPrice.addEventListener('input', () => {
    sellPrice.textContent = this.value
})

function run() {
    var currentPrice = coinInput.value;
    var currentQTY = qty.value;
    var currentSell = sellPrice.value;
    const resultInfo = document.getElementById('result-info');

    console.log(`Current price: ${currentPrice}`)
    console.log(`Current qty: ${currentQTY}`)
    console.log(`Current sell: ${currentSell}`)

    var profit = result.value = ((currentSell * currentQTY) - (currentPrice * currentQTY)).toFixed(2)
    var percent = (((currentPrice * currentQTY) / (currentSell * currentQTY))*100).toFixed(0)
    resultInfo.innerHTML = `If you sold your ${currentQTY} coin(s) for ${(currentSell * currentQTY)}, you would make a ${percent}% profit of:`
}


// let resultValue = result.value;


// console.log(resultValue);