import { Pressable, StyleSheet, Text, View } from 'react-native';


export default function GoalList(props) {



    return (
          <View style={styles.goalItem}>
           <Pressable android_ripple={{color:'lightgreen'}}  onPress={props.onDeleteGoal.bind(this,props.id)}>
          <Text style={{color:'white',padding:8}}>{props.text}</Text>
          </Pressable>
         </View>
    )
}
const styles = StyleSheet.create({
    goalItem:{
      margin:5,
      borderRadius:6,
      backgroundColor:'green',
    }  
  });
  