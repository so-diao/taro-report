
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import TreeCopy from './tree-copy'


export default class Tree extends Component {
    render() {
        const options = this.props.options || {}
        const { name, children = [] } = options

        return (
            <View>
                { name }

                {
                    children.length && children.map(child =>{
                        return <TreeCopy options={child}></TreeCopy>
                    })
                }
            </View>
        )
    }
}

