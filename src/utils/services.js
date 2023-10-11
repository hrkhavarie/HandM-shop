// const RapidAPIKey = import.meta.env.VITE_RAPIDAPIKEY ;
// const RapidAPIHost = import.meta.env.VITE_RAPIDAPIHOST ;

// console.log(RapidAPIKey);



// const url = 'https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US';
const url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&&sortBy=ascPrice&concepts=H%26M%20MAN';
// const url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&concepts=H%26M%20MAN';
export async function fetchProducts(){
  // const {country , categories , sortBy , concepts} = filters
  // const options = {
    // method: 'GET',
    const  headers = {
    //   'X-RapidAPI-Key': '922399268fmshe760f8b6e4743aep175f33jsn0a52bc2e2b54',
		// 'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
    // 'X-RapidAPI-Key': '442f6b0498mshc4a65af69940694p142531jsn0182b5f1b8a2',
		// 'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com' , 
    'X-RapidAPI-Key':  import.meta.env.VITE_RAPIDAPIKEY ,
    'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPIHOST,

    // "Content-Type": "application/json"
    }
  // };

  try {
    const response = await fetch(`https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&sortBy=decPrice&concepts=H%26M%20MAN` ,
     {headers:headers});
    const result = await response.json();
    console.log(result);
    return result;

  } catch (error) {
    console.error(error);
  }
}