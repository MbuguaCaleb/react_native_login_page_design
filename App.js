import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
  const Stack = createNativeStackNavigator()
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='signIn'
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='signUp'
          component={SignUp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
