<template>
  <div>
    <el-dialog
      title="意见提问"
      :visible.sync="suggestVisible"
      width="500px"
    @close="close">
      <el-input type="textarea" :rows="8" v-model="suggest"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: '',
    props: {
      suggestVisible: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        suggest: ''
      }
    },
    methods: {
      close() {
        this.$emit('close')
      },
      confirm() {
        this.close()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
