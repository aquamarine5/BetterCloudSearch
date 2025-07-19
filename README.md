# BetterCloudSearch

[![wakatime](https://wakatime.com/badge/github/aquamarine5/BetterCloudSearch.svg)](https://wakatime.com/badge/github/aquamarine5/BetterCloudSearch)

![readme](preview.png)

## 作者其他的BetterNCM插件

- [BetterListenCount](https://github.com/aquamarine5/BetterListenCount) 批量查询歌单内歌曲播放次数
- [BetterCloudRematcher](https://github.com/aquamarine5/BetterCloudRematcher) 右键无版权音乐自动匹配云盘内歌曲文件并重绑定

## 功能

- 默认搜索歌曲时遇到无版权音乐并不会出现在搜索结果内。
- 安装BetterCloudSearch后可以搜索存储在云盘的音乐，并插入到搜索结果的最前。

## 实现

### `cloudsearch`：搜索云盘音乐

```ts
let queryString: string
let userid = window.ctl.cloudListManager.NI.uid;
var queryData = {
    data: { uid: userid, offset: 0, total: true, limit: 200, keyword: queryString },
    ext: {},
    key: `track_cloud_search-${userid}-${queryString}`,
    limit: 200,
    offset: 0,
    onload: function(){console.log(arguments)},
    rkey: `r-track_cloud_search-${userid}-${queryString}-0-200`,
};
window.ctl.player.AJ[0].MF.$i(queryData);
window.ctl.player.AJ[0].MF.Ge("doloadlist", queryData);
```

> [!NOTE]
> 一点一点打breakpoint挖出来的😢

### BetterNCM.Hijacks: 搜索时响应

- 这里通过Hijack修改了`core.js`
- 在返回搜索结果（`searchload`）时，对数据进行插入操作
