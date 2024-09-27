import MainBody from "./components/mainBody/MainBody.tsx";
import NavBar from "./components/navbar/NavBar.tsx";
import { AppContainer } from "./AppStyle.tsx";

function App() {
  return (
    <>
      <AppContainer>
        <header>
          <NavBar />
        </header>
        <MainBody />
      </AppContainer>
    </>
  );
}

export default App;
