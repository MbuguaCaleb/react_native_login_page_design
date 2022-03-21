import { View, Text, Button, StyleSheet } from 'react-native'

//Each screen inside Our Navigator gets a Propery Navigation
const SignIn = ({ navigation }) => {
  const navigate = () => {
    navigation.navigate('signUp')
  }
  return (
    <View style={styles.mainView}>
      <Text>Sign In</Text>
      <Button title='Go To SignUp' onPress={navigate} />
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default SignIn
