import axios from "axios"
import { useEffect, useState } from "react"

const useLoadMyData = () => {
    const [TchDatas, setTchDatas] = useState([])
    const [Loading, setloading] = useState(true)
    const [Error, setError] = useState(null)

    useEffect(() => {
        setloading(true)
        axios('/TeachersData.json')
            .then(res => setTchDatas(res.data))
            .catch(err => setError(err))
            .finally(() => setloading(false))
    }, [])
    return { TchDatas, Loading, Error }
}
export default useLoadMyData;