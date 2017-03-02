import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider, FormattedMessage, addLocaleData} from 'react-intl';
import {render} from 'react-dom';
//引入locale配置文件，具体路径根据实际情况填写
import zh_CN from './zh_CN';
import en_US from './en_US';
//如果浏览器没有自带intl，则需要在使用npm安装intl之后添加如下代码
// import intl from 'intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
addLocaleData([...en, ...zh]);

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <FormattedMessage
            id='hello'
            description='say hello to Howard.'
            defaultMessage='default'
          />
        </div>
        <button onClick={this.props.change}>change</button>
      </div>
    );
  }
}

class Intl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: 'zh',
      messages: zh_CN
    };
  }

  change() {
    // console.log('................');
    // console.log(this.state.locale);
    // console.log('................');

    switch (this.state.locale) {
      case 'en':
        // console.log('en');
        this.setState({
          locale:'zh',
          messages:zh_CN
        })
        break;
      case 'zh':
        // console.log('zh');
        this.setState({
          locale:'en',
          messages:en_US
        })
        break;
      default:
        // console.log('default');
        this.setState({
          locale:'zh',
          messages:zh_CN
        })
        break;
    }
  }

  render() {

    return (
      <IntlProvider
        locale={this.state.locale}
        messages={this.state.messages}
      >
        <App change={this.change.bind(this)}/>
      </IntlProvider>
    )
  }
}

render(
  <Intl/>,
  document.getElementById('content')
);