import "./App.css";
import Header from "./components/Header";
import Hero from "./assets/hero.png";
import About from "./assets/about.png";
import { useEffect, useState } from "react";
import { api } from "../src/services/axios";

export interface StandsProps {
  id: number;
  stand_name: string;
  description: string;
  image_url: string;
  stand_user: string;
  stand_hability: string;
  part_symbol: string;
  type: string[];
  aura_color: string;
  stats: string[];
  voice: string;
  joestar: string;
}

export function App() {
  const [stands, setStands] = useState<StandsProps[]>([]);

  useEffect(() => {
    async function getStands() {
      try {
        const response = await api.get("https://stands-api.vercel.app/stands");
        console.log("Api response: ", response.data);
        setStands(response.data);
      } catch (err) {
        throw new Error("Failed to get data");
      }
    }
    getStands();
  }, []);

  return (
    <>
      <div className="main">
        <Header />

        <div className="hero-content">
          <img className="hero-img" src={Hero} alt=""></img>
          <div className="hero-aura"></div>
          <div className="hero-text">
            <h1>A FLECHA TE ESCOLHEU DESPERTE SEU STAND!</h1>
            <button className="hero-button">DESPERTAR STAND</button>
          </div>
        </div>
      </div>
      <section>
        <div>
          <h1>Desperte seu Stand e entre no mundo de JoJo com o JoJoDex</h1>
          <p>
            Entre em uma jornada bizarra onde apenas os mais fortes sobrevivem!
            No JoJoDex, seu destino está traçado: desperte seu Stand e descubra
            sua verdadeira força. Colecione Stands lendários, monte sua equipe
            imbatível e desafie seus amigos em batalhas épicas, onde estratégia
            e poder se enfrentam. <br />
            <br /> Apenas aqueles com determinação conseguem dominar seu Stand e
            alcançar o auge!
          </p>

          <img src={About} alt="" />
        </div>
      </section>

      <section>
        {stands.map((stand) => (
          
          <div
            style={{ backgroundColor: stand.aura_color, width: 300 }}
            key={stand.id}
          >
           <img src={stand.part_symbol} alt="" />
            {/* <img src={stand.joestar} alt="" /> */}
            <img src={stand.image_url} alt="" />

            <div>
              {stand.type.map((t, index) => (
                <h2 key={index}>{t}</h2> 
              ))}
            </div>

            <div>
              <h2>Stand User</h2>
              <p>{stand.stand_user}</p>
            </div>

            <div>
              <h2>Habilidade</h2>
              <p>{stand.stand_hability}</p>
            </div>

            <h1>{stand.stand_name}</h1>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
