import axios, { Axios } from "axios"
import { useEffect, useState } from "react"

const useLoadMyData = (API) => {
    const [TchDatas, setTchDatas] = useState([])
    const [Loading, setloading] = useState(true)
    const [Error, setError] = useState(null)

    useEffect(() => {
        setloading(true)
        axios(API)
            .then(res => setTchDatas(res.data))
            .catch(err => setError(err))
            .finally(() => setloading(false))
    }, [API])
    return { TchDatas, Loading, Error }
}
export default useLoadMyData;