import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg"
    >
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <div className="flex items-center">
          Built with <span className="text-primary text-2xl px-1 dark:text-primaryDark">&#9825;	</span> by&nbsp;
          <Link
            href="https://www.linkedin.com/in/derek-deming/"
            target="_blank"
            className="underline underline-offset-2"
          >
            Derek Deming
          </Link>
        </div>

        <Link
          href="https://www.linkedin.com/in/derek-deming/"
          target="_blank"
          className="underline underline-offset-2"
        >
          Reach Out Here 
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
