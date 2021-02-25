<template>
    <div id="progress">
        <div class="released" :class="{'released-background' : checkProgress}" :style="{width: barProgress + '%'}"></div>
        <p> {{barProgress}}% </p>
    </div>
</template>

<script>
import Barramento from '@/barramento.js'

export default {
    data(){
		return {
			barProgress: 100		
        }   
	},
    watch: {
        barProgress(){
            const parsed = JSON.stringify(this.barProgress);
            localStorage.setItem('historyProgress', parsed);
        }
    },
    mounted() {
        if (localStorage.getItem('historyProgress')) {
            try {
                this.barProgress = JSON.parse(localStorage.getItem('historyProgress'));
            } catch(e) {
                localStorage.removeItem('historyProgress');
            }
        }
    },
    computed: {
        checkProgress() {
            if(this.barProgress < 1) {
                return false
            }else {                
                return true
            }
        }
    },
    created() {
        Barramento.attTask(tasks => {
            const TOTAL = tasks.length
            const DONE = tasks.filter(t => !t.statusTask).length
            if(TOTAL == 0) {
                this.barProgress = 100
            } else {
                this.barProgress = Math.round(100 - (DONE/TOTAL) * 100)
            }
        })
    },
    
}
</script>

<style>
    #progress {
        width: 80%;
        height: 30px;
        border: 1px solid rgb(235, 235, 235);
        border-radius: 8px;
        text-align: center;
        position: relative;
        
    }

    #progress p {
        position: absolute;
        top: 20%;
        margin: 0;
        left: calc(50% - 10.75px);
    }

    .released{
        height: 30px;
        border-radius: 7px;
        transition: 0.5s ease-in-out
    }

    .released-background {
        background-color: #67aa5c;
    }
</style>