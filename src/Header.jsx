import logo from "../public/logo.svg";

function Header() {
  return (
    <div className="md:py-10 md:px-16 py-10 px-8">
      <div className="flex flex-row justify-between border-solid border-2 rounded-full ring-yellow-500 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 border-white/25 bg-slate-500/45">
        <a
          href="/"
          className="text-white font-semibold md:text-2xl p-2 py-2 px-6 md:p-5 md:py-10 md:px-24"
        >
          Yellow<span className="text-yellow-500">FlashAI</span>
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="text-white md:text-xl text-md md:p-5  py-2 px-0.25 md:py-10 md:px-20">
          <a
            href="https://1iyiugoup9dxde-3001.proxy.runpod.net/"
            className="md:p-5 p-3 rounded-full bg-yellow-500/55 bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300  text-white font-bold"
          >
            Start Generating
          </a>
        </div>
      </div>
    </div>
  );
}
export default Header;
