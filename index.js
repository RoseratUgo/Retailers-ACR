import list from "./list"

const result = document.getElementById('result')

let reseller = []

const fetchReseller = async () => {
    reseller = await list.json;
    console.log(reseller)
}

fetchReseller();