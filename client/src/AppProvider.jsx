import { Provider } from 'react-redux'
import App from './App'
import store from './assets/Windows/src/reducers'

export default function AppProvider() {
  return <Provider store={store}>
    <App/>
  </Provider>
}
