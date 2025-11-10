import lwsLogo from '../assets/images/lws-logo-en.svg'

const LWSLogo = () => {
  return (
    <div className="mb-8 flex items-center">
        <div className="flex items-center justify-center rounded-full text-xl font-bold">
          <img
            src={lwsLogo}
            className="mx-auto h-10 text-center"
          />
        </div>
      </div>
  );
}

export default LWSLogo;
