
const TemplateShow = ({template, onClick,key}) => {

  return (
    <div
      className="p-2 bg-slate-50"
      onClick={() => {
        onClick(template);
      }}
    >
      <img
        src={`/${template}.jpg`}
        alt={`${template}`}
        className="h-72 w-52 mx-auto"
      />
      <p className="p-2 mx-auto capitalize">{template}</p>
    </div>
  );
}

export default TemplateShow