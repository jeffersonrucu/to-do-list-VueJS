<template>
    <div id="box-cards">
        <div id="card-task" v-for="(newTask, index) in task" :key="newTask.id">
            <div class="close-task" @click="closeTask(index)">
                <span> x </span>
            </div>

            <div class="card-body" @click="tasksComplete =!tasksComplete" :class="{'task-complete': tasksComplete}">
                {{newTask.titulo}}
            </div>
        </div> 
    </div>
</template>

<script>
import Barramento from '@/barramento.js'

export default {
    data() {
        return {
            tasksComplete: false,
            task: []
        }
    },
    methods: {
        closeTask(i) {
            this.task.splice(i, 1);
        }       
    },
    created() {
        Barramento.attTask(tasks => {
            this.task = tasks
        })
    },
}
</script>

<style>
    #box-cards{
        display: flex;
        width: 75%;
        justify-content: center;
        flex-wrap: wrap;
    }

    #card-task{
        position: relative;
        width: 260px;
        height: 120px;
        border-radius: 8px;
        background-color: #E25342;
        box-shadow: -12px 0px 0px 0px rgba(170,60,52,1);
        margin: 10px 20px;
    }

    .task-complete{
        background-color: #67aa5c;
        box-shadow: -12px 0px 0px 0px #37682f;
        border-radius: 8px;
        text-decoration: line-through;
    }

    .close-task{
        position: absolute;
        display: flex;
        justify-content: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.363);
        font-size: 14px;
        right: 5px;
        margin: 7px 5px 0 0;

    }

    .close-task span {
        cursor: pointer;
    }

    .card-body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: 20px;
    }
</style>