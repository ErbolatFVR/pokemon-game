import './App.css';
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import bg1 from "./assets/bg2.jpg"
import bg2 from "./assets/bg3.jpg"

function App() {
    return (
        <div className="App">
            <Header
                title="Pokemon Game"
                deskr="Этот сайт Создан с помощю JS библиотеки React JS"
            />
            <Layout id="Layout"
                title="Небольшой сайт Про Пoкемонов"
                urlBg={ bg1 }
            />
            <Layout id="Layout"
                descr="F,hfrflfmhf"
            />
            <Layout id="Layout" urlBg=""
                colorBg="sss"
                urlBg={ bg2 }
            />
            <Footer />
        </div>
    );
}

export default App;
