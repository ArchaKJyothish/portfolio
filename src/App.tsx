import { KageLandingPage } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export default function App() {
  return (
    <div className="shader-frame">
      <KageLandingPage
        headingFont="onest"
        bodyFont="onest"
        headingWeight="400"
        bodySize={17}
        bodyWeight="300"
        primaryColor="#e0231c"
        headingSize={46}
        headingLetterSpacing={-0.012}
      />
      <a className="todo-entry" href="/todo/index.html">
        My To-Do List →
      </a>
    </div>
  );
}
