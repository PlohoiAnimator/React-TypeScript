import { FC } from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { IUser } from "../types/types"
import { useParams } from "react-router"
import { useHistory } from "react-router-dom"

interface UserItemPageParams {
    id: string
}

const UserItemPage: FC = () => {
    
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>()
    const history = useHistory()

    async function fethcUser() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        } catch(e) {
            alert(e)
        }
    }

    useEffect(() => {
        fethcUser()
    }, [])

    return(
        <div>
            <button  onClick={() => history.push('/users')}>Go to Back</button>
            <h1>Страницы: {user?.name}</h1>
            {user?.address.city}. {user?.email}
        </div>
    )
}

export default UserItemPage