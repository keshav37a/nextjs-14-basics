import db from '@/utils/db';
import ToDoList from '@/components/TodoList';

const getToDosList = async () => {
    const todos = await db.todo.findMany({
        where: {},
        orderBy: {
            createdAt: 'desc',
        },
    });

    return todos;
};

const ToDosPage = async () => {
    const todos = await getToDosList();

    return (
        <div>
            <ToDoList todos={todos} />
        </div>
    );
};

export default ToDosPage;
