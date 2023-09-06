export default function Topic({ title, time, text, redirect, img }) {
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div
        style={{ maxHeight: "600px" }}
        className="overflow-auto focus:scale-110 md:w-3/5 lg:w-3/6 w-5/6 h-auto bg-slate-300 p-10 text-center flex justify-center items-center rounded-lg"
      >
        <div style={{ maxHeight: "600px" }} className="mb-3">
          <h1 className="text-xl text-blue-900 text-bold text-2xl mt-3">
            {title}
          </h1>
          <time className="text-lg">{time}</time>
          <hr className="border-black" />
          <p className="text-lg text-justify">{text}</p>
          <img alt="Imagem do Tópico" src={img} />
          <a href={redirect}>
            <button className="bg-green-900 p-2 text-lg rounded-full mt-3 text-white hover:scale-110">
              Saiba Mais
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
