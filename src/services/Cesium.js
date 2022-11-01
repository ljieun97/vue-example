import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'
let terrainProvider

class CesiumUtils {
    init(state) {

      Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxMjdkZmVmNy0xY2Y4LTQwOGUtOWE2Zi01M2EyZjIyMDhkY2IiLCJpZCI6MTEzMTQ3LCJpYXQiOjE2NjcyNjQ3OTl9.QYIXcS3YVvPBh1Bq2Ms5TyvXyNHWbwhguAvC4LAwHOg'
           terrainProvider = Cesium.createWorldTerrain({
        requestWaterMask: false,
        requestVertexNormals: true
      })
      let viewer = new Cesium.Viewer('cesiumContainer', {
        infoBox: false,
        selectionIndicator: false,
        shadows: false,
        shouldAnimate: false,
        requestRenderMode: true,
        maximumRenderTimeChange: Infinity,
        terrainProvider: terrainProvider
      })
  
      viewer.animation.container.style.visibility = 'hidden'
      viewer.timeline.container.style.visibility = 'hidden'
      // viewer.camera.setView({
      //   destination: Cesium.Cartesian3.fromDegrees(state.map.getView().getCenter()[0], state.map.getView().getCenter()[1], 5000.0) 
      // })
      viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
        orientation : {
          heading : (Math.PI/180)*0.0,
          pitch : (Math.PI/180)*-15.0,
        }
      });
  
      state.map3d = viewer
      state.map = null
  
      var scene = viewer.scene
      scene.skyBox.show = false
      scene.moon.show = false
  
      // Explicitly render a new frame
      scene.requestRender()
      var handler = new Cesium.ScreenSpaceEventHandler(scene.canvas)
  
      handler.setInputAction(move => {
        const cartesian = viewer.camera.pickEllipsoid(move.endPosition, scene.globe.ellipsoid)
        if (cartesian) {
          const cartographic = Cesium.Cartographic.fromCartesian(cartesian)
          const lon = Cesium.Math.toDegrees(cartographic.longitude)
          const lat = Cesium.Math.toDegrees(cartographic.latitude)
          // console.log('lon', lon)
          // console.log('lat', lat)
        }
      }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
    }
}

export default new CesiumUtils()
