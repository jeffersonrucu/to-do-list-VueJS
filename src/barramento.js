import Vue from 'vue'
export default new Vue({
    methods: {
        sendTask(task){
            this.$emit('addTask', task)
        },
        attTask(callback){
            this.$on('addTask', callback)
        }
    },
})