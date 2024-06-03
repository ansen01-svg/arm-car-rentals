import Link from "next/link";

export default async function PageContent() {
  return (
    <div className="w-full px-5 md:px-6 lg:px-20">
      <div className="w-full h-[50px] py-2 text-[12px] flex items-start justify-start gap-2">
        <Link href={"/"}>Home</Link>
        <p>{">"}</p>
        <p className="text-gray2">About</p>
      </div>
      <div className="w-full px-5 py-5 bg-white border-[1px] border-slate-200 flex flex-col items-center justify-center gap-6 rounded-2xl shadow-sm">
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <h1 className="text-xl font-semibold text-primary md:text-2xl">
            About Carko
          </h1>
          <p className="text-gray1 text-[15px] text-left md:text-[16px]">{`Welcome to Carko, your trusted partner for car rentals in Guwahati, Assam, India. At Carko, we are committed to providing a seamless and convenient car rental experience tailored to meet your needs. Here's a bit more about our journey and what you can expect from us.`}</p>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <h1 className="text-md font-semibold text-primary md:text-lg">
            Our Service Area
          </h1>
          <p className="text-gray1 text-[15px] text-left md:text-[16px]">{`Currently, Carko operates exclusively in Guwahati, Assam. We are dedicated to serving this vibrant city and its surroundings, offering our customers the convenience of exploring Guwahati with ease.`}</p>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <h1 className="text-md font-semibold text-primary md:text-lg">
            Our Fleet
          </h1>
          <p className="text-gray1 text-[15px] text-left md:text-[16px]">{`As we are in the early stages of our journey, we do not have cars displayed on our website for rent just yet. However, we are actively working on building our fleet and expect to have a variety of vehicles available for rental soon. Stay tuned for updates as we prepare to launch our full range of cars.`}</p>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <h1 className="text-md font-semibold text-primary md:text-lg">
            Experimental Phase
          </h1>
          <p className="text-gray1 text-[15px] text-left md:text-[16px]">{`Carko is currently in its experimental phase. This allows us to fine-tune our services and gather valuable feedback from our early users. We appreciate your understanding and support as we work towards providing an exceptional car rental experience.`}</p>
        </div>
      </div>
    </div>
  );
}
