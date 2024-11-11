/**
 * @Copyright 2024 Znonymous
 * @license Apache 2-0
 */

/**
 * Components
 */
import { ButtonPrimary } from "./Button";

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Project',
      href: '#project'
    },
    {
      label: 'Certificate',
      href: '#certificate'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://www.github.com/firdauzzaid'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/zhafron-firdaus-ba622016b/'
    },
    {
      label: 'Twitter X',
      href: 'https://www.twitter.com/ZhofronF'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/firdauz.zaid'
    },
  ];

const Footer = () => {
    return (
        <footer className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                        Let&apos;s work together today!
                        </h2>
                        <ButtonPrimary 
                            href="mailto:zhofronfirdaus@gmail.com"
                            label="Start Project"
                            icon="chevron_right"
                            classes="reveal-up"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div>
                            <div className="mb-2 reveal-up">Site Map</div>

                            <ul>
                                {sitemap.map(({  href, label }, key) => (
                                    <li key={key}>
                                        <a 
                                        href={href}
                                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                        <div className="mb-2 reveal-up">Social</div>
                        <ul>
                            {socials.map(({  href, label }, key) => (
                                <li key={key}>
                                    <a 
                                    href={href}
                                    target="_blank"
                                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    </div>

                </div>

                <div className="flex items-center justify-between pt-10 mb-8">
                    <a 
                    href="/"
                    className="reveal-up rounded-[10px]">
                        <img 
                        src="./images/logo.svg"
                        width={40}
                        height={40} 
                        alt="Logo" />
                    </a>
                    <p className="text-zinc-500 text-sm reveal-up">
                        &copy; 2024 <span className="text-zinc-200">
                            Zhafron Firdaus
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer