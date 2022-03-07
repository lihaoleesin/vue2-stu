<template>
  <div class="hello">
    <a-form layout="inline" :form="form" @submit="handleSubmit">
      <a-form-item label="测试" required>
        <a-input v-model="form.title" placeholder="请输入" />
      </a-form-item>
      <a-form-item>
        <a-select
          v-decorator="[
            'select',
            {
              initialValue: 's',
              rules: [
                { required: true, message: 'Please select your country!' },
              ],
            },
          ]"
          class="nameList"
        >
          <a-select-option
            v-for="item in NAME_LIST"
            :key="item.key"
            :value="item.key"
            >{{ item.name }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-button type="danger" html-type="submit">提交</a-button>
    </a-form>
  </div>
</template>

<script>
import { NAME_LIST } from '../views/util/constans';
export default {
  // name: "HelloWorld",
  // props: {
  //   msg: { type: String, require: true, default: "测试" },
  // },
  data() {
    return {
      formItemLayout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      },
      /** 名称列表 */
      NAME_LIST,
      select: 's',
      // form: {
      //   title: "",
      //   content: "s",
      // },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'validate_other' });
    console.log(this.form);
  },
  methods: {
    /** 提交 */
    handleSubmit(e) {
      e.preventDefault();
      console.log(this.form.getFieldValue('select'));
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    // handleNameChange(e) {
    //   console.log(e);
    // },
  },
  // watch: {
  //   form: {
  //     handler: function (val) {
  //       this.$emit("getData", val);
  //     },
  //     deep: true,
  //   },
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nameList {
  width: 200px;
}
</style>
