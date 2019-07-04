<template>
    <div class="todo-item" v-bind:class="{'is-complete': todo.completed }">
        <p>
            <input type="checkbox" v-on:change="markComplete" v-bind:checked="todo.completed" />    
            {{ todo.title }}
            <button class="del" v-on:click="$emit('del-todo', todo.id)">x</button>
        </p>

    </div>
</template>

<script src="./todoItem.ts"></script>
<style src="./todoItem.css" ></style>
