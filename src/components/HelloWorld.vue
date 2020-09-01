<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{ tMsg }} vvvv</div>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest" target="_blank" rel="noopener">unit-jest</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      tMsg: this.store('common').msg
    }
  },
  methods: {
    store(namespace) {
      return this.$store.state['store'][namespace];
    },
    /**
     * 获取全局定义组件
     */
    com(name) {
      return this.$store.state['com'][name];
    },
    /**
     * 获取api
     */
    api(namespace) {
      return this.$store.state['api'][namespace];
    },
    /**
     * 显示alert
     * @param text 内容
     * @param title 标题
     * @param confirmTxt 确认按钮的文字
     * @returns {Promise} 点击确定后回调
     */
    showAlert(text, title = '', confirmTxt = '确定') {
        return new Promise((resolve, reject) => {
            this.com('alert').show({
                title: title,
                text: text,
                confirmTxt: confirmTxt,
                onHide() {
                    resolve();
                }
            });
        });
    },
    showToast(text, time) {
      return new Promise((resolve, reject) => {
          this.com('toast').show(text);
      });
    }
  },
  mounted() {
    this.showToast('hello world');
    // this.showAlert('hello world', 'hello', 'confirmTxt');
    this.api('test').testGet({}).then((res) => {
      console.log(res);
    })
    console.log(this.store('common').msg);
    this.$nextTick(() => {
      this.store('common').msg = 'hello vue';
    })
    console.log(this.store('common').msg);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello {
  h1 {
    display: flex;
    justify-content: center;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
