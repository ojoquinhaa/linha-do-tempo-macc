import "./App.css";

import Topic from "./components/Topic";
import logo from "./img/mais_anima.png";

import us from "./img/us.jpeg";
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
          <div className="flex flex-start overflow-x-hidden flex-nowrap w-full overflow-y-hidden">
            <div className="topic w-full h-full p-1">
              <h1 className="text-xl mb-1 text-center">MACC 2023 - 1° ano A</h1>
              <p className="mb-3 text-justify">
                Bem-vindo à Linha do Tempo dos Direitos Humanos da nossa sala!
                Utilize as setas horizontais para navegar ao longo da cronologia
                e compreender um pouco mais sobre a história dos direitos
                humanos.
              </p>
              <p className="text-center text-base mb-2">
                Feita por:{" "}
                <span className="text-black">João Luiz Prado Neiva</span>
              </p>
              <p className="text-center text-base mb-2">
                Professoras Orientadoras:{" "}
                <span className="text-black">
                  Adriana Borges e Bruna Venceslau
                </span>
              </p>
              <div className="w-full">
                <img src={us} alt="Sala" />
              </div>
            </div>

            {/* Codigo de Hamurabi */}
            <Topic
              title="O Código de Hamurabi"
              description="O Código de Hamurabi foi inscrito em uma estela de diorito (uma pedra negra) com mais de dois metros de altura e contém 282 leis. Ele estava localizado em um local público na Babilônia, para que todos pudessem vê-lo e ler suas disposições. Foi criado na Mesopotâmia, por volta de 1754 a.C., durante o reinado do rei Hamurabi da Babilônia. Este código é uma das primeiras tentativas registradas de estabelecer um sistema legal codificado para governar uma sociedade e definir padrões de comportamento. Ele desempenhou um papel significativo na evolução do sistema legal ao longo da história e é estudado até os dias de hoje."
              img={hamurabi}
            />
            {/* Cilindro de Ciro */}
            <Topic
              title="O Cilindro de Ciro"
              description="O Cilindro de Ciro é um antigo artefato de argila criado pelo rei persa Ciro II, o Grande, no século VI a.C. Ele é notável por ser uma das primeiras declarações de direitos humanos conhecidas na história. O cilindro registra a política de Ciro de promover a liberdade religiosa e a autonomia cultural em suas conquistas, especialmente na Babilônia. Isso o torna um símbolo da tolerância étnica e religiosa. Atualmente, o Cilindro de Ciro é uma importante relíquia histórica em exibição no Museu Britânico, em Londres, e é valorizado por seu papel na história dos direitos humanos e da governança imperial."
              img={ciro}
            />
            {/* Carta Magna */}
            <Topic
              title="A Carta Magna"
              description="A Carta Magna, também conhecida como Magna Carta, foi um documento histórico assinado na Inglaterra em 1215. Ela é considerada um marco na história dos direitos e da governança. A Carta Magna estabeleceu limites ao poder absoluto dos monarcas e afirmou princípios fundamentais, como a igualdade perante a lei e o devido processo legal. Ela influenciou o desenvolvimento da democracia e dos direitos individuais em todo o mundo e é vista como uma precursora das constituições modernas. Em resumo, a Carta Magna é um símbolo importante da luta pelo estado de direito e pelos direitos civis."
              img={magna}
            />
            {/* Petição de Direitos */}
            <Topic
              title="A Petição de Direitos (1628)"
              description="A Petição de Direitos de 1628, uma petição inglesa, desempenhou um papel crucial na limitação do poder do rei Carlos I e na proteção das liberdades individuais. Em resposta aos abusos de poder do monarca, o documento proibiu a imposição de tributos sem o consentimento do Parlamento, garantiu que as pessoas não seriam presas arbitrariamente e estabeleceu o princípio do devido processo legal. Esta petição afirmou as liberdades tradicionais inglesas e serviu como um marco importante no desenvolvimento do estado de direito e na proteção dos direitos civis. Seu impacto perdurou na história britânica, influenciando documentos subsequentes, como a Declaração de Direitos de 1689, que fortaleceu ainda mais o poder do Parlamento e os direitos individuais na Inglaterra."
              img={peticion}
            />
            {/* Declaração de Direitos */}
            <Topic
              title="A Declaração de Direitos da Virgínia de 1776"
              description="A Declaração de Direitos da Virgínia de 1776 exerceu uma influência significativa na redação da Declaração de Independência dos Estados Unidos e estabeleceu direitos fundamentais. Este documento proclamou princípios essenciais, como a liberdade de expressão, religião e o direito à propriedade, que mais tarde se tornariam pilares da Constituição dos Estados Unidos. A Declaração de Direitos da Virgínia foi um marco na luta pela liberdade e autodeterminação e ajudou a moldar os ideais democráticos que fundamentam os Estados Unidos até os dias de hoje."
              img={virginia}
            />
            {/* Independencia EUA */}
            <Topic
              title="Declaração de Independência dos EUA"
              description="Em 1776, os líderes americanos proclamaram a independência das colônias britânicas, culminando na icônica Declaração de Independência dos EUA. Este documento histórico, redigido principalmente por Thomas Jefferson, afirmou os princípios fundamentais que moldaram a nação americana. Destacou a crença de que todos os seres humanos têm direitos inalienáveis à vida, liberdade e busca da felicidade. Esses princípios não apenas inspiraram a revolução americana, mas também serviram de base para os valores democráticos que orientaram o desenvolvimento dos Estados Unidos ao longo dos anos, influenciando profundamente a história e a cultura do país."
              img="https://imgsapp.em.com.br/app/noticia_127983242361/2016/07/04/779859/20160704130047905174o.jpg"
            />
            {/* Homem e cidadão */}
            <Topic
              title="Declaração dos Direitos do Homem e do Cidadão"
              description="A Declaração dos Direitos do Homem e do Cidadão, promulgada em 1789 durante a Revolução Francesa, representou um marco significativo na história dos direitos humanos. Este documento-chave proclamou uma série de direitos universais, incluindo liberdade, igualdade e fraternidade. Ele afirmava que todos os indivíduos nascem livres e iguais em direitos, estabelecendo princípios fundamentais que influenciaram a evolução dos sistemas democráticos em todo o mundo. A Declaração dos Direitos do Homem e do Cidadão refletiu o desejo de justiça e igualdade que impulsionou a Revolução Francesa, deixando um legado duradouro na luta pelos direitos humanos e na política global."
              img="https://multirio.rio.rj.gov.br/images/img_2020_08/DH-assembeia.jpg"
            />
            {/* Abolição do Tráfico Transatlântico de Escravos */}
            <Topic
              title="Abolição do Tráfico Transatlântico de Escravos"
              description="Em 1807, o Reino Unido promulgou uma legislação histórica que proibiu o tráfico de escravos transatlântico. Essa medida representou um passo significativo na luta contra a escravidão e na promoção dos direitos humanos. Ao banir o comércio de escravos, o Reino Unido liderou um movimento internacional para o fim dessa prática desumana. A abolição do tráfico transatlântico de escravos foi um marco crucial na trajetória para a abolição total da escravidão e ajudou a estabelecer o Reino Unido como um defensor dos direitos humanos em escala global."
              img="https://static.mundoeducacao.uol.com.br/mundoeducacao/2020/08/trafico-negreiro.jpg"
            />

            {/* Lei de Reforma do Trabalho Infantil de 1833 */}
            <Topic
              title="Lei de Reforma do Trabalho Infantil de 1833"
              description="A Lei de Reforma do Trabalho Infantil de 1833 marcou um avanço crucial na proteção das crianças trabalhadoras no Reino Unido. Esta legislação pioneira foi a primeira a reconhecer a necessidade de regulamentar e restringir o trabalho infantil em fábricas e minas, estabelecendo limites de idade, horas de trabalho e condições seguras para as crianças. A Lei de 1833 refletiu uma mudança significativa na conscientização sobre os direitos das crianças e o reconhecimento de que elas deveriam ser protegidas da exploração no local de trabalho. Isso estabeleceu um precedente importante para futuras leis trabalhistas e influenciou o movimento global em prol dos direitos da infância. Para imagens relacionadas a esse tópico, você pode fazer uma pesquisa em um mecanismo de busca de imagens usando palavras-chave específicas, como Lei de Reforma do Trabalho Infantil de 1833 ou trabalho infantil no século XIX no Reino Unido."
              img="https://www.nucleodoconhecimento.com.br/wp-content/uploads/2017/10/f5-a-condicao-das-criancas-diante-do-trabalho-nas-fabricas.jpg"
            />

            {/* O Ato de Kansas-Nebraska de 1854 */}
            <Topic
              title="O Ato de Kansas-Nebraska de 1854"
              description="O Ato de Kansas-Nebraska de 1854 foi uma legislação significativa nos Estados Unidos que teve um impacto profundo nas tensões pré-Guerra Civil em relação à escravidão. Essa lei proposta por Stephen A. Douglas permitiu que os territórios de Kansas e Nebraska determinassem por voto popular se permitiriam a escravidão, em vez de seguir a linha de restrição anteriormente estabelecida pela Lei de Missouri de 1820, que proibia a escravidão em territórios ao norte de uma determinada latitude. A passagem desse ato levou a uma violenta disputa entre defensores da escravidão e oponentes em Kansas, conhecida como Bleeding Kansas, que refletiu a crescente divisão entre o Norte e o Sul dos Estados Unidos. O Ato de Kansas-Nebraska é considerado um dos eventos que intensificaram as tensões entre estados escravagistas e estados abolicionistas, culminando na Guerra Civil Americana em 1861."
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxTFnY-arnF4PJ5C0iPBY5rfePR-n2YIKYvvYdmeK93rX9snqcS4jVf5DsTAtOa-CNyg&usqp=CAU"
            />

            {/* A Proclamação da Emancipação de 1863 */}
            <Topic
              title="A Proclamação da Emancipação de 1863"
              description="A Proclamação da Emancipação de 1863 foi um marco histórico nos Estados Unidos durante a Guerra Civil Americana. O presidente Abraham Lincoln emitiu essa proclamação que declarava a emancipação de todos os escravos nos estados rebeldes do Sul que estavam em rebelião contra a União. Essa medida, embora não tenha libertado imediatamente todos os escravos, simbolizou o compromisso do governo dos Estados Unidos em abolir a escravidão e transformou o conflito civil em uma luta não apenas pela preservação da União, mas também pela liberdade e igualdade. A Proclamação da Emancipação foi um passo crucial na direção da abolição da escravidão nos Estados Unidos e teve um impacto profundo na história do país, abrindo caminho para a 13ª Emenda da Constituição dos Estados Unidos, que finalmente aboliu a escravidão em todo o país."
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFEmHkxAyj5FFbgE2RTv7jULXgzcU4KccSlQ&usqp=CAU"
            />

            {/* A 13ª Emenda à Constituição dos Estados Unidos */}
            <Topic
              title="A 13ª Emenda à Constituição dos Estados Unidos"
              description="A 13ª Emenda à Constituição dos Estados Unidos, ratificada em 1865, foi um marco histórico que aboliu a escravidão nos Estados Unidos. Esta emenda constitucional representou o fim oficial da instituição da escravidão, declarando que nem a escravidão nem formas involuntárias de servidão, exceto como punição por crime, onde o réu tenha sido devidamente condenado, existirão dentro dos Estados Unidos ou em qualquer lugar sujeito à sua jurisdição. A 13ª Emenda foi promulgada após o término da Guerra Civil Americana e foi um dos principais resultados dessa guerra. Ela encerrou uma era de opressão e desumanidade, garantindo a liberdade aos afro-americanos que anteriormente eram escravizados. A aprovação desta emenda é um testemunho da evolução dos Estados Unidos em direção a uma sociedade mais justa e igualitária."
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdaB7f-Y55LUbLgRDrlH908SsQWSlSj6Vzlw&usqp=CAU"
            />

            {/* A Lei das Horas de Trabalho de 1880 */}
            <Topic
              title="A Lei das Horas de Trabalho de 1880"
              description="A Lei das Horas de Trabalho de 1880 representou um passo importante na regulação das condições de trabalho nos Estados Unidos. Esta legislação limitou o número de horas que os trabalhadores podiam ser obrigados a trabalhar, visando melhorar a segurança e o bem-estar dos trabalhadores. Embora a Lei das Horas de Trabalho de 1880 tenha sido um marco no movimento para regulamentar as horas de trabalho, suas disposições e eficácia variaram de acordo com estados e setores específicos da indústria. No entanto, ao longo do tempo, legislações posteriores e movimentos trabalhistas continuaram a lutar por condições de trabalho mais justas e limitações adequadas de horas."
              img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/8hoursday_banner_1856.jpg/640px-8hoursday_banner_1856.jpg"
            />

            {/* Petição de Direitos */}
            <Topic
              title="A Convenção de Genebra de 1864"
              description="A Convenção de Genebra de 1864 foi um tratado internacional que estabeleceu regras fundamentais para o tratamento humanitário de prisioneiros de guerra durante conflitos armados. Esta convenção foi um dos primeiros passos na criação de um sistema internacional de proteção dos direitos dos prisioneiros de guerra e dos feridos em combate. A Convenção de Genebra de 1864 foi assinada após a iniciativa de Henry Dunant, que testemunhou o sofrimento de soldados feridos durante a Batalha de Solferino, na Itália, em 1859. A convenção estabeleceu princípios como a imparcialidade no tratamento dos feridos e a neutralidade dos profissionais de saúde que prestam assistência médica aos combatentes."
              img="https://i0.wp.com/www.icrc.org/eng/assets/images/other/hist-d-00026_z.jpg"
            />

            {/* A Primeira Conferência de Paz de Haia */}
            <Topic
              title="A Primeira Conferência de Paz de Haia"
              description="A Primeira Conferência de Paz de Haia, realizada em 1899, foi um evento significativo que marcou o início dos esforços internacionais para prevenir conflitos armados e promover a paz. Esta conferência reuniu representantes de várias nações com o objetivo de discutir questões relacionadas à arbitragem, à limitação de armamentos e ao estabelecimento de procedimentos para a resolução pacífica de disputas entre os estados. A iniciativa da Primeira Conferência de Paz de Haia foi motivada pelo desejo de evitar os horrores da guerra e promover a cooperação internacional. Embora não tenha conseguido evitar a eclosão da Primeira Guerra Mundial alguns anos depois, a conferência lançou as bases para futuros esforços diplomáticos e tratados internacionais que visam à prevenção de conflitos armados e à manutenção da paz."
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkE1qL65cEF9ndJiO4-tx9W-TrLbdWmNhMnQ&usqp=CAU"
            />

            {/* Declaração Universal dos Direitos da Criança (1924) */}
            <Topic
              title="Declaração Universal dos Direitos da Criança (1924)"
              description="Este foi o primeiro tratado internacional dedicado à proteção dos direitos das crianças. Embora tenha sido substituído posteriormente pela Convenção sobre os Direitos da Criança em 1989, esse marco inicial estabeleceu princípios fundamentais para a proteção e bem-estar das crianças em todo o mundo, reconhecendo sua dignidade e necessidade de cuidados especiais. A Declaração enfatizou a importância da educação, alimentação adequada e proteção contra exploração e abuso, estabelecendo as bases para futuras leis e acordos internacionais em prol dos direitos das crianças."
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6JK--KJV9z7p0diVdW8AIcUlDggU2kU9w1A&usqp=CAU"
            />

            {/* Aprovação da 19ª Emenda nos EUA (1920) */}
            <Topic
              title="Aprovação da 19ª Emenda nos EUA (1920)"
              description="A 19ª Emenda à Constituição dos Estados Unidos foi um marco histórico que garantiu o direito de voto às mulheres. Esta emenda foi uma conquista significativa no movimento sufragista, permitindo que as mulheres participassem plenamente da democracia. Ela representou um avanço importante na busca pela igualdade de gênero e o reconhecimento dos direitos das mulheres como cidadãs com direito ao voto e à participação política, abrindo caminho para futuras lutas pelos direitos das mulheres em todo o mundo."
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOWoMqlTot_S4DlpBZ4QHAn0MgKU4RwscjA&usqp=CAU"
            />

            {/* Carta das Nações Unidas (1945) */}
            <Topic
              title="Carta das Nações Unidas (1945)"
              description="A Carta das Nações Unidas é um documento fundamental que estabeleceu a Organização das Nações Unidas (ONU) e promoveu a cooperação internacional após a Segunda Guerra Mundial. Ela foi criada com o objetivo de manter a paz e segurança globais, promover a cooperação entre as nações, resolver conflitos por meios pacíficos e promover o respeito pelos direitos humanos. A Carta das Nações Unidas definiu os princípios e valores centrais da ONU, tornando-se um alicerce essencial para a diplomacia internacional e a promoção da paz e dos direitos humanos em todo o mundo."
              img="https://e4k4c4x9.rocketcdn.me/en/wp-content/uploads/sites/15/2020/12/logo-EN-UN.png"
            />

            {/* Declaração Universal dos Direitos Humanos (1948) */}
            <Topic
              title="Declaração Universal dos Direitos Humanos (1948)"
              description="Este documento é fundamental para os direitos humanos em escala global, delineando os direitos básicos que todas as pessoas devem desfrutar, independentemente de sua origem, raça, religião, gênero ou outras características. A Declaração Universal dos Direitos Humanos foi adotada pelas Nações Unidas e estabelece os princípios essenciais da dignidade humana, liberdade, igualdade, não discriminação e justiça. Ela serve como um guia moral e legal para governos e sociedades, promovendo a paz, a justiça e o respeito pelos direitos fundamentais em todo o mundo."
              img="https://static.wixstatic.com/media/6ae90a_26aa8492898b43aeae5fb8d0f3d3e924~mv2.png/v1/fill/w_392,h_392,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.png"
            />

            {/* Convenção para Prevenir e Punir o Genocídio (1948) */}
            <Topic
              title="Convenção para Prevenir e Punir o Genocídio (1948)"
              description="Esta convenção internacional é um marco crucial na história dos direitos humanos, pois definiu e proibiu o genocídio como um crime internacional. A Convenção estabeleceu a obrigação dos Estados de prevenir e punir atos de genocídio, que envolvem a intenção de destruir, total ou parcialmente, um grupo étnico, religioso, racial ou nacional. Ela desempenhou um papel fundamental na conscientização e na responsabilização por atrocidades em massa, ajudando a garantir que aqueles que cometem genocídio sejam levados à justiça e que a humanidade trabalhe para prevenir futuras tragédias semelhantes."
              img="https://wjc-dev.imgix.net/about-holocaust/assets/2s3GFs1S/1280px-srebrenica_massacre_memorial_gravestones_2009_1-768x456.jpg?auto=format&fit=crop&fm=jpg&h=480&lossless=true&q=60&w=750"
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
