<style lang="less" scoped>
    .toast-container{
        position: relative;
        -webkit-user-select: none;
        user-select: none;
    }
    .toast-content{
        position: fixed;
        top: 27%;
        left: 50%;
        z-index: 1000;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        min-width: 250px;
        min-height: 0;
        padding: 15px 0;
        border-radius: 5px;
        text-align: center;
        background-color:rgba(0,0,0,.7);
        color: #fff;
        font-size: 16px;
        font-family:PingFangSC-Regular;
        transition:opacity .1s linear
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>
<template>
    <transition :name ="isAnimation ? 'fade': ''">
        <div class="toast-container" id="toast" v-show="isShow">
            <div class="toast-content">{{text}}</div>
        </div>
    </transition>
</template>
<script>
    export default{
        data() {
            return{
                isShow: false,
                isAnimation: true, // 是否显示动画
                text:''
            }
        }
    }
</script>