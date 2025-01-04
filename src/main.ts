/*
 * @Author: aquamarine5 && aquamarine5_@outlook.com
 * Copyright (c) 2025 by @aquamarine5, RC. All Rights Reversed.
 */
plugin.onLoad(() => {
    const MAX_SEARCH_LIMIT = 2
    let called = false
    function injectedOnload() {
        if (!called) {
            called = true;

        }
    }
    window.addEventListener("hashchange", () => {
        if (window.location.hash.startsWith("#/m/search")) {
            let searchWord = ""
            window.location.hash.split("?")[1].split("&").forEach((item) => {
                if (item.startsWith("s=")) {
                    searchWord = decodeURIComponent(item.split("=")[1])
                }
            })
            window["cloudsearch"](searchWord).then((data) => {
                console.log(data)
                betterncm.utils.waitForElement(".m-plylist").then((element) => {
                    let ul = element.getElementsByTagName("ul")[0]
                    for (let index = 0; index < Math.min(MAX_SEARCH_LIMIT, data.total); index++) {
                        const songDetail = data.list[index];
                        const songId = songDetail.id
                        let searchItemli = document.createElement("li")
                        searchItemli.className = "itm f-cb j-item j-impress z-hascloud"
                        searchItemli.setAttribute("data-log", JSON.stringify({
                            events: ["_ev"],
                            isPage: false,
                            oid: "cell_pc_search_song",
                            params: {
                                s_calg: "",
                                s_cid: songId,
                                s_ctraceid: "",
                                s_ctrp: "",
                                s_ctype: "song",
                                s_position: 1
                            }
                        }))
                        searchItemli.setAttribute("data-res-id", songId)
                        searchItemli.setAttribute("data-res-menu", "true")
                        searchItemli.setAttribute("data-res-type", "4")
                        searchItemli.setAttribute("data-res-from", "7")
                        searchItemli.setAttribute("data-res-bi-event", "search")
                    }
                })
            })
        }
    })
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
    window["cloudsearchSync"] = function (queryString: string) {
        let userid = window.ctl.cloudListManager.NI.uid;
        let startTime = Date.now();
        let result = null;
        let isComplete = false;

        var queryData = {
            data: { uid: userid, offset: 0, total: true, limit: 200, keyword: queryString },
            ext: {},
            key: `track_cloud_search-${userid}-${queryString}`,
            limit: 200,
            offset: 0,
            onload: (data) => {
                result = data;
                isComplete = true;
            },
            rkey: `r-track_cloud_search-${userid}-${queryString}-0-200`,
        };

        window.ctl.player.AJ[0].MF.$i(queryData);
        window.ctl.player.AJ[0].MF.Ge("doloadlist", queryData);

        // 使用setTimeout避免死循环
        while (!isComplete && Date.now() - startTime < 20000) {
            // 短暂等待
            for (let i = 0; i < 1000000; i++) { }
        }

        return result;
    }
})