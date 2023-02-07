const initMap = () => {

    if (document.querySelector("#mapBox")) {
      var mapCenter = [22.456865, 49.406934];
      mapboxgl.accessToken =
        "pk.eyJ1IjoibWFjaWVqZmlnbGFyejMzMyIsImEiOiJjbGR0czlwdzEwNDl4M3BwajdtZHo0d2ozIn0.6VerNuCjxOIdgh4KBiBqbQ";
  
      var map = new mapboxgl.Map({
        container: "mapBox",
        style: "mapbox://styles/mapbox/streets-v11",
        center: mapCenter,
        zoom: 13,
        properties: {
          'marker-color': '#627323',
        }
      });
      // 49.406934, 22.456865
  
  
      map.addControl(new mapboxgl.NavigationControl());
      map.scrollZoom.disable();
      map.boxZoom.disable();
      map.dragRotate.disable();
      map.keyboard.disable();
      map.doubleClickZoom.disable();
      map.touchZoomRotate.disable();
  
      // var point = document.createElement("div");
      // point.className = "marker";
      // point.innerHTML = `<img src="${image}"" alt="Map Marker">`;
  
      var marker = new mapboxgl.Marker({ "color": "#627323" })
        .setLngLat([22.456865, 49.406844])
        .addTo(map);
    //   mapReference = map;
    map.on('idle',function(){
        map.resize()
        })
    }
  
  
  }

  export default initMap;