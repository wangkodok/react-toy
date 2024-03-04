import Button from "./Button";
import Props from "./Props";
import PropsChildren from "./PropsChildren";
import AccordionMenu from "./AccordionMenu";
import Conditional from "./Conditional";
import Map from "./Map";
import ComponentPropsChildren from "./ComponentPropsChildren";
import ComponentTag from "./ComponentTag";
import StateParent from "./StateParent";
import StateParentProps from "./StateParentProps";
import StyledComponents from "./StyledComponents";
import TailwindCSS from "./TailwindCSS";
import UseRef from "./UseRef";
import Project from "./Project";
import UserInput from "./UserInput";
import StateList from "./StateList";
import ContextAPI from "./ContextAPI";
import UseReducer from "./UseReducer";
import UseReducerModal from "./UseReducerModal";
import UseEffectMount from "./UseEffectMount";

export default function App() {
  return (
    <div>
      <Button />
      <Props />
      <PropsChildren />
      <AccordionMenu />
      <Conditional />
      <Map />
      <ComponentPropsChildren />
      <ComponentTag />
      <StateParent />
      <StateParentProps />
      <StyledComponents />
      <TailwindCSS />
      <UseRef />
      <Project />
      <UserInput />
      <StateList />
      <ContextAPI />
      <UseReducer />
      <UseReducerModal />
      <UseEffectMount />
    </div>
  );
}
