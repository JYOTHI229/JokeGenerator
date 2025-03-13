let btn = document.querySelector("button");
let p = document.querySelector("p");

url = "https://icanhazdadjoke.com/";
const config = {headers:{Accept:"application/json"}};


async function getJoke(req,res){
    try{
        let res = await fetch(url,config);
        let data = await res.json();
        return data.joke;
    }
    catch(err){
        console.log(err);
    }
};

btn.addEventListener("click", async ()=>{
    p.innerText = await getJoke();
 }
);



//getJoke();