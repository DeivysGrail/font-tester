import Input from "./components/input";
import "./App.css"
import Container from "./components/container";
export default function App() {

    // etat


    // comportements



    // affichage
    return <div>
        <Input/>
        <Container  id={"netflix1"}  name={"Netflix"}/>
        <Container  id={"netflix2"}  name={"Netflix"}/>
        <Container  id={"facebook"}  name={"Facebook"}/>
        <Container id={"spotify"} name={"Spotify"}/>
    </div>
}