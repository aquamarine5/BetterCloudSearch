import { Config } from "./ui/config";

plugin.onConfig(()=>{
    const element=document.createElement("div");
    ReactDOM.render(Config(),element);
    return element;
})

plugin.onLoad(()=>{
    console.log("Plugin loaded");
    channel
})