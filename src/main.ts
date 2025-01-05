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
    window["loadmaxlimit"] = function (): number {
        return getMaxLimit()
    }

    window["cloudsearch"] = function (queryString: string): Promise<any> {
        return new Promise((resolve, reject) => {
            function injectedCallback(data) {
                console.log(`Resolved cloudsearch(arg: ${queryString}):`, data)
                resolve(data)
            }
            let userid = window.ctl.cloudListManager.NI.uid
            var queryData = {
                data: { uid: userid, offset: 0, total: true, limit: 200, keyword: queryString },
                ext: {},
                key: `track_cloud_search-${userid}-${queryString}`,
                limit: 200,
                offset: 0,
                onload: injectedCallback,
                rkey: `r-track_cloud_search-${userid}-${queryString}-0-200`,
            }
            window.ctl.player.AJ[0].MF.$i(queryData)
            window.ctl.player.AJ[0].MF.Ge("doloadlist", queryData)
        })
    }

    betterncm.app.getSucceededHijacks().then((hijacks) => {
        const isHijackSucceeded = hijacks.includes("BetterCloudSearch::")
        if (!isHijackSucceeded) {
            console.error("Failed to hijack BetterCloudSearch::")
        }
    })
})