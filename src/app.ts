import Vue from 'vue';
import Todos from './components/todo-component/Todos';
import Header from './shared/components/header-component/Header';
import AddTodo from './components/add-todo-component/AddTodo';
import axios from 'axios';



// app components
const components = { Header };

export default Vue.extend({
    name: 'App',
    components
});