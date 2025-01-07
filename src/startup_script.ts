/*
 * @Author: aquamarine5 && aquamarine5_@outlook.com
 * Copyright (c) 2025 by @aquamarine5, RC. All Rights Reversed.
 */
(() => {
    window["loadmaxlimit"] = function (): number {
        return parseInt(localStorage.getItem(MAX_SEARCH_LIMIT_CONFIG_KEY)) || DEFAULT_MAX_SEARCH_LIMIT
    }

    window["cloudsearch"] = function (queryString: string): Promise<any> {
        return new Promise((resolve, reject) => {
            function injectedCallback(data) {
                console.log(`Resolved cloudsearch(arg: ${queryString}):`, data)
                resolve(data)
            }
            let userid = window.ctl.cloudListManager.NI.uid
            let loadmaxlimitnumber = window["loadmaxlimit"]()
            var queryData = {
                data: { uid: userid, offset: 0, total: true, limit: loadmaxlimitnumber, keyword: queryString },
                ext: {},
                key: `track_cloud_search-${userid}-${queryString}`,
                limit: loadmaxlimitnumber,
                offset: 0,
                onload: injectedCallback,
                rkey: `r-track_cloud_search-${userid}-${queryString}-0-${loadmaxlimitnumber}`,
            }
            window.ctl.player.AJ[0].MF.$i(queryData)
            window.ctl.player.AJ[0].MF.Ge("doloadlist", queryData)
        })
    }
})();