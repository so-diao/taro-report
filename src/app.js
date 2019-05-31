import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import Entry from './view/index'

class App extends Component {

	config = {
		pages: [
			'view/index',
			'view/posts',
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
			<Entry/>
		)
	}
}


Taro.render(<App />, document.getElementById('app'))
