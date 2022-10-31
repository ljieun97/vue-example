<template>
    <div id="app">
      <vc-viewer>
        <vc-entity
          :billboard="billboard"
          :position="{ lng: 108, lat: 32 }"
          :point="point"
          :label="label"
          @click="onEntityEvt"
          @mouseover="onEntityEvt"
          @mouseout="onEntityEvt"
        >
          <vc-graphics-rectangle
            :coordinates="[130, 20, 80, 25]"
            material="green"
          />
        </vc-entity>
        <vc-layer-imagery>
          <vc-imagery-provider-osm />
        </vc-layer-imagery>
        <vc-navigation :other-opts="false" />
      </vc-viewer>
    </div>
</template>

<script>

import { reactive, toRefs } from 'vue';

export default {
  name: 'CesiumView',
  components: {
  },
  setup() {
    const state = reactive({
        point: {
            pixelSize: 28,
            color: 'red',
        },
        label: {
            text: 'Hello VueCesium',
            pixelOffset: [0, 80],
            fillColor: 'red',
        },
        billboard: {
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            scale: 0.5,
        }
    })
    const onEntityEvt = (e) => {
        if (e.type === 'onmouseover') {
            state.billboard = {
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            scale: 0.6
            }
        } else if (e.type === 'onmouseout') {
            state.billboard = {
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            scale: 0.5
            }
        }
    }
    return {
      ...toRefs(state),
      onEntityEvt
    }
  }
}
</script>
  