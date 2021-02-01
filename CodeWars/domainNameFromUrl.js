function domainName(url){
  //your code here
  let startLink = ["http://", "https://", "www."];
  
  let result = url;
  
  for (let i = 0; i < startLink.length; i ++){
      if(result.includes(startLink[i]) ){
        result = result.split(startLink[i]).join("");
      }
  }
  
  
  return result.split(".")[0];
}

//shorter version online:

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};