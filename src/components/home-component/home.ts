import Vue from 'vue';
import Todos from '../todo-component/Todos';
import Header from '../../shared/components/header-component/Header';
import AddTodo from '../../components/add-todo-component/AddTodo';
import axios from 'axios';



interface AppComponent extends Vue {
    message: string;
    todos: Todo[];
    deleteTodo: (id: string) => void;
    addTodo: (todo: Todo) => void;
    created: () => void;
}

// app data
const data = () => {
    return {
        message: "My Gee",
        todos: []
    };
};

// json placeholder endpoint
const END_POINT = 'https://jsonplaceholder.typicode.com/todos';


// app methods
const methods = {
    deleteTodo(this: AppComponent, id: string) {
        axios.delete(`${END_POINT}/${id}`)
            .then(res => this.todos = this.todos.filter(t => t.id !== id))
            .catch(err => console.log(err));
    },
    addTodo(this: AppComponent, newTodo: NewTodo) {
        // post new todo
        axios.post(END_POINT, newTodo)
            // add new todo to app
            .then(res => this.todos.push(res.data))
            .catch(error => console.log(error));
    },
};

const created = function (this: AppComponent) {
    console.log("created");
    // fetch todos from endpoint
    axios.get(`${END_POINT}?_limit=5`)
        .then(response => this.todos = response.data)
        .catch(error => console.error(error));
};

// app components
const components = {
    Todos,
    Header,
    AddTodo
};

export default Vue.extend({
    name: 'Home',
    data,
    methods,
    created,
    components
});