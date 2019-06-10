
import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import Picture from './picture'

export default class Index extends Component {
    render() {
        return (
            <View>
                <Swiper circular>
                    <SwiperItem>
                        <Picture src='https://user-images.githubusercontent.com/24741025/59186938-c48e4180-8ba6-11e9-955a-14c9a88da333.jpg'></Picture>
                    </SwiperItem>
                    <SwiperItem>
                        <Picture src='https://user-images.githubusercontent.com/24741025/59186938-c48e4180-8ba6-11e9-955a-14c9a88da333.jpg'></Picture>
                    </SwiperItem>
                </Swiper>
            </View>
        )
    }
}

