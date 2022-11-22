export const LoginBtn = ({
  styles: { text, logo, btnBackground, divBackground, imgBackground, altText },
  setLoggedIn,
}: {
  styles: {
    text: string;
    logo: string;
    btnBackground: string;
    divBackground: string;
    imgBackground: string;
    altText: string;
  };
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button
      className={`flex justify-center items-center bg-[${btnBackground}] rounded-lg mb-2 w-full`}
      onClick={() => setLoggedIn((prev) => !prev)}>
      <div className={`bg-[${divBackground}] p-1 m-[1px] rounded-lg`}>
        <img src={logo} alt={altText} className={`h-9 rounded-lg bg-[${imgBackground}]`} />
      </div>
      <p className="grow text-sm text-white font-bold">{text}</p>
    </button>
  );
};
