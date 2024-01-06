// import mascot from "../public/mascot.png";

function Footer() {
  return (
    <div>
      <div className="text-white md:text-7xl text-4xl pb-8 px-8 font-semibold md:px-32 md:pb-16">
        Reach out to us
      </div>
      <div className="text-white md:px-32 px-8">
        <h1 className="md:text-4xl text-2xl">Kailash Venthan</h1>
        <h2 className="md:text-3xl text-xl">CEO</h2>
        <h3 className="md:text-2xl text-lg">YellowFlash Software LLP</h3>
        <p className="md:text-xl text-md">kailashventhan@yellowflash.ai</p>
        <p className="md:text-xl text-md">+91 9094010170</p>
        {/* <img src={mascot} className="object-cover h-48 w-48" alt="mascot" /> */}
      </div>
      {/*<div>
        <div className="px-32 pb-8">
          <input
            className="placeholder:italic font-semibold placeholder:text-slate-400 block text-xl bg-white w-96 border border-slate-300 rounded-full p-3 px-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-xl"
            placeholder="Email address"
            type="text"
            name="search"
          />
        </div>
        <div className="px-32">
          <input
            className="placeholder:italic font-semibold placeholder:text-slate-400 block text-xl bg-white w-96 border border-slate-300 rounded-full p-3 px-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-xl"
            placeholder="Phone number"
            type="number"
            name="search"
          />
        </div>
      </div>
      <div className="px-32 pt-10 py-5">
        <button className="rounded-full bg-orange-500/50 p-4 font-bold text-xl text-white">
          Submit now
        </button>
      </div>*/}

      <div className="flex flex-row justify-between">
        <div className="text-white md:text-xl text-sm p-10 md:p-10 md:py-20 md:px-32">
          Yellowflash.ai - All Rights Reserved
        </div>
        <div className="text-white md:text-xl md:p-10 p-10 text-sm md:py-20 md:px-20">
          <a
            href="https://in.linkedin.com/in/kailash-venthan-55a031159"
            className="md:p-5"
          >
            Contact
          </a>
          {/* <a href="/" className="p-5">
            {" "}
            Sitemap
          </a>
          <a href="/" className="p-5">
            {" "}
            Accessibility
          </a>
          <a href="/" className="p-5">
            {" "}
            Features
          </a>
          <a href="/" className="p-5">
            {" "}
            Community
          </a> */}
        </div>
      </div>
    </div>
  );
}
export default Footer;
