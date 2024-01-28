type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="max-container w-full bottom-0 " id="contact-me">
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center border-t border-[#2d2d2d] pt-10">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat">
          <img
            src="copyright-sign.svg"
            alt="Copy Right Sign"
            width={13}
            height={13}
          />
          <p>2024 Keyur Gondaliya</p>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <a
            href="https://www.linkedin.com/in/keyur-gondaliya/"
            target="_blank"
            title="linkedin"
            className="cursor-pointer"
          >
            <img src="linkedin.svg" alt="linkedin" width={20} height={20} />
          </a>
          <a
            href="https://github.com/Keyur-Gondaliya"
            target="_blank"
            title="github"
            className="cursor-pointer"
          >
            <img src="github.svg" alt="github" width={20} height={20} />
          </a>
          <a
            href="https://twitter.com/Keyur403"
            target="_blank"
            title="twitter"
            className="cursor-pointer"
          >
            <img src="twitter.svg" alt="twitter" width={22} height={22} />
          </a>
          <a
            href="https://www.reddit.com/user/AdditionalRich8339/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
            target="_blank"
            title="reddit"
            className="cursor-pointer"
          >
            <img src="reddit.svg" alt="reddit" width={20} height={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
