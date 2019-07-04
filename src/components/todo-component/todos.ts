import Vue from 'vue';
import TodoItem from '../todo-item-component/TodoItem';

const props = {
    todos: Array
};

const components = { TodoItem };

export default Vue.extend({
    name: 'Todos',
    props,
    components
});