import { Config } from "./ui/config";

plugin.onConfig(()=>{
    const element=document.createElement("div");
    ReactDOM.render(Config(),element);
    return element;
})

plugin.onLoad(()=>{
    
    console.log("---------------------------------------------------------------Plugin loaded");
    console.log(betterncm.ncm.findApiFunction("batchGetCloudTrack"))
    console.log(betterncm.ncm.findApiFunction("searchCloud"))
    setTimeout(()=>{
        console.log("-------------------------------------")
        console.log(betterncm.ncm.findApiFunction("batchGetCloudTrack"))
    console.log(betterncm.ncm.findApiFunction("searchCloud"))
    },5000)
    betterncm.utils.delay(5000).then(()=>{console.log(111111111111)})
    betterncm.utils.waitForElement<HTMLDivElement>('.m-player').then((element)=>{console.log(element);console.log("xxxxxxxxxxxxxxxxxxxxxxxxxx------------------")})
})