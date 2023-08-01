import {Text, SafeAreaView, View} from 'react-native'
import {globalStyles} from "../global";
const Chat = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <SafeAreaView style={{padding: 20}}>
        <Text style={globalStyles.headingText}>Chat</Text>
        <Text style={globalStyles.infoText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur consequuntur dolor eaque laborum maxime nihil numquam odio, officia quae qui quidem soluta sunt. Atque culpa doloribus, et incidunt,
          itaque iusto nobis pariatur quae quas repellendus repudiandae voluptatem! A alias dicta ipsum laboriosam, perspiciatis quae quibusdam repellendus suscipit! Blanditiis, placeat.</Text>
      </SafeAreaView>
    </View>
  )
}

export default Chat;