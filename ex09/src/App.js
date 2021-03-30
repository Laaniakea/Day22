import logo from './logo.svg';
import './App.css';
import Flower from './Flower';

class App extends Component {
  render(){
    const color = this.props;
  return (
    <div className="App">
      <Flower color= "red"/>
    </div>
  );
}
}
export default App;



