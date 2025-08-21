import { Stack } from '@/components/stack'
import { Text } from '@/components/text/text'
import { generateDefaultMetadata } from '@/lib/utils/metadata'
import styles from './page.module.css'
import { cn } from '@/lib/utils/cn'

export const metadata = generateDefaultMetadata({
  title: 'Resume - Aron Jones',
  description:
    'Professional experience and background of Aron Jones, software engineer and technologist.',
})

export default function ResumePage() {
  return (
    <div className={styles['resume-page']}>
      <div className={'max-w-screen-md mx-auto'}>
        <Stack gap={8}>
          {/* Header */}
          <Stack gap={4}>
            <Text as="h1" value="Aron Jones" size="xl" />
            <Text
              value="Generalist, with deep experience in Engineering, Product, and Design"
              size="lg"
              color="light"
            />
            <Stack gap={2}>
              <a
                href="https://defrex.com/"
                className="flex items-center gap-1 text-violet-300 hover:text-violet-400 transition-colors"
              >
                <Text value="defrex.com" size="sm" color="inherit" />
              </a>
              <a
                href="https://github.com/defrex"
                className="flex items-center gap-1 text-violet-300 hover:text-violet-400 transition-colors"
              >
                <Text value="github.com/defrex" size="sm" color="inherit" />
              </a>
              <a
                href="https://www.linkedin.com/in/aronjones/"
                className="flex items-center gap-1 text-violet-300 hover:text-violet-400 transition-colors"
              >
                <Text value="linkedin.com/in/aronjones" size="sm" color="inherit" />
              </a>
            </Stack>
          </Stack>

          {/* HighFi */}
          <Stack gap={4}>
            <Text as="h2" value="HighFi" size="lg" />
            <Text value="Toronto, Ontario, Canada · Permanent Full-time" size="sm" color="light" />

            <Stack gap={3}>
              <Stack gap={2}>
                <Text as="h3" value="Head of Product & Engineering" size="md" />
                <Text value="Sep 2023 - Apr 2025 (1 yr 8 mos) · Hybrid" size="sm" color="light" />
              </Stack>
              <Text
                value="At HighFi we made software to manage large-scale asset-backed debt facilities. It's a problem that is currently solved using spreadsheets and teams of analysts. They manually run reporting processes that end up being multiple people's full-time work."
                size="paragraph"
              />
              <Text
                value={`I lead the product and engineering team at HighFi. We built a product that could analyze a contract (the facility agreement) and use LLMs to extract the key logic into our custom configuration language. We could then connect directly to customer data sources (the "asset tape") and run the resulting financial model to give customers real-time access to the state of their facilities. We could also use this data to automate the reporting workflows and save large amounts of analyst time.`}
                size="paragraph"
              />
              <Text
                value="HighFi had strong engagement, with our customers buying more from us over time. By the end of my time there we were close to $1B in assets managed on the platform."
                size="paragraph"
              />
            </Stack>

            <Stack gap={3}>
              <Stack gap={2}>
                <Text as="h3" value="Founding Engineer" size="md" />
                <Text value="Mar 2023 - Sep 2023 (7 mos) · On-site" size="sm" color="light" />
              </Stack>
            </Stack>
          </Stack>

          {/* Wealthsimple */}
          <Stack gap={4}>
            <Text as="h2" value="Wealthsimple" size="lg" />
            <Text value="Toronto, Ontario, Canada" size="sm" color="light" />

            <Stack gap={3}>
              <Stack gap={2}>
                <Text as="h3" value="Staff Engineer" size="md" />
                <Text
                  value="Feb 2022 - Feb 2023 (1 yr 1 mo) · Permanent Full-time"
                  size="sm"
                  color="light"
                />
              </Stack>
              <Text
                value="At Wealthsimple, I lead the product & engineering team for a newly acquired startup which needed some help with its technology. The market looked promising, but the product was unfortunately not very stable."
                size="paragraph"
              />
              <Text
                value="Over the course of the year I lead the team we stabilized the product and worked with customers to make a variety of workflow and product improvements. This enabled a new wave of growth and engagement."
                size="paragraph"
              />
              <Text
                value="Unfortunately after a year or so WS decided strategically that it made more sense to focus on their core business and exited a number of their experimental projects, including this one. The company was spun back out into an independent startup, and I decided this was a good time to move on."
                size="paragraph"
              />
            </Stack>
          </Stack>

          {/* Treasure Financial */}
          <Stack gap={4}>
            <Text as="h2" value="Treasure Financial" size="lg" />
            <Text value="Greater Toronto Area, Canada" size="sm" color="light" />

            <Stack gap={3}>
              <Stack gap={2}>
                <Text as="h3" value="Co-Founder" size="md" />
                <Text value="Sep 2019 - Jan 2022 (2 yrs 5 mos)" size="sm" color="light" />
              </Stack>
              <Text
                value="Treasure was an educational debit card for kids. We were focused on teaching good financial habits from a young age."
                size="paragraph"
              />
              <Text
                value="At Treasure we initially built a money management app, not attached to a card (our issuing partner took ~1.5 yrs to launch). We worked closely with our first few hundred customers to make sure we were meeting the needs of their families. Establishing strong engagement which was boosted even further once we were able to launch the card."
                size="paragraph"
              />
            </Stack>
          </Stack>

          {/* CareGuide */}
          <Stack gap={4}>
            <Text as="h2" value="CareGuide" size="lg" />
            <Text
              value="Greater Toronto Area, Canada · 2 yrs 4 mos total"
              size="sm"
              color="light"
            />

            <Stack gap={3}>
              <Stack gap={2}>
                <Text as="h3" value="VP Product" size="md" />
                <Text value="Aug 2018 - Dec 2018 (5 mos)" size="sm" color="light" />
              </Stack>
              <Text
                value="When I took over as VP Product at CareGuide, my purview in the organization expanded from just Nanny Lane to all the sites."
                size="paragraph"
              />
              <Text
                value="Earlier that year, in order to scale, CareGuide had split the product organization into multiple teams. The resulting org structure had lead to overburdened leadership and considerably slower cadence. Thus, my first act as VP Product was to re-organize. I hired and promoted to install Product Managers, who could organize their teams and ensure all the activity was focused on the company's strategic goals. These new teams got new mandates, focused on key metrics rather than specific areas of the codebase."
                size="paragraph"
              />
              <Text
                value="With renewed focus, we were able to pay down a considerable amount of technical debt, which had been burdening the team for years. We also increased the conversion rates and lowered support tickets per active user considerably. This by primarily focusing energy on bug fixing, usability improvements, and algorithmic matching."
                size="paragraph"
              />
            </Stack>

            <Stack gap={3}>
              <Stack gap={2}>
                <Text as="h3" value="Director Of Engineering, Special Projects" size="md" />
                <Text value="May 2017 - Jul 2018 (1 yr 3 mos)" size="sm" color="light" />
              </Stack>
              <Text
                value={`This mysterious title was effectively "internal founder" of Nanny Lane, a nanny job marketplace. I lead a team to devise a strategy for a new line of business with a new approach to monetization.`}
                size="paragraph"
              />
              <Text
                value="Nanny Lane was built using a Rails-based GraphQL server and React client, including all the fixins like HMR, Code Splitting, Server Rendering, and Query Caching."
                size="paragraph"
              />
              <Text
                value="In the time I worked on Nanny Lane, I transitioned from Lead Engineer to Product Manager. In that time we built a liquid nanny matching market with strong monetization."
                size="paragraph"
              />
            </Stack>

            <Stack gap={3}>
              <Stack gap={2}>
                <Text as="h3" value="Senior Software Engineer" size="md" />
                <Text value="Sep 2016 - May 2017 (9 mos)" size="sm" color="light" />
              </Stack>
              <Text
                value="As an engineer at CareGuide I shipped a good number of features, including a redesign of the payment flows. In addition to feature development, I lead the charge to convert a hodge-podge of one-off REST endpoints into a consistently implemented GraphQL API. I also lead the effort to bring Linting into the CI process, devising a migration plan and getting the team on-board to increase code quality substantially."
                size="paragraph"
              />
            </Stack>
          </Stack>

          {/* Shopcaster */}
          <Stack gap={4}>
            <Text as="h2" value="Shopcaster" size="lg" />
            <Text
              value="Greater Toronto Area, Canada · 3 yrs 7 mos total"
              size="sm"
              color="light"
            />

            <Stack gap={3}>
              <Stack gap={2}>
                <Text as="h3" value="Co-Founder & CTO" size="md" />
                <Text value="Oct 2011 - Sep 2013 (2 yrs) · Full-time" size="sm" color="light" />
              </Stack>
              <Text
                value="Shopcaster was a platform for small, physical retailers to sell their products online."
                size="paragraph"
              />
              <Text
                value={`It had a suite of features to solve the problems of managing an ecommerce site as a small physical retailer. These include a just-in-time inventory reconciliation system, so the retailer doesn't have to maintain online and offline inventory separately; full-service "just print this label and stick it on the box we gave you" logistics; and easy-to-use native iOS and Android apps for managing a shop.`}
                size="paragraph"
              />
              <Text
                value="Shopcaster was made with Django on the server. We employed Continuous Deployment, and had a Continuous Integration server chewing away on an extensive test suite after every push. There is a fully-featured REST API supporting a consumer-facing iOS application, as well as Android, iOS, and Backbone-based shop management applications."
                size="paragraph"
              />
            </Stack>

            <Stack gap={3}>
              <Stack gap={2}>
                <Text as="h3" value="Co-Founder, Hipsell" size="md" />
                <Text value="Mar 2011 - Oct 2011 (8 mos)" size="sm" color="light" />
              </Stack>
              <Text
                value="Imagine Craigslist with improvements. Specifically: location-based, mobile, real-time, and several other such niceties. Hipsell raised a seed round with Mantella Venture Partners."
                size="paragraph"
              />
              <Text
                value="We had a client application, a builder and an API server. The JavaScript application frameworks of the time were a little light, so we rolled our own. Some specific features we included were server-side prerendering, real-time data binding, and comprehensive memory management."
                size="paragraph"
              />
            </Stack>

            <Stack gap={3}>
              <Stack gap={2}>
                <Text as="h3" value="Co-Founder, Connectsy" size="md" />
                <Text value="Mar 2010 - Mar 2011 (1 yr 1 mo)" size="sm" color="light" />
              </Stack>
              <Text
                value={`Connectsy helped users get together with their friends on short notice. At the time, Foursquare and Gowalla were big. My co-founder and I would check in, only to have people comment "Hey! I would have joined you. Let me know next time you're doing that." So we thought, what if you could pre-check-in, to let people know where you intend to go, not just where you are.`}
                size="paragraph"
              />
            </Stack>
          </Stack>

          {/* Earlier Experience */}
          <Stack gap={4}>
            <Text as="h2" value="Earlier Experience" size="lg" />

            <Stack gap={3}>
              <Text as="h3" value="VerticalScope Inc. - Engineering Lead, RateMDs.com" size="md" />
              <Text
                value="Apr 2014 - May 2015 (1 yr 2 mos) · Greater Toronto Area, Canada"
                size="sm"
                color="light"
              />
              <Text
                value="Lead developer on a team to update a newly acquired site: ratemds.com. Completely redesigned and rebuilt the site from the ground up, maintaining or improving all metrics. Researched and implemented a subscription-based native ad platform for doctors."
                size="paragraph"
              />
            </Stack>

            <Stack gap={3}>
              <Text as="h3" value="Wave Accounting - Developer" size="md" />
              <Text
                value="Apr 2010 - Aug 2010 (5 mos) · Greater Toronto Area, Canada"
                size="sm"
                color="light"
              />
              <Text
                value="Wave is a Toronto-based startup with several SAAS applications focused on small businesses. Wrote and implemented a redesign of the transaction categorization interface with JS-based bulk operations."
                size="paragraph"
              />
            </Stack>

            <Stack gap={3}>
              <Text as="h3" value="Mazava - Developer" size="md" />
              <Text value="Oct 2008 - Apr 2010 (1 yr 7 mos)" size="sm" color="light" />
              <Text
                value="Lead a development team to create a Kickstarter-like application for the developing world."
                size="paragraph"
              />
            </Stack>

            <Stack gap={3}>
              <Text as="h3" value="Beat District - Developer" size="md" />
              <Text value="Feb 2009 - Dec 2009 (11 mos)" size="sm" color="light" />
              <Text
                value="Beat District was a social competition site for beat makers. The site had real-time voting, and a persistent music player that allowed page navigation without loss of playback. Built with XHR-based page navigation, hash-based history management, and custom audio components."
                size="paragraph"
              />
            </Stack>
          </Stack>
        </Stack>
      </div>
    </div>
  )
}
