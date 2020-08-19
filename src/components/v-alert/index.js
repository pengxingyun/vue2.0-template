import Vue from 'vue'

let constructor = () => {
    const alertConstructor = Vue.extend(require('./alert.vue').default);
    let instance = new alertConstructor().$mount();
    document.body.appendChild(instance.$el);
    instance.isShow = false;

    instance['show'] = (options) => {
        if (typeof options == 'object') {
            instance.title = options.title;
            instance.text = options.text || '';
            instance.confirmTxt = options.confirmTxt || '';
            instance.onHide = options.onHide || function() {};
        } else {
            instance.text = options;
        }
        instance.isShow = true;
    }
    instance['hide'] = () => {
        instance.isShow = false;
    }
    return instance;
}

export default constructor;