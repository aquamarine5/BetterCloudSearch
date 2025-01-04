/*
 * @Author: aquamarine5 && aquamarine5_@outlook.com
 * Copyright (c) 2025 by @aquamarine5, RC. All Rights Reversed.
 */
plugin.onLoad(() => {
    const MAX_SEARCH_LIMIT = 8
    window["MAX_SEARCH_LIMIT"] = MAX_SEARCH_LIMIT
    window["cloudsearch"] = function (queryString: string) {
        return new Promise((resolve, reject) => {
            function injectedCallback(data) {
                console.log(data)
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
})