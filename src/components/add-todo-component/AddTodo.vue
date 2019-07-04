<template>
    <div>
        <form v-on:submit="addTodo">
            <input v-model="title" type="text" name="title" placeholder="Add Todo...">
            <input type="submit" value="submit" class="btn">
        </form>
    </div>
</template>


<script src="./addTodo.ts"></script>
<style src="./addTodo.css"></style>