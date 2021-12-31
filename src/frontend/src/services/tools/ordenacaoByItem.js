export const ordenacaoByItem = (data, selectOrdenacao) => {
    if (selectOrdenacao === "nenhuma"){
        return [...data]
    }else{
        if (selectFormaOrndenacao === "crescente") {
            return [...data].sort((a, b) => (a[selectOrdenacao] > b[selectOrdenacao]) ? 1 : ((b[selectOrdenacao] > a[selectOrdenacao]) ? -1 : 0))

        }

        return [...data].sort((a, b) => (a[selectOrdenacao] < b[selectOrdenacao]) ? 1 : ((b[selectOrdenacao] < a[selectOrdenacao]) ? -1 : 0))
    }
}