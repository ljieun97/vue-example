<template>
  <div>
  <div id="cesiumContainer">
  </div>
</div>
</template>

<script>
import { getCurrentInstance, onMounted, reactive, toRefs } from 'vue';

export default {
  name: 'CesiumView',
  components: {
  },
  setup() {
    const { proxy } = getCurrentInstance()
    
    const state = reactive({
      map3d: null,
      map: null,
    })

    const initView = async () => {
      try {
        await proxy.$CesiumUtils.init(state)
      } catch (error) {
        console.log(error)
      }
    }

    onMounted(()=> {
      initView()
    })


    return {
      ...toRefs(state),
      initView
    }

  }
}
</script>
  
<style scoped>
html, body, #cesiumContainer {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	overflow: hidden;
}
</style>