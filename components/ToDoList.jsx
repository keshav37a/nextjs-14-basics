import ToDo from '@/components/ToDo';

const ToDoList = ({ todos }) => {
    return (
        <div>
            {todos.map((todo) => {
                return <ToDo key={todo.id} todo={todo} />;
            })}
        </div>
    );
};

export default ToDoList;
