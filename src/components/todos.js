import Todo from "./todo";

function Todos({todos, ...handlers}) {
    return (<div className="todos">
        {todos.map((todo, index) => (
           <Todo key={`todo-${index + 1}`} todo={todo} {...handlers} />
        ))}
    </div>)
}

export default Todos;