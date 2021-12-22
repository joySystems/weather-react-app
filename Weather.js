import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import propTypes from 'prop-types';

export default function Weather ({temp}) {

return (
    
<View style={styles.container}>
    <Text>{temp}</Text>
</View>

);


}


Weather.propTypes = {


    temp: PropTypes.number.isRequired,
    conditions: PropTypes.oneOfType(["Thunderstorm", "Drizzle", "Rain", "Snow", "Mist", "Smoke", "Haze", "Fog", "Dust", "Clear", "Clouds"]).isRequired


}


styles = StyleSheet.create({

container: {

    flex:1,
    justifyContent:"center",
    alignItems:"center",

}

})