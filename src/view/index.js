
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Tree from './tree'


const data = [
    {
        type: '1',
        name: '-0',
        children: [
            {
                type: '1',
                name: '-1',
                children: [
                    {
                        type: '0',
                        name: '-2'
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
                    data.map(item =>{
                        return <Tree node={item} key={item.name}/>
                    })
                }
            </View>
        )
    }
}

