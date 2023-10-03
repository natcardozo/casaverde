import { useState, useEffect } from "react"
import { IProduct } from "interfaces/IProduct";

export const useFetchProducts = () => {
    const [data, setData] = useState<IProduct[]>([]);

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/nathcardozo/a809358a30b09fef6a760d8666da09ed/raw/")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    }, [])

    return data;
}
