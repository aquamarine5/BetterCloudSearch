export function Config(){
    let k=betterncm.ncm.findApiFunction("searchCloud")
    return (
        <div>
            <h1>aaBetterNCM Plugin Config</h1>
            <h2>{k}</h2>
        </div>
    )
}