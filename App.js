import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import GoalList from './components/GoalList';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals,setCourseGoals]= useState([]);

  function getButtonPressedHandler(getGoal){
    setCourseGoals([...courseGoals,{text:getGoal,id:Math.random().toString()}]);
  }

  function deleteGoal(id){
    setCourseGoals(courseGoals=>{
      return courseGoals.filter((goal)=> goal.id !== id);
    })
  }

  return (
    <View style={styles.container}>
      <Text>Hello Sam :)</Text>

      <GoalInput 
      onAddGoal={getButtonPressedHandler}
      />
     
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={(goals)=>{
        return (
        <GoalList text={goals.item.text} 
        onDeleteGoal = {deleteGoal}
        id={goals.item.id}
        />)
      }}  keyExtractor={()=>(item,index)=>{
        return item.id;
      }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding:20,
    marginTop:30,
    flex:1,
  },
  goalsContainer:{
    flex:5,
    paddingTop:10
  }
});
