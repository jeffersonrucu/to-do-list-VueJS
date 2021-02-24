<template>
    <div id="box-cards">

        <div id="taskOff" v-if="task.length == 0"> 
            <p>Suas tarefas estão em dia =D</p>
        </div>

        <div id="card-task" v-for="(newTask, index) in task" :key="newTask.id" v-else>
            <div class="close-task" @click="closeTask(index)">
                <span> x </span>
            </div>

            <div class="card-body" @click="tasksStutas(index)" :class="{'task-complete': newTask.statusTask}">
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
            task: [],
            historyTask: []
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
        saveTask() {
            const parsed = JSON.stringify(this.historyTask);
            localStorage.setItem('historyTask', parsed);
        },
        closeTask(i) {
            this.task.splice(i, 1);
            Barramento.sendTask( this.task )
            this.historyTask = this.task
            this.saveTask()
        },
        tasksStutas(i) {
            var status = !this.task[i].statusTask
            this.task[i].statusTask = status
            Barramento.sendTask( this.task )
        },
        
    },
    created() {
        Barramento.attTask(tasks => {
            this.task = tasks
            this.historyTask = tasks
            this.saveTask()
        })
    }
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