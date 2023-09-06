import "./App.css";
import logo from "./img/mais_anima.png";
import Topic from "./components/Topic";

import hamurabi from "./img/hamurabi.jpg";
import ciro from "./img/cilindro.png";
import magna from "./img/carta_magna.png";
import { useRef } from "react";

function App() {
  return (
    <div className="App h-screen w-full overflow-y-hidden">
      <header
        className="w-full fixed flex justify-center items-center mt-2 h-auto"
        id="title"
      >
        <div className="w-full p-2">
          <div className="w-full">
            <img className="w-32" alt="Mais Anima" src={logo} />
          </div>

          <h1 className="text-green-900 text-base mt-1">
            Uma cronologia dos Direitos Humanos{" "}
            <span className="text-blue-900">- Linha do Tempo</span>
          </h1>
          <p>
            <span className="text-green-900">Professoras:</span> Adriana e Bruna
            V. Borges
          </p>
          <p className="text-blue-900">1° Ensino Medio</p>
        </div>
      </header>
      <main
        className="flex justify-center items-center"
        style={{ width: "300vw" }}
      >
        <Topic
          title="Código de Hamurabi"
          time="entre 1792 e 1750 a.C"
          text='O Código de Hamurabi é um conjunto de leis antigas, inscritas em uma estela de pedra, criado por volta de 1754 a.C. pelo rei Hamurabi da Mesopotâmia. Ele abrange uma variedade de assuntos, como leis criminais, civis e comerciais. O código estabelece penas proporcionais aos crimes cometidos e tem uma ênfase na retaliação e no princípio de "olho por olho, dente por dente". Embora não seja uma declaração de direitos humanos moderna, o código fornece insights sobre a sociedade e a justiça da época, sendo um dos mais antigos exemplos conhecidos de legislação escrita.'
          redirect="https://brasilescola.uol.com.br/historiag/codigo-hamurabi.htm"
          img={hamurabi}
        />
        <Topic
          title="Cilindro de Ciro"
          time="539 a.C"
          text="O Cilindro de Ciro foi criado após a conquista da cidade da
              Babilônia em 539 a.C. por Ciro, o fundador do Império Persa
              Aquemênida. A inscrição nele contida declara a política de Ciro de
              respeitar as tradições culturais, religiosas e étnicas dos povos
              conquistados e permitir o retorno de exilados a suas terras de
              origem. Esse decreto é visto por muitos como um dos primeiros
              exemplos registrados de uma abordagem humanitária à governança e
              ao respeito pelos direitos dos povos conquistados."
          redirect="https://pt.wikipedia.org/wiki/Cilindro_de_Ciro"
          img={ciro}
        />
        <Topic
          title="A Carta Magna"
          time="1215 d.C"
          text="A Carta Magna estabeleceu princípios fundamentais, incluindo a ideia de que o rei não estava acima da lei e que mesmo o monarca deveria obedecer às leis vigentes. Ela limitou os poderes arbitrários do rei e introduziu a noção de devido processo legal, proteção contra prisões arbitrárias e a garantia de julgamentos justos. Embora originalmente tenha sido um acordo entre a aristocracia e o monarca, ao longo do tempo, seus princípios influenciaram a evolução do sistema legal inglês e, eventualmente, contribuíram para o desenvolvimento dos direitos e liberdades fundamentais que são centrais nas democracias modernas."
          redirect="https://www.historiadomundo.com.br/curiosidades/carta-magna.htm"
          img={magna}
        />
      </main>
    </div>
  );
}

export default App;
