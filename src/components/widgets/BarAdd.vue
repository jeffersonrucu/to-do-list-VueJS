<template>
    <div id="search">
        <input placeholder="Crie Sua Tarefa Aqui" type="text" v-model="item" @keyup.enter="add">
        <button @click="addTask"> + </button>
    </div>
</template>

<script>
import Barramento from '@/barramento.js'

export default {
    data(){
        return {
            item: '',
            task: [],
            status: false,
            identifier: 0
        }
    },
    mounted() {
        if (localStorage.getItem('historyTask')) {
            try {
                this.task = JSON.parse(localStorage.getItem('historyTask'));
            } catch(e) {
                localStorage.removeItem('historyTask');
            }
        }
    },
    methods: {
        add() {
            this.addTask()
        },
        addTask() {
            if(this.item !== '') {
                this.identifier++
                this.task.push({id: this.identifier, titulo: this.item, statusTask: this.status})
                Barramento.sendTask( this.task )
                this.item = ''
            }
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
        width: 230px;
        height: 30px;
        border: none;
        border-radius: 4px 0 0 4px;
        background-color: #4f5e6c;
        outline: none;
        color: #FFF;
    }

    input::placeholder {
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