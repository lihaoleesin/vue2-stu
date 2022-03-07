<script>
import { NAME_LIST } from './util/constans';
import LeeSinForm from '@/components/basicConfigInfo';
export default {
  name: 'TabPanel',
  components: {
    LeeSinForm,
  },
  props: { leesin: { type: String, default: 'leesin' } },
  data() {
    return {
      NAME_LIST,
      loading: true,
      minHeight: '100vh',
    };
  },
  watch: {
    minHeight: {
      handler: function (val, oldVal) {
        console.log(val, oldVal);
      },
    },
  },
  methods: {
    handleClick() {
      this.minHeight = 'minHeight';
    },
    renderTest() {
      return <div>111</div>;
    },
  },
  mounted() {
    setTimeout(() => {
      console.log(this.loading);
      this.loading = false;
    }, 2000);
  },
  computed: {
    getData() {
      return 'computed';
    },
  },
  render() {
    /** leesin */
    const handleNameChange = (e) => {
      console.log('111', e);
    };
    return (
      <a-tabs type="card" onChange={handleNameChange}>
        {this.NAME_LIST.map((item) => (
          <a-tab-pane key={item.key} tab={item.name}>
            <LeeSinForm label={item.name} />
          </a-tab-pane>
        ))}
      </a-tabs>
    );
  },
};
</script>
<style lang="less" scoped></style>
