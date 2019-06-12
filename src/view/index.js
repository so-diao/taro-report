
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Tree from './tree'

const arr = [
    {
        name: 1,
        children: [
            {
                name: 2,
                children: [
                    {
                        name: 3,
                        children: [
                            {
                                name: 4,
                                children: [
                                    {
                                        name: 1,
                                        children: [
                                            {
                                                name: 2,
                                                children: [
                                                    {
                                                        name: 3,
                                                        children: [
                                                            {
                                                                name: 4,
                                                                children: [
                                                                    
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
export default class Index extends Component {
    render() {
        return (
            <View>
                {
                    arr.map(item =>{
                        return <Tree options={item}></Tree>
                    })
                }
            </View>
        )
    }
}

