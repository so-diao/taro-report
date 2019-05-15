
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'


export default class TreeItem extends Component {

    render() {
        const node = this.props.node || {}

        return (
            <View>
                {
                    JSON.stringify(node)
                }
            </View>
        )
    }
}

