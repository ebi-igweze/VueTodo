import Vue from 'vue';

interface TodoItemComponent {
    todo: Todo;
    markComplete: () => void;
}


const props = ['todo'];

const methods = {
    markComplete() {
        const $this = this as TodoItemComponent;
        $this.todo.completed = !$this.todo.completed;
    }
};

export default Vue.extend({
    name: 'TodoItem',
    props,
    methods
});