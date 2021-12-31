export const ordenacaoByItem = (data, selectOrdenacao, selectFormaOrndenacao) => {
    if (selectOrdenacao === "nenhuma"){
        return [...data]
    }else{
        if (selectFormaOrndenacao === "crescente") {
            return [...data].sort((a, b) => (eval(`a.${selectOrdenacao} > b.${selectOrdenacao}`)) ? 1 : (eval(`b.${selectOrdenacao} > a.${selectOrdenacao}`) ? -1 : 0))

        }

        return [...data].sort((a, b) => (eval(`a.${selectOrdenacao} < b.${selectOrdenacao}`)) ? 1 : (eval(`b.${selectOrdenacao} < a.${selectOrdenacao}`) ? -1 : 0))
    }
}