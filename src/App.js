import "./App.css";
import "./appStyle.css";
import styles from "./appStyle.module.css";
import ClassClick from "./components/ClassClick";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/Content";
import Counter from "./components/Counter";
import ErrorBoundry from "./components/ErrorBoundry";
import EventBind from "./components/EventBind";
import FocusInput from "./components/FocusInput";
import Form from "./components/Form";
import FragmentDemo from "./components/FragmentDemo";
import FunctionClick from "./components/FunctionClick";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Hero from "./components/Hero";
import Inline from "./components/Inline";
import LifecycleA from "./components/LifecycleA";
import Message from "./components/Message";
import NameLists from "./components/NameLists";
import ParentComp from "./components/ParentComp";
import ParentComponent from "./components/ParentComponent";
import ParentInput from "./components/ParentInput";
import PortalsDemo from "./components/PortalsDemo";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import RefsComp from "./components/RefsComp";
import StyleSheets from "./components/StyleSheets";
import Table from "./components/Table";
import UserGreeting from "./components/UserGreeting";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Greet name="Su Su" age="20" />
      <Welcome name="Alex" age="25" />
      <Hello name="Su Su" age="20">
        <p>This is children prop.</p>
      </Hello>
      <Hello name="Aye Aye" age="25">
        <button>Submit</button>
      </Hello>
      <Hello name="Khin Khin" age="23" />
      <Message />
      <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentComponent />
      <UserGreeting />
      <NameLists />
      <StyleSheets isPrimary={true} />
      <Inline />
      <h3 className="error">Error</h3>
      <h3 className={styles.success}>Success</h3>
      <Form />
      <LifecycleA />
      <FragmentDemo />
      <Table />
      <ParentComp />
      <RefsComp />
      <FocusInput />
      <ParentInput />
      <PortalsDemo />
      <ErrorBoundry>
        <Hero name="Batman" />
        <Hero name="Superman" />
        <Hero name="HaHa" />
      </ErrorBoundry>
      <UserProvider value="Studying context...">
        <ComponentC />
      </UserProvider>
      <PostList />
      <PostForm />
    </div>
  );
}

export default App;
