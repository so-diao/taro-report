
/**
 * 
 * 去掉 onPullDownRefresh 就不会报错
 * 
 * 或者保留 onPullDownRefresh 使用第（2、3）种render方式也不会报错
 * 
 */


import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Article from '@/view/pages/article/'
import Product from '@/view/pages/product/'


export default class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: '',
            posts: {}
        }
    }

    onPullDownRefresh() {
        this.getPosts()
    }

    async getPosts() {

    }

    render() {
        const type = this.state.type

        if ( ['portfolio', 'posts'].includes(type) ) {
            return <Article posts={this.state.posts}></Article>
        } else if ( 'products' === type ) {
            return <Product posts={this.state.posts}></Product>
        }
    }

    // render() {
    //     const type = this.state.type

    //     if ( ['portfolio', 'posts'].includes(type) ) {
    //         return <View>1</View>
    //     } else if ( 'products' === type ) {
    //         return <View>2</View>
    //     }
    // }

    // render() {
    //     const type = this.state.type

    //     return (
    //         <View>
    //             {
    //                 ['portfolio', 'posts'].includes(type) && <Article posts={this.state.posts}></Article>
    //             }
    //             {
    //                 type === 'products' && <Product posts={this.state.posts}></Product>
    //             }
    //         </View>
    //     )
    // }
}
