const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const request = async (url) => {     
  try {       
    document.querySelector('.Loading').style.display = 'block';
    const result = await fetch(url);       
    document.querySelector('.Loading').style.display = 'none';
    return result.json();     
  } catch (e) {       
    document.querySelector('.Loading').style.display = 'none';
    console.warn(e);     
  }
}    

export default {     
  fetchCats: keyword => {       
    return request(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);     
  },     
  
  fetchRandomCats: () => {       
      return request(`${API_ENDPOINT}/api/cats/random50`);     
    }   
};