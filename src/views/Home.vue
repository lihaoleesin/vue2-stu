<template>
  <div class="home">
    <HelloWorld msg="msg" @getData="handleGetData" />
    <LeeSin />
    <a-button type="danger">提交</a-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import LeeSin from './leesin.vue';
import { NAME_LIST } from './util/constans';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    LeeSin,
  },
  data() {
    return {
      NAME_LIST,
    };
  },

  methods: {
    handleGetData(val) {
      console.log(this);
      console.log(val);
    },
  },
};
</script>
<style lang="less" scoped>
.nameList {
  width: 100px;
}
</style>
