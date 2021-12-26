import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Location from 'expo-location';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Loading from './Loading';
import Weather from './Weather';
import axios from 'axios';

const API_KEY = "e438b3395e81c11f2ffa4c3f7c1a264e";
export default class extends React.Component  {
state = {
  isLoading: true,
}

getWeather = async (latitude, longitude) => {

const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
 

this.setState({
  isLoading: false, 
  temp: data.main.temp, 
  conditions: data.weather[0].main});


//console.log(data);
}


getLocation = async () => {
try {
  const response = await Location.requestForegroundPermissionsAsync();
  //console.log(response);
  
  //const {coords:{longitude, latitude}} = await Location.getCurrentPositionAsync({});
  const location = await Location.getCurrentPositionAsync({});
  //console.log(location.coords);
  const {latitude, longitude} = location.coords;
  //console.log(latitude, longitude);
  this.getWeather(latitude, longitude);
  
// TODO: сделать запрос к API
}catch(err) {

Alert.alert("Невозможно получить геопозицию", "Попробуйте разрешить предоставление геоданных");
//console.log(err);
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
}


}

componentDidMount() {

  this.getLocation();

}


render() {
const {isLoading, temp, conditions} = this.state;
  return (
    this.state.isLoading ?<Loading /> : <Weather temp={Math.round(temp)} conditions={conditions} />
  );

}

  
}


