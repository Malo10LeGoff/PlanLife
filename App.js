import React from 'react';
import { StyleSheet, View, useWindowDimensions, Text } from 'react-native';
import Tab_Leisures from './components/Tab_Leisures';
import Tab_Work from './components/Tab_Work';
import Tab_Health from './components/Tab_Health';
import { TabView, SceneMap } from 'react-native-tab-view';
import { registration, signIn, loggingOut } from './firebase_functions/signup';

export default function App() {

  //registration("malolegoff@gmail.com", "balbababa", "LG", "Malo");
  const out_promise_userid = []
  const user_id = signIn("malolegoff@gmail.com", "balbababa").then((result) => {
    //console.log(result);
    out_promise_userid.push(result)
    return result;
  });
  console.log(out_promise_userid);

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Work' },
    { key: 'second', title: 'Hobbies' },
    { key: 'third', title: 'Health' },
  ]);


  const FirstRoute = () => (
    <View style={styles.container}>
      <Tab_Work text={"Work"} />
    </View>
  );

  const SecondRoute = () => (
    <View style={styles.container}>
      <Tab_Leisures text={"Leisures"} />
    </View>
  );

  const ThirdRoute = () => (
    <View style={styles.container}>
      <Tab_Health text={"Health"} />
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});