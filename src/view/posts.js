
import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'


export default class Posts extends Component {
    changePage() {
        Taro.redirectTo({
            url: '/view/index'
        })
    }
    render() {
        return (
            <View className='body'>
                <Button onClick={this.changePage.bind(this)}>按钮</Button>
                {
                    JSON.stringify(this.$router)
                }
            </View>
        )
    }
}

