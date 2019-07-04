interface NewTodo {
    title: string;
    completed: boolean;
}

interface Todo extends NewTodo {
    id: string;
}