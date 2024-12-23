import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, Setmenu] = useState([]);
    const [loading, Setloading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                Setmenu(data)
                Setloading(false)
            });

    }, [])
    return [menu, loading]
}

export default useMenu;