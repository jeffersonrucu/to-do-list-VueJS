<template>
    <div id="progress">
        <div :class="{released : checkProgress}" :style="{width: barProgress + '%'}"></div>
        <p> {{barProgress}} </p>
    </div>
</template>

<script>
export default {
    data(){
		return {
			barProgress: 50,
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
        background-color: #67aa5c;
        height: 30px;
        border-radius: 7px;
    }
</style>