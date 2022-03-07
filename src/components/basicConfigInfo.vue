<script>
import { NAME_LIST } from '../views/util/constans';
import { Form } from 'ant-design-vue';
let CustomizedForm = {};
const test = Form.create({})(CustomizedForm);

export default {
  name: 'LeeSinForm',
  props: {
    leesin: { type: String, default: 'leesin' },
    label: { type: String, default: 'label' },
  },
  data() {
    return {
      NAME_LIST,
      loading: true,
      minHeight: '100vh',
      input: '',
      select: [],
      formItemLayout: {
        labelCol: { span: 3 },
        wrapperCol: { span: 3 },
      },
    };
  },
  watch: {},
  methods: {
    handleSelectChange(e) {
      console.log(e);
    },
  },
  mounted() {
    console.log(test);
  },
  computed: {
    getData() {
      return 'computed';
    },
  },
  render() {
    return (
      <div>
        {this.input}
        <a-form
          labelCol={this.formItemLayout.labelCol}
          wrapperCol={this.formItemLayout.wrapperCol}
        >
          <a-form-item label={this.label} has-feedback>
            <a-input v-model={this.input} class="name" />
          </a-form-item>
          <a-form-item label={this.label} has-feedback>
            <a-select
              v-model={this.select}
              mode="multiple"
              class="name"
              onChange={this.handleSelectChange}
            >
              {NAME_LIST.map((item) => (
                <a-select-option key={item.key}>{item.name}</a-select-option>
              ))}
            </a-select>
          </a-form-item>
        </a-form>
      </div>
    );
  },
};
</script>
<style lang="less" scoped>
.name {
  width: 300px;
}
</style>
