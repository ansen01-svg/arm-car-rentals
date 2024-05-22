export default function Card(props) {
  const { icon, title, text } = props;

  return (
    <div className="w-full h-[170px] flex flex-col items-center justify-start gap-4 md:w-[calc((100%/2)-36px)] lg:w-[calc((100%/4)-36px)] lg:h-[250px] lg:gap-6">
      <div>{icon}</div>
      <div>
        <h1 className="text-center text-primary text-[18px] font-semibold md:text-xl">
          {title}
        </h1>
      </div>
      <div>
        <p className="text-[15px] text-gray1 text-center md:text-[16px]">
          {text}
        </p>
      </div>
    </div>
  );
}
