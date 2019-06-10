
import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'


export default class Picture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }
    componentWillMount() {
        this.setState({
            loading: true
        })
    }
    onError() {
        this.setState({
            loading: false
        })
    }
    onLoad() {
        this.setState({
            loading: false
        })
    }
    render() {
        const { src } = this.props
        return (
            <View>
                {
                    this.state.loading && <AtActivityIndicator></AtActivityIndicator>
                }
                <Image src={src} onError={this.onError.bind(this)} onLoad={this.onLoad.bind(this)}></Image>
            </View>
        )
    }
}

