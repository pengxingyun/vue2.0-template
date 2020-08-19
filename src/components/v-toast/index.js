import Vue from 'vue'

let constructor = () => {
    let toastConstructor = Vue.extend(require('./toast.vue').default)
    let instance = new toastConstructor().$mount();
    document.body.appendChild(instance.$el);
    instance.isShow = false;

    instance['show'] = (text, time = 2000) => {
        instance.text = text;
        instance.isShow = true;
        Vue.nextTick(() => {
            setTimeout(() => {
                instance.isShow = false;
            }, time)
        })
    }
    instance['close'] = () => {
        instance.isShow = false;
    }
    return instance;
}

export default constructor;