import {  Text,  View, Navigation} from 'react-native';
import { Home, Forest } from "./screens";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import { Text, Button, View } from 'react-native';
import TagsPage from './screens/tagsScreen';
import SettingsPage from './screens/settingScreen';
import Track from './screens/Track';

//const Stack = createNativeStackNavigator();

const Tab =createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    elevation: 0,
    height: 80,
  }
}
export default function App() {
  return (
     <NavigationContainer>
       <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Entypo name="home" size={24} color={focused ? "#228b22": "#111"} />
                  <Text style={{fontSize: 12, color: "#16247d"}}>HOME</Text>
            </View>
              )
            }
          }}
          />

          <Tab.Screen 
          name="Track" 
          component={Track} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center", borderRadius:100 }}> 
                 <Entypo name="controller-play" size={40} backgroundColor={'#228b22'}/>
                  <Text style={{fontSize: 12, color: "#16247d"}}>TRACK</Text>
            </View>
              )
            } 
          }}
          />
          <Tab.Screen
           name="Forest" 
           component={Forest}
           options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <Entypo name="tree" size={24} color={focused ? "#228b22": "#111"} />
                  <Text style={{fontSize: 12, color: "#16247d"}}>FOREST</Text>
            </View>
              )
            }
          }}
           />
         
       </Tab.Navigator>
      
     </NavigationContainer>
)
}