const btn1 = document.getElementById("btn");
const joke1 = document.getElementById("joke");
const apiKey = "VpmVEWTD/5WTykLLiNQYBA==cpmEsGz2WoiHLyHh";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1  ";
async function click() {

try {
    joke1.innerText = "Wait for best one.....";
    btn1.disabled = true;
    btn1.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    btn1.disabled = false;
    btn1.innerText = "Tell me a joke";

    joke1.innerText = data[0].joke;
  }
 catch (error) {
    joke1.innerText = "check your network connection";
    btn1.disabled = false;
    btn1.innerText = "Tell me a joke";
    console.log(error);

}
}

btn1.addEventListener("click", click);
