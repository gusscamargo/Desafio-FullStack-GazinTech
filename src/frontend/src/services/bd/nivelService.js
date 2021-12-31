import bd from "../../bd"

const Service = new Object()

Service.getAll = () => {
    return bd.get("/nivel/")
}

Service.get = id => {
    return bd.get(`/nivel/${id}`)
}

Service.create = data => {
    return bd.post("/nivel/", data)
}

Service.update = data => {
    return bd.put("/nivel/edit", data)
}

Service.delete = data => {
    return bd.delete("/nivel/delete", data)
}

export default Service