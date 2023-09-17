import { TextInput, View ,Button,StyleSheet} from 'react-native'
import React,{useState} from 'react'

export default function GoalInput(props) {

const [getGoal,setGoal] =useState("");

function getGoalInputHandler(text){
    setGoal(text);
  }

  function addGoalHandler(){
   props.onAddGoal(getGoal);
//    setGoal("");
  }
 
    return (
        <View style={styles.inputContainer}>
        <TextInput onChangeText={getGoalInputHandler} style={styles.input} placeholder='Enter course goal ...'></TextInput>
        <Button title='Add Goal' onPress={addGoalHandler}></Button>
      </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:20,
        paddingBottom:20,
        borderBottomWidth:1,
        borderBottomColor:'#ccc'
       },
       input:{
        borderWidth:1,
        borderColor:'grey',
        borderRadius:4,
        width:'75%',
        marginRight:8,
        padding:8
       }
  });
  