import "./App.css";

import Topic from "./components/Topic";
import logo from "./img/mais_anima.png";

import hamurabi from "./img/hamurabi.jpg";
import ciro from "./img/cilindro.png";
import magna from "./img/carta_magna.png";
import peticion from "./img/peticion.jpeg";
import virginia from "./img/virginia.jpeg";

import left_arrow from "./img/left.svg";
import right_arrow from "./img/right.svg";

function App() {
  let currentSlide = 0;
  let amountTranslated = 0;

  const goLeft = () => {
    const topics = document.querySelectorAll(".topic");
    const slider = document.getElementById("slider");

    if (currentSlide === topics.length - 1) return;

    currentSlide++;
    amountTranslated -= 100;

    slider.scrollTop = 0;

    topics.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = `translateX(${amountTranslated}%)`;
    });

    console.log(currentSlide);
    topics[currentSlide].style.opacity = "1";
  };

  const goRight = () => {
    const topics = document.querySelectorAll(".topic");
    const slider = document.getElementById("slider");

    if (currentSlide === 0) {
      return;
    }

    currentSlide--;
    amountTranslated += 100;

    slider.scrollTop = 0;

    topics.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = `translateX(${amountTranslated}%)`;
    });

    topics[currentSlide].style.opacity = "1";
  };

  return (
    <div className="App h-screen w-full overflow-hidden bg-blue-300 text-white">
      <header
        className="w-full flex justify-center items-center h-24"
        id="title"
      >
        <div className="w-auto p-2">
          <div className="w-full flex justify-center items-center">
            <img className="w-32 logo-animation" alt="Mais Anima" src={logo} />
          </div>
          <h1 className="text-xl initial-animation text-center">
            <strong>Uma cronologia dos Direitos Humanos </strong> - Linha do
            Tempo
          </h1>
        </div>
      </header>
      <main className="flex w-full h-5/6 justify-center items-center mt-5 main-animation">
        <button onClick={goRight}>
          <img alt="left" src={left_arrow} className="mr-2" />
        </button>

        <section
          className="w-5/6 h-full bg-white mt-2 p-3 text-slate-600 overflow-x-hidden overflow-y-auto"
          id="slider"
        >
          <div className="flex flex-start overflow-x-hidden flex-nowrap w-full overflow-y-auto">
            <Topic
              title="O Código de Hamurabi"
              description="O Código de Hamurabi foi inscrito em uma estela de diorito (uma pedra negra) com mais de dois metros de altura e contém 282 leis. Ele estava localizado em um local público na Babilônia, para que todos pudessem vê-lo e ler suas disposições. Foi criado na Mesopotâmia, por volta de 1754 a.C., durante o reinado do rei Hamurabi da Babilônia. Este código é uma das primeiras tentativas registradas de estabelecer um sistema legal codificado para governar uma sociedade e definir padrões de comportamento. Ele desempenhou um papel significativo na evolução do sistema legal ao longo da história e é estudado até os dias de hoje."
              img={hamurabi}
            />

            <Topic
              title="O Cilindro de Ciro"
              description="O Cilindro de Ciro é um antigo artefato de argila criado pelo rei persa Ciro II, o Grande, no século VI a.C. Ele é notável por ser uma das primeiras declarações de direitos humanos conhecidas na história. O cilindro registra a política de Ciro de promover a liberdade religiosa e a autonomia cultural em suas conquistas, especialmente na Babilônia. Isso o torna um símbolo da tolerância étnica e religiosa. Atualmente, o Cilindro de Ciro é uma importante relíquia histórica em exibição no Museu Britânico, em Londres, e é valorizado por seu papel na história dos direitos humanos e da governança imperial."
              img={ciro}
            />

            <Topic
              title="A Carta Magna"
              description="A Carta Magna, também conhecida como Magna Carta, foi um documento histórico assinado na Inglaterra em 1215. Ela é considerada um marco na história dos direitos e da governança. A Carta Magna estabeleceu limites ao poder absoluto dos monarcas e afirmou princípios fundamentais, como a igualdade perante a lei e o devido processo legal. Ela influenciou o desenvolvimento da democracia e dos direitos individuais em todo o mundo e é vista como uma precursora das constituições modernas. Em resumo, a Carta Magna é um símbolo importante da luta pelo estado de direito e pelos direitos civis."
              img={magna}
            />

            <Topic
              title="A Petição de Direitos (1628)"
              description="A Petição de Direitos de 1628, uma petição inglesa, desempenhou um papel crucial na limitação do poder do rei Carlos I e na proteção das liberdades individuais. Em resposta aos abusos de poder do monarca, o documento proibiu a imposição de tributos sem o consentimento do Parlamento, garantiu que as pessoas não seriam presas arbitrariamente e estabeleceu o princípio do devido processo legal. Esta petição afirmou as liberdades tradicionais inglesas e serviu como um marco importante no desenvolvimento do estado de direito e na proteção dos direitos civis. Seu impacto perdurou na história britânica, influenciando documentos subsequentes, como a Declaração de Direitos de 1689, que fortaleceu ainda mais o poder do Parlamento e os direitos individuais na Inglaterra."
              img={peticion}
            />

            <Topic
              title="A Declaração de Direitos da Virgínia de 1776"
              description="A Declaração de Direitos da Virgínia de 1776 exerceu uma influência significativa na redação da Declaração de Independência dos Estados Unidos e estabeleceu direitos fundamentais. Este documento proclamou princípios essenciais, como a liberdade de expressão, religião e o direito à propriedade, que mais tarde se tornariam pilares da Constituição dos Estados Unidos. A Declaração de Direitos da Virgínia foi um marco na luta pela liberdade e autodeterminação e ajudou a moldar os ideais democráticos que fundamentam os Estados Unidos até os dias de hoje."
              img={virginia}
            />
          </div>
        </section>

        <button onClick={goLeft}>
          <img alt="right" src={right_arrow} className="ml-2" />
        </button>
      </main>
    </div>
  );
}

export default App;
