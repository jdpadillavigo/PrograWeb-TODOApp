import { URL_BACKEND } from "../../config";
import type LoginRequestType from "../types/LoginRequestType";

const login = async (req : LoginRequestType) => {
    const resp = await fetch(`${URL_BACKEND}/usuarios/login`, {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({
                username : req.username,
                password : req.password
            })
        })

        return await resp.json()
}

export default login