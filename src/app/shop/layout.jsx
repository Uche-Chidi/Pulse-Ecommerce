import { AllShoeMains } from "./Shop1";
import Shop2 from "./Shop2";


export default function layout({ children }) {
  return (
    <div>
        {children}
        <AllShoeMains />
    <Shop2 />
    </div>
  )
}
