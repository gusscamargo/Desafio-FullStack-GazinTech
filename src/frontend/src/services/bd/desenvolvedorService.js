import bd from "../../bd"

const Service = new Object()

Service.getAll = () => {
    return bd.get("/desenvolvedor/")
}

Service.get = id => {
    return bd.get(`/desenvolvedor/${id}`)
}

Service.create = data => {
    return bd.post("/desenvolvedor/", data)
}

Service.update = data => {
    return bd.put("/desenvolvedor/edit", data)
}

Service.delete = data => {
    return bd.delete("/desenvolvedor/delete", data)
}

export default Service