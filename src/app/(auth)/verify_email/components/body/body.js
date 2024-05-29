import Image from "next/image";
import Link from "next/link";

const src = `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F324%2F973%2Foriginal%2Fvector-email-icon.jpg&f=1&nofb=1&ipt=6fcbb8ce6cfdf484d314f53fa21bdd09d8746ba4ad8fabb29989220d7d3ce4e8&ipo=images`;

export default function Body(props) {
  const {
    title1,
    title2,
    linkTo,
    linkTitle,
    buttonTitle,
    disabled,
    handleClick,
  } = props;

  return (
    <div className="w-full py-10 flex flex-col items-center justify-center gap-10">
      <div className="w-[150px] h-[75px] relative">
        <Image
          src={src}
          alt="email image"
          fill
          // sizes="(max-width:640px) 10vw, 165px"
          sizes="150px"
          quality={80}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>
        <h1 className="font-semibold text-[18px] text-primary lg:text-[20px]">
          {title1}
        </h1>
      </div>
      <div>
        <p className="text-[15px] text-center text-primary lg:text-[15px]">
          {title2}
        </p>
      </div>
      <div>
        {linkTo ? (
          <Link
            href={linkTo}
            className="px-5 py-[8px] text-white text-[15px] bg-secondary rounded-lg hover:bg-secondaryLight"
          >
            {linkTitle}
          </Link>
        ) : (
          <button
            className="px-5 py-[8px] text-white text-[15px] bg-blue rounded-lg disabled:bg-blueLight"
            disabled={disabled}
            onClick={handleClick}
          >
            {buttonTitle}
          </button>
        )}
      </div>
    </div>
  );
}
