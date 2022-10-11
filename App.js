import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import WorkoutInformation from './src/screens/WorkoutInformation';
import WorkoutScreen from './src/screens/WorkoutScreen';
import WorkoutSummary from './src/screens/WorkoutSummaryScreen';
import chest from './images/muscle_groups/chest.png'

export default function App() {

  const Home = ({ navigation }) => {
    
    const [isSelected, setIsSelected] = useState('W');

    return <View style={{ height: '100%', backgroundColor:'#FAfAfA'}}>
      <ScrollView style={{ height: '100%' }}>
        <TouchableOpacity style={{height:'6%', alignItems:'flex-end', justifyContent:'flex-end', paddingHorizontal:20}} onPress={()=>{navigation.navigate('GenerateWorkout')}}>
          <Image source={chest} style={{height:40, width:40, borderRadius:40}} />
        </TouchableOpacity>
        <View style={{paddingHorizontal:20, paddingVertical:4}}>
          <Text style={{fontSize:24, fontWeight:'bold'}}>
            Activity
          </Text>
          <View>
            <View style={{flexDirection:"row", width:'100%', justifyContent:'space-between', marginVertical:12, backgroundColor:'#FFF', borderRadius:20}}>
              <TouchableOpacity onPress={()=>{setIsSelected('W')}} style={{backgroundColor:isSelected !== 'W' ? '#FFF' : '#B0FF73', width:'25%', height:40, borderRadius:20, alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:16}}>W</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>{setIsSelected('M')}} style={{backgroundColor:isSelected !== 'M' ? '#FFF' : '#B0FF73', width:'25%', height:40, borderRadius:20, alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:16}}>M</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>{setIsSelected('Y')}} style={{backgroundColor:isSelected !== 'Y' ? '#FFF' : '#B0FF73', width:'25%', height:40, borderRadius:20, alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:16}}>Y</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>{setIsSelected('All')}} style={{backgroundColor:isSelected !== 'All' ? '#FFF' : '#B0FF73', width:'25%', height:40, borderRadius:20, alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:16}}>All</Text></TouchableOpacity>
            </View>
          </View>
          <View>
            <Text>This week v</Text>
          </View>
          <View style={{padding:4}}>
            <Text style={{fontSize:24, fontWeight:'500', marginTop:12}}>490 KCAL</Text>
          </View>
          <View style={{flexDirection:'row', width:'70%', justifyContent:'space-between', marginVertical:4, padding:4}}>
            <View style={{flexDirection:'column'}}><Text style={{marginBottom:4}}>4</Text><Text style={{color:'#7A7A7A'}}>Workouts</Text></View>
            <View style={{flexDirection:'column'}}><Text style={{marginBottom:4}}>4</Text><Text style={{color:'#7A7A7A'}}>Workouts</Text></View>
            <View style={{flexDirection:'column'}}><Text style={{marginBottom:4}}>4</Text><Text style={{color:'#7A7A7A'}}>Workouts</Text></View>
          </View>
          <View style={{width:'100%', height:150, backgroundColor:'red'}}> 
            <Text></Text>
          </View>
          <View style={{flexDirection:'column', justifyContent:'space-between', marginTop:12, padding:4, paddingBottom:120}}>
            <Text style={{ fontSize: 20, marginVertical: 12 }}>Recent Activity</Text>
            {[1, 2, 3, 4, 5].map((i, index) => {
              return (
                <View style={{ backgroundColor: '#FFF', shadowColor: '#000', shadowOpacity: 0.04, margin: 4, padding: 12, flexDirection:'row'}}>
                  <Image source={chest} style={{height:90, width:90, borderRadius:10, marginRight:12}} />
                  <View style={{flexDirection:'column', justifyContent:'space-between'}}>
                    <View>
                      <Text style={{fontSize:16}}>Today</Text>
                      <Text style={{fontSize:12}}>Monday Evening Workout</Text>
                    </View>
                    <View style={{flexDirection:'row', width:'75%', justifyContent:'space-between', backgroundColor:'#FFF', borderRadius:10}}>
                      <View style={{flexDirection:'column'}}><Text style={{marginBottom:4, fontSize:12}}>4</Text><Text style={{color:'#7A7A7A', fontSize:12}}>Workouts</Text></View>
                      <View style={{flexDirection:'column'}}><Text style={{marginBottom:4, fontSize:12}}>4</Text><Text style={{color:'#7A7A7A', fontSize:12}}>Workouts</Text></View>
                      <View style={{flexDirection:'column'}}><Text style={{marginBottom:4, fontSize:12}}>4</Text><Text style={{color:'#7A7A7A', fontSize:12}}>Workouts</Text></View>
                    </View>
                  </View>
                </View>
              )
            })}
            <TouchableOpacity style={{width:'100%', borderColor:'#000', borderWidth:1, alignSelf:'center', backgroundColor:'#FFF', padding:12, borderRadius:20, marginVertical:12}}>
              <Text style={{fontSize:16, textAlign:'center'}}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  }

  const GenerateWorkout = ({navigation}) => {
    return (
      <View style={{height:'100%', width:'100%', flexDirection:'row', alignItems:"center", justifyContent:"center"}}>   
        <TouchableOpacity style={{ borderRadius: 500, height: 200, width: 200, shadowColor: '#B0FF73', backgroundColor: '#B0FF73', shadowOpacity: 100, shadowRadius: 50, alignItems: 'center', justifyContent: 'center' }} onPress={() => {
          navigation.navigate('WorkoutInformation')
        }}>
          <Text style={{fontSize:42, fontWeight:'bold'}}>PUSH</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const Arena = ({ navigation }) => {
      const [isSelected, setIsSelected] = useState(0);

    return <View style={{ height: '100%', backgroundColor:'#FAfAfA'}}>
      <ScrollView style={{ height: '100%' }}>
        <TouchableOpacity style={{height:'10%', alignItems:'flex-end', justifyContent:'flex-end', paddingHorizontal:20}} onPress={()=>{navigation.navigate('GenerateWorkout')}}>
          <Image source={chest} style={{height:40, width:40, borderRadius:40}} />
        </TouchableOpacity>
        <View style={{paddingHorizontal:20, paddingVertical:4}}>
          <Text style={{fontSize:24, fontWeight:'bold'}}>
            ARENA
          </Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'flex-start', marginTop:12, backgroundColor:'#FFF'}}>
          <TouchableOpacity onPress={()=>{setIsSelected(0)}}  style={{paddingHorizontal:20,paddingVertical:10, backgroundColor: isSelected === 0 ? "#B0FF73": "#FFF", justifyContent:'center', alignItems:'center'}}><Text style={{paddingHorizontal:8}}>Leaderboards</Text></TouchableOpacity>
          <TouchableOpacity  onPress={()=>{setIsSelected(1)}} style={{paddingHorizontal:20, paddingVertical:10,backgroundColor: isSelected === 1 ? "#B0FF73": "#FFF", justifyContent:'center', alignItems:'center'}}><Text style={{paddingHorizontal:8}}>Challenges</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal:16, marginVertical:10}}>
          <Text style={{fontSize:16, fontWeight:'bold', margin:4}}>Chest Press</Text>
          <Text style={{fontSize:16, fontWeight:'bold', margin:4}}>v</Text>
          <Text style={{fontSize:16, fontWeight:'bold', margin:4}}>+</Text>
        </View>
        <View style={{flexDirection:'column', alignItems:'center', paddingHorizontal:16, marginVertical:10}}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, index) => {
            return (
              <View style={{ width: '100%', shadowColor: '#B0FF73', shadowOpacity: 0.5, shadowRadius: 4, padding: 16, backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ fontSize: 16, fontWeight: '500' }}>{num}</Text>
                  <Image source={chest} style={{ width: 30, height: 30, borderRadius:40, marginHorizontal:8}} />
                  <Text style={{ fontSize: 16, fontWeight: '500' }}>John Doe</Text>
                </View>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>{num*100 - 86} kg</Text>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  }

const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialialRouteName = "WorkoutInformation">
        <Stack.Screen name="GenerateWorkout" component={GenerateWorkout} options={{ headerShown: false }} />
        <Stack.Screen name="Arena" component={Arena} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="WorkoutInformation" component={WorkoutInformation} options={{ headerShown: false }} />
        <Stack.Screen name="WorkoutSummary" component={WorkoutSummary} options={{ headerShown: false }}/>
        <Stack.Screen name="WorkoutScreen" component={WorkoutScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
