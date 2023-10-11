import NeshanMap from "@neshan-maps-platform/react-openlayers"
import "@neshan-maps-platform/react-openlayers/dist/style.css"
const SimpleMap = () => {

  return (
    <NeshanMap
        mapKey="59764f0dd8d1401a88789eb291103326"
        center={{ latitude: 37.947933199999994, longitude: 46.5525212 }}
        scale={20}
    ></NeshanMap>
  );
};
export default SimpleMap;