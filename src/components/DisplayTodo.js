const DisplayTodo = (props) => {

    const deleteTodoFromChild = (id) => {
        props.deleteTodoInParent(id);
    }
    const listtodo = props.childData;
    console.log("check data :  ", props)
    return (
        <div>
            <div>List todo:</div>
            {listtodo.map((item, index) => {
                return (
                    <div key={item.id} onClick={() => deleteTodoFromChild(item.id)}> {item.name}</div>
                )
            })}
        </div>
    )
}

export default DisplayTodo;