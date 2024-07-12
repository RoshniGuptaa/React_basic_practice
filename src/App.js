import "./App.css";
import ComponentC from "./contextPractice/ComponentC";
import { UserProvider } from "./contextPractice/userContext";
// import ClickCounter from "./components/ClickCounter";
// import HoverCounter from "./components/HoverCounter";
// import FRParentInput from "./components/FRParentInput";
// import PortalDemo from "./components/PortalDemo";
// import ParentComp from "./components/ParentComp";
// import PureC from "./components/PureC";
//import RefsDemo from "./components/RefsDemo";

//import FragmentDemo from './components/FragmentDemo';
//import Form from './components/Form';
// import ClassClick from './components/ClassClick';
// import Counter from './components/Counter';
// import EventBind from './components/EventBind';
// import FunctionClick from './components/FunctionClick';
// import Greet from './components/Greet';
// import Message from './components/Message';
// import NameList from './components/NameList';
// import UserGreeting from './components/UserGreeting';
// import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <UserProvider value="Roshni">
      <ComponentC></ComponentC>
      </UserProvider>
      
       {/* <ClickCounter></ClickCounter>  
       <HoverCounter></HoverCounter> */}
      {/* <PortalDemo></PortalDemo> */}
       {/* <FRParentInput></FRParentInput> */}
      {/* <RefsDemo></RefsDemo> */}
      {/* <ParentComp></ParentComp> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <Form/> */}
      {/* <Message/>
     <Greet></Greet>
     <Welcome/>
     <Counter/> */}

      {/* <UserGreeting></UserGreeting>
     <FunctionClick></FunctionClick>
     <ClassClick></ClassClick>
     <EventBind></EventBind>

     <NameList></NameList> */}
    </div>
  );
}

export default App;
