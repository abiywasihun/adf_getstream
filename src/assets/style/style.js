import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
backgroundColor:'#E9EAEB',

  },
  list: {
     
    
    
    backgroundColor:'#fff',
   
    marginLeft: 0,
    marginRight: 0,
    marginTop: 10,
  },
  br_na_title: {
    fontFamily: 'serif',
    fontSize: 15,
    fontWeight: 'bold',
     color: '#1e90ff',
  },
  comment_title: {
  fontFamily: 'serif',
  fontSize:20,
   fontWeight: 'bold',
  alignSelf:'center',
  color: 'black'

 
  },
   errorTextStyle: {
    fontSize: 16,
    alignSelf: 'center',
    marginTop:6,
    color: 'red'
  },
   card_title: {
    fontFamily: 'serif',
    fontSize: 20,
    color:'#1e90ff',//#1e90ff
    fontWeight: 'bold',
    marginTop: 6,
    marginLeft: 0,
    marginBottom: -4,
     
  },
   title: {
    fontFamily: 'serif',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 6,
   color:'#1e90ff',
    marginBottom: -4,
  },
  description: {
    marginTop:5,
    fontFamily: 'serif',
    fontSize: 16,
    color: '#000000',
    marginLeft: 0,
  },
  advert_image: {
    height: 70,
    width:1010,
    alignSelf: "center",
    resizeMode: "cover",
     flex: 1,
    marginVertical: 5
  },
  image: {
    height: 70,
    width:110,
    alignSelf: "center",
    resizeMode: "cover",
     flex: 1,
    marginVertical: 5
  },
});
export default styles;