import React from 'react';
import './App.css';
import esriLoader from 'esri-loader';



class App extends React.Component {
  
  componentDidMount = () => {
    const _self = this;
    // const options = {
    //   url: 'http://localhost/arcgis_js_api/4.13/init.js', // 这里的API地址可以是官网提供的CDN，也可在此配置离线部署的地址
    //   css: 'http://localhost/arcgis_js_api/4.13/esri/themes/light/main.css'
    // };
    const options = {
      url: 'https://js.arcgis.com/4.14/init.js', // 这里的API地址可以是官网提供的CDN，也可在此配置离线部署的地址
      css: 'https://js.arcgis.com/4.14/esri/themes/light/main.css'
    };
    esriLoader.loadModules([
      "esri/Map",
      "esri/views/MapView"], options) // 传入需要使用的类
      .then(([Map,
        MapView
      ]) => {
        // doSomeThing
        let map = new Map({
          basemap: 'osm'
        });
        let view = new MapView({
          container: "app",
          map: map,
          center: [120, 29],
          zoom: 10
        });
        console.log(view)
      })
      .catch(err => {
        console.error('地图初始化失败', err);
      })
  }
  render() {
    return (
      <div id='app'>
      </div>
    )
  }
}


export default App;
