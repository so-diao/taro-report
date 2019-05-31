
import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'


export default class Index extends Component {
    changePage() {
        Taro.redirectTo({
            url: '/view/posts'
        })
    }
    render() {
        return (
            <View>
                <Button onClick={this.changePage.bind(this)}>按钮</Button>
                {
                    JSON.stringify(this.$router)
                }
            </View>
        )
    }
}

