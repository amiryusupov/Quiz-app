export function generateUrl(obj) {
    let query = '?'
    for (let a in obj) {
        query = query + `${a}=${obj[a]}&`
    }
    return query
}

export const fetcher = (...args) => fetch(...args).then(res => res.json())

export function shuffleArr(arr) {
    return [...arr].sort(() => Math.random() - 0.5)
}