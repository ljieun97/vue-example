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
      viewer.camera.flyTo({
        //처음위치
        destination : Cesium.Cartesian3.fromDegrees(-100.0, 40.0, 800.0),
        //처음각도
        orientation : {
          heading : (Math.PI/180)*0.0,
          pitch : (Math.PI/180)*-15.0,
        }
      });
  
      state.map3d = viewer
  
      // var scene = viewer.scene
      // scene.skyBox.show = false
      // scene.moon.show = false
  
      // scene.requestRender()
      // var handler = new Cesium.ScreenSpaceEventHandler(scene.canvas)
  
      // handler.setInputAction(move => {
      //   const cartesian = viewer.camera.pickEllipsoid(move.endPosition, scene.globe.ellipsoid)
      //   if (cartesian) {
      //     const cartographic = Cesium.Cartographic.fromCartesian(cartesian)
      //     const lon = Cesium.Math.toDegrees(cartographic.longitude)
      //     const lat = Cesium.Math.toDegrees(cartographic.latitude)
      //     // console.log('lon', lon)
      //     // console.log('lat', lat)
      //   }
      // }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)


      //포지션과 색상을 매개변수로 해야함
      viewer.entities.add({
        name: "Green cylinder with black outline",
        //포지션 마지막거는 length의 2배로 해야 바닥에 딱 붙는듯
        position: Cesium.Cartesian3.fromDegrees(-100.0, 40.0, 800.0), 
        cylinder: {
          length: 400.0,
          topRadius: 200.0,
          bottomRadius: 200.0,
          material: Cesium.Color.RED,
        },
      });
      viewer.entities.add({
        name: "Green cylinder with black outline",
        position: Cesium.Cartesian3.fromDegrees(-100.0, 40.0, 1200.0), 
        cylinder: {
          length: 400.0,
          topRadius: 200.0,
          bottomRadius: 200.0,
          material: Cesium.Color.YELLOW,
        },
      });

      // //포지션과 색상을 매개변수로 해야함
      // viewer.entities.add({
      //   name: "Green cylinder with black outline",
      //   //포지션 마지막거는 length의 2배로 해야 바닥에 딱 붙는듯
      //   position: Cesium.Cartesian3.fromDegrees(-100.0, 40.0, 800.0), 
      //   cylinder: {
      //     length: 400.0,
      //     topRadius: 200.0,
      //     bottomRadius: 200.0,
      //     //빨간색을 0.5정도로 연하게하는건가봄 - 일단은 아웃라인과 같은 색으로하자
      //     material: Cesium.Color.RED.withAlpha(0.5),
      //     outline: true,
      //     outlineColor: Cesium.Color.RED,
      //   },
      // });
      
      viewer.zoomTo(viewer.entities);
    }

    const 
}

export default new CesiumUtils()
