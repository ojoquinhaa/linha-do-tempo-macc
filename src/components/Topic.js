export default function Topic({ title, description, img }) {
  return (
    <div className="topic flex-1 w-full h-full p-1 overflow-auto">
      <h1 className="text-xl mb-1 text-center">{title}</h1>
      <div className="w-full flex justify-center items-center">
        <img alt={title} src={img} className="w-full img-limit" />
      </div>
      <p className="text-justify text-base mb-2">&nbsp;{description}</p>
    </div>
  );
}
