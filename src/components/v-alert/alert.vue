<style lang="less" scoped>
#alert_show {
    .weui-mask {
        background: rgba(0,0,0,.6);
        position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }
}
.weui-alert {
    position: fixed;
    z-index: 5000;
    width: 80%;
    max-width: 300px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background-color: #fff;
    text-align: center;
    border-radius: 3px;
    overflow: hidden;
}
.weui-alert .alert-header{
    padding: 1.3em 1.6em 0.5em;
}
.weui-alert .alert-header strong{
    font-weight: 400;
    font-size: 18px;
}
.weui-alert .alert-content{
    padding: 0 1.6em 0.8em;
    min-height: 40px;
    font-size: 15px;
    line-height: 1.3;
    word-wrap: break-word;
    word-break: break-all;
    color: #353535;
}
.weui-alert .alert-footer{
    color: #198cfa;
    line-height: 48px;
    position: relative;
    font-size:15px;
}
.weui-alert .alert-footer:after {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #D5D5D6;
    color: #D5D5D6;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
}
</style>
<template>
    <div id="alert_show" v-show="isShow">
        <div class="weui-mask"></div>
        <div class="weui-alert">
            <div class="alert-header"><strong>{{title}}</strong></div>
            <div class="alert-content">{{text}}</div>
            <div class="alert-footer" @click="_onClick()">{{confirmTxt}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return{
                title: '',
                isShow: false,
                text:'',
                confirmTxt: '',
                onHide() {}
            }
        },
        methods: {
            _onClick() {
                this.isShow = false;
                this.onHide();
            }
        }
    }
</script>
