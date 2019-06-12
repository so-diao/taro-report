
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Tree from './tree'


export default class TreeCopy extends Component {
    render() {
        const options = this.props.options || {}
        const { name, children = [] } = options
        return (
            <View>
                { name }

                {
                    children.length && children.map(child =>{
                        return <Tree options={child}></Tree>
                    })
                }
            </View>
        )
    }
}

