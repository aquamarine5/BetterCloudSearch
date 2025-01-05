/*
 * @Author: aquamarine5 && aquamarine5_@outlook.com
 * Copyright (c) 2025 by @aquamarine5, RC. All Rights Reversed.
 */
function RAW_w(t, e, n, i) {
    if (null == (t = t || {}).code || 200 == t.code || e.ignoreErrCode || n.ignoreErrCode) {
        var r = t;
        if (i) {
            if (f.Rf(e.format)) {
                var o = [];
                if (f.Oo(i.urls, function (e) {
                    o.push(u.call(this, t[e], i.conf[e], n))
                }, this),
                    o.push(n),
                    (r = e.format.apply(this, o)) && null != r.code && 200 != r.code)
                    return void l.call(this, e, n, {
                        key: n.key,
                        code: r.code,
                        json: r,
                        message: r.message || ""
                    })
            }
        } else
            r = u.call(this, t, e, n);
        var s = e.onload || n.onload
            , a = e.finaly || n.finaly || c;
        f.Nf(s) ? a.call(this, this.Ge(s, r), n) : a.call(this, (s || c).call(this, r), n)
    } else
        l.call(this, e, n, {
            key: n.key,
            code: t.code,
            json: t,
            message: t.message || ""
        })
}
function w(t, e, n, i) {
    if (e.key == 'track_search-list' && e.url == '/api/cloudsearch/pc')
        window.cloudsearch(n.data.s).then((data) => {
            t.result.songs = [].concat(data.list.slice(0, 2), t.result.songs);
            t.result.songCount = t.result.songs.length;
            if (null == (t = t || {}).code || 200 == t.code || e.ignoreErrCode || n.ignoreErrCode) {
                var r = t;
                if (i) {
                    if (f.Rf(e.format)) {
                        var o = [];
                        if (f.Oo(i.urls, function (e) {
                            o.push(u.call(this, t[e], i.conf[e], n))
                        }, this),
                            o.push(n),
                            (r = e.format.apply(this, o)) && null != r.code && 200 != r.code)
                            return void l.call(this, e, n, {
                                key: n.key,
                                code: r.code,
                                json: r,
                                message: r.message || ""
                            })
                    }
                } else
                    r = u.call(this, t, e, n);
                var s = e.onload || n.onload
                    , a = e.finaly || n.finaly || c;
                f.Nf(s) ? a.call(this, this.Ge(s, r), n) : a.call(this, (s || c).call(this, r), n)
            } else
                l.call(this, e, n, {
                    key: n.key,
                    code: t.code,
                    json: t,
                    message: t.message || ""
                })
        }
        );
    else
        RAW_w.apply(this, [t, e, n, i])
}