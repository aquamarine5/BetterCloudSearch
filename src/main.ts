/*
 * @Author: aquamarine5 && aquamarine5_@outlook.com
 * Copyright (c) 2025 by @aquamarine5, RC. All Rights Reversed.
 */
const DEFAULT_MAX_SEARCH_LIMIT = 5
const MAX_SEARCH_LIMIT_CONFIG_KEY = "better-cloud-search_max-search-limit"

function getMaxLimit(): number {
    return parseInt(localStorage.getItem(MAX_SEARCH_LIMIT_CONFIG_KEY)) || DEFAULT_MAX_SEARCH_LIMIT
}

function setMaxLimit(value: number) {
    localStorage.setItem(MAX_SEARCH_LIMIT_CONFIG_KEY, value.toString())
}

plugin.onConfig((tools) => {
    let parentDiv = document.createElement("div")
    let textSpan = document.createElement("span")
    let input = tools.makeInput(
        getMaxLimit(),
        {
            oninput: event => { setMaxLimit(event.target.value) }
        }
    )
    textSpan.innerText = "Max Search Limit: "
    parentDiv.appendChild(textSpan)
    parentDiv.appendChild(input)
    return parentDiv
})

plugin.onLoad(() => {
    betterncm.app.getSucceededHijacks().then((hijacks) => {
        const isHijackSucceeded = hijacks.includes("BetterCloudSearch::")
        if (!isHijackSucceeded) {
            console.error("Failed to hijack BetterCloudSearch::")
        }
    })
})