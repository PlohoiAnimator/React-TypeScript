import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import UserPage from './components/UserPage'
import TodoPage from './components/TodoPage'
import { NavLink } from 'react-router-dom'
import UserItemPage from './components/UserItemPage'
import TodoItemPage from './components/TodoItemPage'

function App() {

  return (
      <BrowserRouter>
      
        <div>
          <NavLink style={{border:'1px solid black', padding:10, margin:10}} to='/users'>Список пользователей</NavLink>
          <NavLink style={{border:'1px solid black', padding:10, margin:10}} to='/todos'>Список дет</NavLink>
          <button>Back</button>
        </div>

        <div>
          <Route path={'/users'} exact>
            <UserPage/>
          </Route>

          <Route path='/todos' exact>
            <TodoPage/>
          </Route>

          <Route path='/users/:id'>
            <UserItemPage/>
          </Route>

          <Route path='/todos/:id'>
            <TodoItemPage/>
          </Route>
        </div>
      </BrowserRouter>
  )
}

export default App




/*  
{id: 1, name: 'Vadim', email: 'Email', address: {street: 'Street', city: 'City', zipcode: 2312}},
{id: 2, name: 'Gosha', email: 'Email', address: {street: 'Street', city: 'City', zipcode: 2312}}
*/