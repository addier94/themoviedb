import React from 'react';

const Footer = () => (
  <footer className="bg-gray2-main text-sm text-white p-4">
    <article className="max-w-screen-2xl mx-auto">
      <section className="flex flex-wrap mb-2">
        <div>
          <a className="mr-3" href="/">Terms of service </a>
          -
        </div>
        <div>
          <a className="mx-3" href="/">Contact</a>
          -
        </div>
        <div>
          <a className="mx-3" href="/">Sitemap</a>
        </div>
      </section>
      <section>
        © Movies
        <span className="ml-2">
          {new Date().getFullYear()}
        </span>
      </section>
    </article>
  </footer>
);

export default Footer;
