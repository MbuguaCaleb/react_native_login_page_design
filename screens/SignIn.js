import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'

//Each screen inside Our Navigator gets a Propery Navigation
const SignIn = ({ navigation }) => {
  const navigate = () => {
    navigation.navigate('signUp')
  }
  return (
    <View style={styles.mainView}>
      <View style={styles.TopView}>
        <Image
          style={styles.ImageStyle}
          source={require('../assets/images/transparentLogo.png')}
        />
      </View>
      <View style={styles.BottomView}>
        <Text style={styles.Heading}>
          Welcome{'\n'}
          back
        </Text>
        <View style={styles.FormView}>
          <TextInput
            placeholder={'Email Address'}
            placeholderTextColor={'#fff'}
            style={styles.TextInput}
          />
          <TextInput
            placeholder={'Password'}
            placeholderTextColor={'#fff'}
            secureTextEntry={true}
            style={styles.TextInput}
          />
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.ButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.TextButton} onPress={navigate}>
          <Text style={styles.SignUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
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
  TopView: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomView: {
    width: '100%',
    height: '70%',
    backgroundColor: '#000',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  ImageStyle: {
    width: '60%',
    resizeMode: 'contain',
  },
  Heading: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 60,
  },
  FormView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  TextInput: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#fff',
    height: 52,
    borderRadius: 10,
    paddingLeft: 5,
    marginTop: 20,
    color: '#fff',
  },
  Button: {
    width: '90%',
    color: '#000',
    height: 52,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  SignUpText: {
    color: 'gray',
  },
  TextButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
})
export default SignIn
