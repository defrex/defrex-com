import { ScaledImage } from '@/components/scaled-image'
import { cn } from '@/lib/utils/cn'
import { generateDefaultMetadata } from '@/lib/utils/metadata'
import { DotIcon } from 'lucide-react'
import styles from './page.module.css'

export const metadata = generateDefaultMetadata({
  title: 'Resume - Aron Jones',
  description:
    'Professional experience and background of Aron Jones, software engineer and technologist.',
})

export default function ResumePage() {
  return (
    <div className={cn('bg-stone-100', styles['resume-page'])}>
      <div className="prose prose-stone mx-auto max-w-screen-md">
        {/* Header */}
        <div className="not-prose flex flex-row gap-4">
          <ScaledImage
            src="/me-sq.jpg"
            alt="Aron Jones"
            naturalWidth={2373}
            naturalHeight={2373}
            width={128}
            className="rounded-lg"
          />

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl font-bold text-[var(--tw-prose-headings)]">
                Aron Jones
              </h1>
              <p className="text-[var(--muted-text)]">
                Generalist, with deep experience in Engineering, Product, and
                Design
              </p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <a
                href="https://defrex.com/"
                className="text-violet-600 transition-colors
                  hover:text-violet-400"
              >
                defrex.com
              </a>
              <DotIcon />
              <a
                href="https://github.com/defrex"
                className="text-violet-600 transition-colors
                  hover:text-violet-400"
              >
                github.com/defrex
              </a>
              <DotIcon />
              <a
                href="https://www.linkedin.com/in/aronjones/"
                className="text-violet-600 transition-colors
                  hover:text-violet-400"
              >
                linkedin.com/in/aronjones
              </a>
            </div>
          </div>
        </div>

        {/* HighFi */}
        <section>
          <h2>HighFi</h2>
          <div>
            <h3>Head of Product & Engineering</h3>
            <p className="text-sm text-[var(--muted-text)]">
              Sep 2023 - Apr 2025 (1 yr 8 mos)
            </p>
            <p>
              At HighFi we made software to manage large-scale asset-backed debt
              facilities. It&apos;s a problem that is currently solved using
              spreadsheets and teams of analysts. They manually run reporting
              processes that end up being multiple people&apos;s full-time work.
            </p>
            <p>
              I lead the product and engineering team at HighFi. We built a
              product that could analyze a contract (the facility agreement) and
              use LLMs to extract the key logic into our custom configuration
              language. We could then connect directly to customer data sources
              (the &quot;asset tape&quot;) and run the resulting financial model
              to give customers real-time access to the state of their
              facilities. We could also use this data to automate the reporting
              workflows and save large amounts of analyst time.
            </p>
            <p>
              HighFi had strong engagement, with our customers buying more from
              us over time. By the end of my time there we were close to $1B in
              assets managed on the platform.
            </p>
          </div>

          <div>
            <h3>Founding Engineer</h3>
            <p className="text-sm text-[var(--muted-text)]">
              Mar 2023 - Sep 2023 (7 mos)
            </p>
          </div>
        </section>

        {/* Wealthsimple */}
        <section>
          <h2>Wealthsimple</h2>

          <div>
            <h3>Staff Engineer</h3>
            <p className="text-sm text-[var(--muted-text)]">
              Feb 2022 - Feb 2023 (1 yr 1 mo)
            </p>
            <p>
              At Wealthsimple, I lead the product & engineering team for a newly
              acquired startup which needed some help with its technology. The
              market looked promising, but the product was unfortunately not
              very stable.
            </p>
            <p>
              Over the course of the year I lead the team we stabilized the
              product and worked with customers to make a variety of workflow
              and product improvements. This enabled a new wave of growth and
              engagement.
            </p>
            <p>
              Unfortunately after a year or so WS decided strategically that it
              made more sense to focus on their core business and exited a
              number of their experimental projects, including this one. The
              company was spun back out into an independent startup, and I
              decided this was a good time to move on.
            </p>
          </div>
        </section>

        {/* Treasure Financial */}
        <section>
          <h2>Treasure Financial</h2>

          <div>
            <h3>Co-Founder</h3>
            <p className="text-sm text-[var(--muted-text)]">
              Sep 2019 - Jan 2022 (2 yrs 5 mos)
            </p>
            <p>
              Treasure was an educational debit card for kids. We were focused
              on teaching good financial habits from a young age.
            </p>
            <p>
              At Treasure we initially built a money management app, not
              attached to a card (our issuing partner took ~1.5 yrs to launch).
              We worked closely with our first few hundred customers to make
              sure we were meeting the needs of their families. Establishing
              strong engagement which was boosted even further once we were able
              to launch the card.
            </p>
          </div>
        </section>

        {/* CareGuide */}
        <section>
          <h2>CareGuide</h2>

          <div>
            <h3>VP Product</h3>
            <p className="text-sm text-[var(--muted-text)]">
              Aug 2018 - Dec 2018 (5 mos)
            </p>
            <p>
              When I took over as VP Product at CareGuide, my purview in the
              organization expanded from just Nanny Lane to all the sites.
            </p>
            <p>
              Earlier that year, in order to scale, CareGuide had split the
              product organization into multiple teams. The resulting org
              structure had lead to overburdened leadership and considerably
              slower cadence. Thus, my first act as VP Product was to
              re-organize. I hired and promoted to install Product Managers, who
              could organize their teams and ensure all the activity was focused
              on the company&apos;s strategic goals. These new teams got new
              mandates, focused on key metrics rather than specific areas of the
              codebase.
            </p>
            <p>
              With renewed focus, we were able to pay down a considerable amount
              of technical debt, which had been burdening the team for years. We
              also increased the conversion rates and lowered support tickets
              per active user considerably. This by primarily focusing energy on
              bug fixing, usability improvements, and algorithmic matching.
            </p>
          </div>

          <div>
            <h3>Director Of Engineering, Special Projects</h3>
            <p className="text-sm text-[var(--muted-text)]">
              May 2017 - Jul 2018 (1 yr 3 mos)
            </p>
            <p>
              This mysterious title was effectively &quot;internal founder&quot;
              of Nanny Lane, a nanny job marketplace. I lead a team to devise a
              strategy for a new line of business with a new approach to
              monetization.
            </p>
            <p>
              Nanny Lane was built using a Rails-based GraphQL server and React
              client, including all the fixins like HMR, Code Splitting, Server
              Rendering, and Query Caching.
            </p>
            <p>
              In the time I worked on Nanny Lane, I transitioned from Lead
              Engineer to Product Manager. In that time we built a liquid nanny
              matching market with strong monetization.
            </p>
          </div>

          <div>
            <h3>Senior Software Engineer</h3>
            <p className="text-sm text-[var(--muted-text)]">
              Sep 2016 - May 2017 (9 mos)
            </p>
            <p>
              As an engineer at CareGuide I shipped a good number of features,
              including a redesign of the payment flows. In addition to feature
              development, I lead the charge to convert a hodge-podge of one-off
              REST endpoints into a consistently implemented GraphQL API. I also
              lead the effort to bring Linting into the CI process, devising a
              migration plan and getting the team on-board to increase code
              quality substantially.
            </p>
          </div>
        </section>

        {/* Shopcaster */}
        <section>
          <h2>Shopcaster</h2>
          <div>
            <h3>Co-Founder & CTO</h3>
            <p className="text-sm text-[var(--muted-text)]">
              Oct 2011 - Sep 2013 (2 yrs)
            </p>
            <p>
              Shopcaster was a platform for small, physical retailers to sell
              their products online.
            </p>
            <p>
              It had a suite of features to solve the problems of managing an
              ecommerce site as a small physical retailer. These include a
              just-in-time inventory reconciliation system, so the retailer
              doesn&apos;t have to maintain online and offline inventory
              separately; full-service &quot;just print this label and stick it
              on the box we gave you&quot; logistics; and easy-to-use native iOS
              and Android apps for managing a shop.
            </p>
            <p>
              Shopcaster was made with Django on the server. We employed
              Continuous Deployment, and had a Continuous Integration server
              chewing away on an extensive test suite after every push. There is
              a fully-featured REST API supporting a consumer-facing iOS
              application, as well as Android, iOS, and Backbone-based shop
              management applications.
            </p>
          </div>

          <div>
            <h3>Co-Founder, Hipsell</h3>
            <p className="text-sm text-[var(--muted-text)]">
              Mar 2011 - Oct 2011 (8 mos)
            </p>
            <p>
              Imagine Craigslist with improvements. Specifically:
              location-based, mobile, real-time, and several other such
              niceties. Hipsell raised a seed round with Mantella Venture
              Partners.
            </p>
            <p>
              We had a client application, a builder and an API server. The
              JavaScript application frameworks of the time were a little light,
              so we rolled our own. Some specific features we included were
              server-side prerendering, real-time data binding, and
              comprehensive memory management.
            </p>
          </div>

          <div>
            <h3>Co-Founder, Connectsy</h3>
            <p className="text-sm text-[var(--muted-text)]">
              Mar 2010 - Mar 2011 (1 yr 1 mo)
            </p>
            <p>
              Connectsy helped users get together with their friends on short
              notice. At the time, Foursquare and Gowalla were big. My
              co-founder and I would check in, only to have people comment
              &quot;Hey! I would have joined you. Let me know next time
              you&apos;re doing that.&quot; So we thought, what if you could
              pre-check-in, to let people know where you intend to go, not just
              where you are.
            </p>
          </div>
        </section>

        {/* VerticalScope Inc. */}
        <section>
          <h2>VerticalScope Inc.</h2>

          <div>
            <h3>Engineering Lead, RateMDs.com</h3>
            <p className="text-sm text-[var(--muted-text)]">
              Apr 2014 - May 2015 (1 yr 2 mos)
            </p>
            <p>
              Lead developer on a team to update a newly acquired site:
              ratemds.com. Completely redesigned and rebuilt the site from the
              ground up, maintaining or improving all metrics. Researched and
              implemented a subscription-based native ad platform for doctors.
            </p>
          </div>
        </section>

        {/* Wave Accounting */}
        <section>
          <h2>Wave Accounting</h2>

          <div>
            <h3>Developer</h3>
            <p className="text-sm text-[var(--muted-text)]">
              Apr 2010 - Aug 2010 (5 mos)
            </p>
            <p>
              Wave is a Toronto-based startup with several SAAS applications
              focused on small businesses. Wrote and implemented a redesign of
              the transaction categorization interface with JS-based bulk
              operations.
            </p>
          </div>
        </section>

        {/* Mazava */}
        <section>
          <h2>Mazava</h2>

          <div>
            <h3>Developer</h3>
            <p className="text-sm text-[var(--muted-text)]">
              Oct 2008 - Apr 2010 (1 yr 7 mos)
            </p>
            <p>
              Lead a development team to create a Kickstarter-like application
              for the developing world.
            </p>
          </div>
        </section>

        {/* Beat District */}
        <section>
          <h2>Beat District</h2>

          <div>
            <h3>Developer</h3>
            <p className="text-sm text-[var(--muted-text)]">
              Feb 2009 - Dec 2009 (11 mos)
            </p>
            <p>
              Beat District was a social competition site for beat makers. The
              site had real-time voting, and a persistent music player that
              allowed page navigation without loss of playback. Built with
              XHR-based page navigation, hash-based history management, and
              custom audio components.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
