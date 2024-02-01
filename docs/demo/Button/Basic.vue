<template>
  <button>测试一下</button>
  <span>{{ msg }}</span>
</template>
<script setup>
import { ref} from 'vue'
const msg = ref('我是消息')
</script>
