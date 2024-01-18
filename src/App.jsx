import Button from "./Button";
import Props from "./Props";
import PropsChildren from "./PropsChildren";
import AccordionMenu from "./AccordionMenu";
import Conditional from "./Conditional";
import Map from "./Map";
import ComponentPropsChildren from "./ComponentPropsChildren";
import ComponentTag from "./ComponentTag";

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
    </div>
  );
}
