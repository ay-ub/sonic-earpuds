import Logo from "../Logo";
type footerColumn = {
  header: string;
  links: string[];
};
function Footer() {
  const footerColumns: footerColumn[] = [
    {
      header: "Blog",
      links: ["Company", "Career", "Mobile", "How it works"],
    },
    {
      header: "About",
      links: ["Contacts", "About us", "FAQ", "Our Team", "Terms of service"],
    },
    {
      header: "Product",
      links: ["Terms of use", "Privacy policy", "Log in"],
    },
  ];
  return (
    <footer className="py-24">
      <div className="footer-container container mx-auto flex justify-between items-start flex-wrap gap-30">
        <div className="first-col flex-1">
          <Logo />
          <p className="py-4 text-[#484848] ">Info@besnik.agency</p>
          <p className="text-[#484848] ">+458 843 5849</p>
        </div>
        {footerColumns.map((column) => (
          <Column key={column.header} column={column} />
        ))}
        <div className="last-col flex-1">
          <div className="col-header text-[#222222] font-bold mb-6 text-4xl">
            Download App
          </div>
          <div className="links text-[#484848] flex flex-col justify-between gap-4">
            <p className="flex items-center gap-3">
              <span className="icon">
                <svg
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.90909 0C0.854729 0 0 0.826551 0 1.84615V12.9231C0 13.9427 0.854729 14.7692 1.90909 14.7692H19.0909C20.1453 14.7692 21 13.9427 21 12.9231V1.84615C21 0.826551 20.1453 0 19.0909 0H1.90909Z"
                    fill="#484848"
                  />
                  <path
                    d="M5.72727 17.3077C5.72727 16.9253 6.05602 16.6154 6.46154 16.6154H14.5385C14.944 16.6154 15.2727 16.9253 15.2727 17.3077C15.2727 17.69 14.944 18 14.5385 18H6.46154C6.05601 18 5.72727 17.69 5.72727 17.3077Z"
                    fill="#484848"
                  />
                </svg>
              </span>
              Google Play
            </p>
            <p className="flex items-center gap-3">
              <span className="icon">
                <svg
                  width="17"
                  height="20"
                  viewBox="0 0 17 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1988 10.6359C14.2196 9.09202 15.0859 7.63115 16.4601 6.82249C15.5931 5.6374 14.1411 4.88602 12.6303 4.84078C11.019 4.67889 9.45691 5.76366 8.63581 5.76366C7.79882 5.76366 6.53461 4.85685 5.17326 4.88366C3.3988 4.93853 1.74456 5.90417 0.881248 7.38906C-0.974531 10.4644 0.409713 14.9841 2.18739 17.47C3.0768 18.6873 4.11627 20.047 5.47639 19.9988C6.80735 19.9459 7.30444 19.1864 8.91102 19.1864C10.5027 19.1864 10.9691 19.9988 12.3568 19.9681C13.785 19.9459 14.6848 18.7454 15.543 17.5166C16.182 16.6493 16.6738 15.6907 17 14.6763C15.3216 13.9969 14.2008 12.3802 14.1988 10.6359Z"
                    fill="#484848"
                  />
                  <path
                    d="M11.5776 3.20595C12.3564 2.31119 12.74 1.16113 12.6471 0C11.4574 0.1196 10.3585 0.663834 9.56924 1.52426C8.79749 2.36494 8.39586 3.49477 8.47179 4.61152C9.66191 4.62325 10.8319 4.09376 11.5776 3.20595Z"
                    fill="#484848"
                  />
                </svg>
              </span>
              Apple Store
            </p>
            <p className="flex items-center gap-3">
              <span className="icon">
                <svg
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.90909 0C0.854729 0 0 0.826551 0 1.84615V12.9231C0 13.9427 0.854729 14.7692 1.90909 14.7692H19.0909C20.1453 14.7692 21 13.9427 21 12.9231V1.84615C21 0.826551 20.1453 0 19.0909 0H1.90909Z"
                    fill="#484848"
                  />
                  <path
                    d="M5.72727 17.3077C5.72727 16.9253 6.05602 16.6154 6.46154 16.6154H14.5385C14.944 16.6154 15.2727 16.9253 15.2727 17.3077C15.2727 17.69 14.944 18 14.5385 18H6.46154C6.05601 18 5.72727 17.69 5.72727 17.3077Z"
                    fill="#484848"
                  />
                </svg>
              </span>
              Desktop
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const Column = ({ column }: { column: footerColumn }) => {
  return (
    <div className="col flex-1">
      <div className="col-header text-[#222222] font-bold mb-6 text-4xl">
        {column.header}
      </div>
      <div className="links text-[#484848] flex flex-col justify-between gap-4">
        {column.links.map((link) => (
          <p key={link}>{link}</p>
        ))}
      </div>
    </div>
  );
};
