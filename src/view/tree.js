
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import TreeItem from './tree-item'


export default class Tree extends Component {
    render() {
        const node = this.props.node || {}

        return (
            <View>

                {
                    node.children && node.children.map((item) =>{
                        const type = item.type

                        return type === '1'
                        ? (
                            <View>
                                {
                                    item.children && item.children.map((child) =>{
                                        /**
                                         * 
                                         * 这里的 node={child} 无法传过去
                                         * 
                                         * TreeItem组件获取不到node
                                         * 
                                         */
                                        return (
                                            <TreeItem node={child} key={child.name}/>
                                        )
                                    })
                                }
                            </View>
                        )
                        : (
                            <TreeItem node={item} key={item.name}/>
                        )
                    })
                }
            </View>
        )
    }

    // 去掉判断的render就没问题
    // render() {
    //     const node = this.props.node || {}

    //     return (
    //         <View>

    //             {
    //                 node.children && node.children.map((item) =>{
    //                     const type = item.type
                        
    //                     // 去掉判断就没问题
    //                     return (
    //                         <View>
    //                             {
    //                                 item.children && item.children.map((child) =>{
    //                                     return (
    //                                         <TreeItem node={child} key={child.name}/>
    //                                     )
    //                                 })
    //                             }
    //                         </View>
    //                     )
    //                 })
    //             }
    //         </View>
    //     )
    // }
}

