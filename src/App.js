import { Fragment } from "react";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import {useSelector} from "react-redux";
import UserProfile from './components/UserProfile'

function App() {

  const isAuth = useSelector(state=>state.auth.authenticated);
  return (
    <Fragment>
      <Header />
      {isAuth && <UserProfile/>}
      {!isAuth && <Auth/>}
      <Counter />
    </Fragment>
  );
}

export default App;
