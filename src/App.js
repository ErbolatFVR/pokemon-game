import './App.css';
import bg1 from "./assets/bg2.jpg";
import bg2 from "./assets/bg3.jpg";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import PokemonCard from "./components/PokemonCard/PokemonCard";

const POKEMONS = [
    {
        "abilities": [
            "keen-eye",
            "tangled-feet",
            "big-pecks"
        ],
        "stats": {
            "hp": 63,
            "attack": 60,
            "defense": 55,
            "special-attack": 50,
            "special-defense": 50,
            "speed": 71
        },
        "type": "flying",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
        "name": "pidgeotto",
        "base_experience": 122,
        "height": 11,
        "id": 17,
        "values": {
            "top": "A",
            "right": 2,
            "bottom": 7,
            "left": 5
        }
    },
    {
        "abilities": [
            "intimidate",
            "shed-skin",
            "unnerve"
        ],
        "stats": {
            "hp": 60,
            "attack": 95,
            "defense": 69,
            "special-attack": 65,
            "special-defense": 79,
            "speed": 80
        },
        "type": "poison",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
        "name": "arbok",
        "base_experience": 157,
        "height": 35,
        "id": 24,
        "values": {
            "top": 5,
            "right": 9,
            "bottom": "A",
            "left": "A"
        }
    },
    {
        "abilities": [
            "static",
            "lightning-rod"
        ],
        "stats": {
            "hp": 35,
            "attack": 55,
            "defense": 40,
            "special-attack": 50,
            "special-defense": 50,
            "speed": 90
        },
        "type": "electric",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        "name": "pikachu",
        "base_experience": 112,
        "height": 4,
        "id": 25,
        "values": {
            "top": 8,
            "right": "A",
            "bottom": 9,
            "left": 6
        }
    },
    {
        "abilities": [
            "overgrow",
            "chlorophyll"
        ],
        "stats": {
            "hp": 45,
            "attack": 49,
            "defense": 49,
            "special-attack": 65,
            "special-defense": 65,
            "speed": 45
        },
        "type": "grass",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        "name": "bulbasaur",
        "base_experience": 64,
        "height": 7,
        "id": 1,
        "values": {
            "top": 8,
            "right": 4,
            "bottom": 2,
            "left": 7
        }
    },
    {
        "abilities": [
            "blaze",
            "solar-power"
        ],
        "stats": {
            "hp": 39,
            "attack": 52,
            "defense": 43,
            "special-attack": 60,
            "special-defense": 50,
            "speed": 65
        },
        "type": "fire",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        "name": "charmander",
        "base_experience": 62,
        "height": 6,
        "id": 4,
        "values": {
            "top": 7,
            "right": 6,
            "bottom": 1,
            "left": 4
        }
    }
];

function App() {

    return (

        <div className="App">
            <Header
                title="Pokemon Game"
                deskr="Эта приложения — о карточной игре. О симуляторе коллекционной карточной игры Pokemon"
            />
            <Layout id="Layout1" bgImage={bg1}
                    title="Правила Игры"
            >
                <p>В Pokémon Game игроки выступают в роли тренеров покемонов,
                    использующих покемонов для сражений друг с другом.Используя
                    способности своих покемонов, требуется нокаутировать вражеских покемонов.</p>

            </Layout>
            <Layout id="Layout2"
                    bgColor={"#fcba03"}
                    title="Карты"
                    >
                <div className="flex">
                    {
                        POKEMONS.map(item => <PokemonCard {...item} />)

                    }
                </div>
            </Layout>
            <Layout id="Layout3" bgImage={bg2}
                    title="О нас"
            >
                <p>
                    Каждая сетка была нацелена. Играли бесплатно,
                    нырянию нужны валы, футбол иногда сапиен.
                    Футбольные соревнования с инновационным софтом.
                </p>
            </Layout>
            <Footer/>
        </div>
    );
}

export default App;
