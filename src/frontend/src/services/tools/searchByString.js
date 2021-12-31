export const searchByString = (data, currentSearch, campName) => {
    const result = [];

    [...data].map((item, indexo) => {
        if (eval(`item.${campName}.search(currentSearch) > -1`)) result.push(item)
    })

    return result
}