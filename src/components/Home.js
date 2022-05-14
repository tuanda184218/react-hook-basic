import React, { useState } from 'react';
import _ from 'lodash';
import AddTodo from './addTodo';
import DisplayTodo from './DisplayTodo';

const Home = () => {
    const [todo, setTodo] = useState("");
    const [listtodo, setListTodo] = useState([
        { id: 'todo1', name: "watching yt" },
        { id: 'todo2', name: "using fb" },
        { id: 'todo3', name: "reading book" }

    ])

    const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const handleClickBtn = () => {
        if (!todo) {
            alert('todo name is not empty');
            return;
        }
        let todoId = randomIntFromInterval(4, 99999);
        let todoItem = {
            id: `todo${todoId}`, name: todo
        }

        setListTodo([...listtodo, todoItem]);
        setTodo('');
    }

    const handleClickDelete = (id) => {
        // alert('click me ' + id)
        let currentTodolist = _.clone(listtodo);
        currentTodolist = currentTodolist.filter(item => (item.id !== id)
        )
        setListTodo(currentTodolist)
    }

    const myInfor = { channel: "hoi dan it", age: 25 }

    return (
        <div>
            <AddTodo
                todo={todo}
                setTodo={setTodo}
                handleClickBtn={handleClickBtn}
            />

            <DisplayTodo
                childData={listtodo} // x=y =>   x <- y
                name={"Eric"}
                myInfor={myInfor}
                deleteTodoInParent={handleClickDelete}
            />

        </div>
    )

}

// class Home extends React.Component {

//     state = {
//         name: 'eric',
//         channel: 'hoi dan IT'
//     }

//     render() {
//         return (
//             <div>

//                 <label>Name: </label>
//                 <input type="text" onChange={(event) => this.setState({ name: event.target.value })} />
//                 <br />

//                 Hello to do list class with name = {this.state.name} and channel = {this.state.channel}
//             </div>
//         )
//     }
// }

export default Home;
