import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import Index from './view/index'
import 'taro-ui/dist/style/index.scss'

class App extends Component {

	config = {
		pages: [
			'view/index'
		],
		window: {
			backgroundTextStyle: 'dark',
			navigationBarBackgroundColor: '#FFF',
			navigationBarTitleText: '',
			navigationBarTextStyle: 'black',
			enablePullDownRefresh: true
		},
	}

	render () {
		return (
			<Index/>
		)
	}
}


Taro.render(<App />, document.getElementById('app'))
