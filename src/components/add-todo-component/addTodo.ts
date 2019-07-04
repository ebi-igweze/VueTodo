import Vue from 'vue';

interface AddTodoComponent extends Vue {
    title: string;
    addTodo: () => void;
}

// new todo data
const data = () => {
    return {
        title: ''
    };
};

const methods = {

    addTodo(this: AddTodoComponent, e: MouseEvent) {
        // prevent submission of form
        e.preventDefault();

        const newTodo: NewTodo = {
            title: this.title,
            completed: false
        };

        // publish new todo
        this.$emit('add-todo', newTodo);
        // clear current title
        this.title = '';
    }
};


export default Vue.extend({
    name: 'AddTodo',
    data,
    methods
});