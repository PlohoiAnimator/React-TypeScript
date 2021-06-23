import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { FC } from "react"
import { useHistory } from "react-router-dom"
import { IUser } from "../types/types"
import List from "./List"
import UserItem from "./UserItem"

const UserPage:FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const history = useHistory()

    async function fethcUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch(e) {
            alert(e)
        }
    }

    useEffect(() => {
        fethcUsers()
    }, [])

    return(
        <List
            items={users}
            renderItem={(user: IUser) => 
            <UserItem 
                onClick={() => history.push('/users/' + user.id)}
                user={user}
                key={user.id}/>}
        />
    )
}

export default UserPage