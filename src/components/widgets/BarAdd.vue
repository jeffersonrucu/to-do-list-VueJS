<template>
    <div id="search">
        <input type="text" name="" id="" v-model="item" @keyup.enter="add">
        <button @click="addTask"> + </button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            item: '',
            task: []
        }
    },
    methods: {
        add() {
            this.addTask()
        },
        addTask() {
            this.task.push({titulo: this.item})
            this.item = ''
        }
    },
}
</script>

<style scopet>
    #search {
        border: 1px solid rgb(60, 60, 60);
        border-radius: 4px;
    }

    input{
        margin: 0;
        padding: 0 10px;
        width: 300px;
        height: 30px;
        border: none;
        border-radius: 4px 0 0 4px;
        background-color: #4f5e6c;
        outline: none;
        color: #FFF;
    }

    button {
        margin: 0;
        padding: 0;
        height: 30px;
        width: 40px;
        border: none;
        border-radius: 0 4px 4px 0;
        background-color: #4994ED;
        outline: none;
        font-size: 15px;
        font-weight: bold;
        color: #FFF;
        }
    button:hover {
        cursor: pointer;
    }
</style>