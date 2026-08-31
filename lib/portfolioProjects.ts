import type { StaticImageData } from "next/image";

import boxOfSensoryToysDesktop from "@/casestudy-homepages/box-of-sensory-toys/desktop-home.png";
import boxOfSensoryToysMobile from "@/casestudy-homepages/box-of-sensory-toys/mobile-home.png";
import bralasBestDesktop from "@/casestudy-homepages/bralas-best/desktop-home.png";
import bralasBestMobile from "@/casestudy-homepages/bralas-best/mobile-home.png";
import cherryLoveDesktop from "@/casestudy-homepages/cherry-love/desktop-home.png";
import cherryLoveMobile from "@/casestudy-homepages/cherry-love/mobile-home.png";
import clearTheoryDesktop from "@/casestudy-homepages/clear-theory/desktop-home.png";
import clearTheoryMobile from "@/casestudy-homepages/clear-theory/mobile-home.png";
import embassyLondonDesktop from "@/casestudy-homepages/embassy-london/desktop-home.png";
import embassyLondonMobile from "@/casestudy-homepages/embassy-london/mobile-home.png";
import herbAffairDesktop from "@/casestudy-homepages/herb-affair/desktop-home.png";
import herbAffairMobile from "@/casestudy-homepages/herb-affair/mobile-home.png";
import kinuDesktop from "@/casestudy-homepages/kinu/desktop-home.png";
import kinuMobile from "@/casestudy-homepages/kinu/mobile-home.png";
import magnoliaCoffeeDesktop from "@/casestudy-homepages/magnolia-coffee-co/desktop-home.png";
import magnoliaCoffeeMobile from "@/casestudy-homepages/magnolia-coffee-co/mobile-home.png";
import mikeysPiesDesktop from "@/casestudy-homepages/mikey-spies/desktop-home.png";
import mikeysPiesMobile from "@/casestudy-homepages/mikey-spies/mobile-home.png";
import mooChaMatchaDesktop from "@/casestudy-homepages/moo-cha-matcha/desktop-home.png";
import mooChaMatchaMobile from "@/casestudy-homepages/moo-cha-matcha/mobile-home.png";
import passionJoyDesktop from "@/casestudy-homepages/passionjoy/desktop-home.png";
import passionJoyMobile from "@/casestudy-homepages/passionjoy/mobile-home.png";
import pearlHoneyDesktop from "@/casestudy-homepages/pearl-honey-spreads/desktop-home.png";
import pearlHoneyMobile from "@/casestudy-homepages/pearl-honey-spreads/mobile-home.png";
import rockmarqDesktop from "@/casestudy-homepages/rockmarq/desktop-home.png";
import rockmarqMobile from "@/casestudy-homepages/rockmarq/mobile-home.png";
import seasaDesktop from "@/casestudy-homepages/seasa/desktop-home.png";
import seasaMobile from "@/casestudy-homepages/seasa/mobile-home.png";
import legalPaigeDesktop from "@/casestudy-homepages/the-legal-paige/desktop-home.png";
import legalPaigeMobile from "@/casestudy-homepages/the-legal-paige/mobile-home.png";
import tomatoSnobDesktop from "@/casestudy-homepages/tomato-snob/desktop-home.png";
import tomatoSnobMobile from "@/casestudy-homepages/tomato-snob/mobile-home.png";
import toniAndGuyDesktop from "@/casestudy-homepages/toni-and-guy/desktop-home.png";
import toniAndGuyMobile from "@/casestudy-homepages/toni-and-guy/mobile-home.png";
import upstateCoffeeDesktop from "@/casestudy-homepages/upstate-coffee/desktop-home.png";
import upstateCoffeeMobile from "@/casestudy-homepages/upstate-coffee/mobile-home.png";
import wholeLifePetDesktop from "@/casestudy-homepages/wholelife-pet/desktop-home.png";
import wholeLifePetMobile from "@/casestudy-homepages/wholelife-pet/mobile-home.png";
import wildwonderDesktop from "@/casestudy-homepages/wildwonder/desktop-home.png";
import wildwonderMobile from "@/casestudy-homepages/wildwonder/mobile-home.png";

import boxOfSensoryToysCover from "@/casestudy-homepages/project-covers/box-of-sensory-toys-cover.png";
import clearTheoryCover from "@/casestudy-homepages/project-covers/clear-theory-cover.png";
import embassyLondonCover from "@/casestudy-homepages/project-covers/embassy-london-cover.png";
import herbAffairCover from "@/casestudy-homepages/project-covers/herb-affair-cover.png";
import kinuCover from "@/casestudy-homepages/project-covers/kinu-cover.png";
import magnoliaCoffeeCover from "@/casestudy-homepages/project-covers/magnolia-coffee-cover.png";
import mikeysPiesCover from "@/casestudy-homepages/project-covers/mikeys-pies-cover.png";
import mooChaMatchaCover from "@/casestudy-homepages/project-covers/moo-cha-matcha-cover.png";
import passionJoyCover from "@/casestudy-homepages/project-covers/passionjoy-cover.png";
import pearlHoneyCover from "@/casestudy-homepages/project-covers/pearl-honey-spreads-cover.png";
import rockmarqCover from "@/casestudy-homepages/project-covers/rockmarq-cover.png";
import seasaCover from "@/casestudy-homepages/project-covers/seasa-cover.png";
import legalPaigeCover from "@/casestudy-homepages/project-covers/the-legal-paige-cover.png";
import tomatoSnobCover from "@/casestudy-homepages/project-covers/tomato-snob-cover.png";
import toniAndGuyCover from "@/casestudy-homepages/project-covers/toni-and-guy-cover.png";
import upstateCoffeeCover from "@/casestudy-homepages/project-covers/upstate-coffee-cover.png";
import wholeLifePetCover from "@/casestudy-homepages/project-covers/whole-life-pet-cover.png";
import wildwonderCover from "@/casestudy-homepages/project-covers/wildwonder-cover.png";

export type Engagement = "Full Shopify build" | "Figma-to-Shopify" | "Client enhancements";

export type CaseItem = { title: string; body: string };
export type StackGroup = { label: string; values: string[] };

export type CaseStudy = {
  outcome: string;
  overview: string;
  objective: string[];
  challenge: string;
  scope: string[];
  researchNote: string;
  insights: CaseItem[];
  approach: CaseItem[];
  process: CaseItem[];
  technology: string;
  stack: StackGroup[];
  features: CaseItem[];
  responsive: string[];
  designSystem: string;
  results: string;
  lessons: string[];
  finalOutcome: string;
};

export type PortfolioProject = {
  slug: string;
  name: string;
  liveUrl: string;
  category: string;
  engagement: Engagement;
  summary: string;
  cover?: StaticImageData;
  desktopCapture: StaticImageData;
  mobileCapture: StaticImageData;
  tags: string[];
  featured?: boolean;
  duration: string;
  team: string;
  services: string[];
  deliverables: string[];
  caseStudy: CaseStudy;
};

type ProjectBrief = Omit<PortfolioProject, "caseStudy" | "duration" | "team" | "services" | "deliverables"> & {
  overview: string;
  audience: string;
  businessGoal: string;
  challenge: string;
  experienceFocus: string;
  visualDirection: string;
  researchFindings: CaseItem[];
  featureFocus: CaseItem[];
  lessons: string[];
};

const projectRecordNote = "The project archive preserves the engagement type and shipped responsive storefront captures, but not private discovery files, analytics, staffing, duration, or vendor configuration. The observations below describe the documented scope and visible interface—not unpublished client metrics or research claims.";

function deliveryDetails(engagement: Engagement) {
  const sharedStack: StackGroup[] = [
    { label: "Frontend", values: ["Shopify Liquid", "HTML", "CSS", "JavaScript"] },
    { label: "Commerce / CMS", values: ["Shopify", "Theme editor", "Product and collection content"] },
    { label: "Hosting / data", values: ["Shopify-hosted storefront", "Shopify catalog data"] },
    { label: "APIs / services", values: ["Shopify platform services", "Additional services not publicly disclosed"] },
  ];

  if (engagement === "Figma-to-Shopify") {
    return {
      duration: "Not publicly disclosed",
      team: "Implementation team not publicly disclosed",
      services: ["Figma-to-Shopify implementation", "Responsive theme development", "Component and template build", "Cross-device quality assurance"],
      deliverables: ["Responsive Shopify storefront", "Reusable theme components", "Product and collection templates", "Launch-ready quality assurance"],
      process: [
        { title: "01 · Design intake", body: "Reviewed the supplied Figma direction, catalog priorities, and responsive states to identify the components and templates required for a faithful storefront implementation." },
        { title: "02 · Theme architecture", body: "Mapped repeatable interface patterns into Shopify sections and templates so content and merchandising could stay structured as the catalog evolved." },
        { title: "03 · Responsive build", body: "Implemented the approved visual direction across desktop and mobile, preserving hierarchy while adapting navigation, media, and purchase paths to smaller screens." },
        { title: "04 · QA and launch readiness", body: "Validated the finished storefront against the available design direction and live-path expectations. The archive does not include a dated launch log or post-launch change record." },
      ],
      stack: [{ label: "Design", values: ["Figma source direction", "Responsive design QA"] }, ...sharedStack],
    };
  }

  if (engagement === "Client enhancements") {
    return {
      duration: "Not publicly disclosed",
      team: "Implementation team not publicly disclosed",
      services: ["Shopify theme enhancements", "Campaign and content updates", "Responsive refinement", "Quality assurance"],
      deliverables: ["Targeted storefront updates", "Responsive theme refinements", "Client-requested feature support", "Regression-tested release"],
      process: [
        { title: "01 · Request triage", body: "Translated the evolving client requirements into a focused change list, prioritising the customer-facing paths most likely to be affected." },
        { title: "02 · Existing-theme review", body: "Worked within the current storefront structure, identifying where updates could extend the theme without destabilising established commerce flows." },
        { title: "03 · Targeted implementation", body: "Delivered the requested content, theme, and responsive refinements while keeping the experience consistent with the existing brand system." },
        { title: "04 · Regression QA", body: "Checked the updated states across relevant breakpoints and key paths. The archive does not include a dated release calendar or post-launch metric report." },
      ],
      stack: [{ label: "Design", values: ["Existing brand system", "Responsive design QA"] }, ...sharedStack],
    };
  }

  return {
    duration: "Not publicly disclosed",
    team: "Implementation team not publicly disclosed",
    services: ["Shopify storefront build", "Theme and template development", "Responsive experience design", "Cross-device quality assurance"],
    deliverables: ["Responsive Shopify storefront", "Core commerce templates", "Reusable theme sections", "Launch-ready quality assurance"],
    process: [
      { title: "01 · Discovery and structure", body: "Defined the storefront’s priority journeys, content hierarchy, and merchandising requirements from the available project brief and brand direction." },
      { title: "02 · UX and visual system", body: "Turned the intended brand expression into a clear system of page modules, navigation patterns, and product-storytelling moments before implementation." },
      { title: "03 · Shopify build", body: "Built the storefront around reusable sections, product and collection templates, and responsive layouts suited to day-to-day merchandising." },
      { title: "04 · QA and launch readiness", body: "Tested key viewport states and storefront paths before release. The archive does not preserve the private timeline, launch report, or post-launch optimisation log." },
    ],
    stack: [{ label: "Design", values: ["Brand and UX direction", "Responsive design QA"] }, ...sharedStack],
  };
}

function makeCaseStudy(project: ProjectBrief): CaseStudy {
  const delivery = deliveryDetails(project.engagement);
  return {
    outcome: `A ${project.experienceFocus.toLowerCase()} that gives ${project.audience.toLowerCase()} a clearer route from brand story to the right next action.`,
    overview: `${project.overview} The website was shaped to make ${project.businessGoal.toLowerCase()} feel native to the brand rather than bolted onto it.`,
    objective: [
      `Make ${project.businessGoal.toLowerCase()} easier to understand and act on.`,
      `Give ${project.audience.toLowerCase()} a confident path through the storefront on any screen size.`,
      `Keep the experience recognisably ${project.name} while relying on reusable Shopify patterns rather than one-off pages.`,
    ],
    challenge: project.challenge,
    scope: delivery.services,
    researchNote: projectRecordNote,
    insights: project.researchFindings,
    approach: [
      { title: "Make the priority unmistakable", body: `The hierarchy was organised around ${project.businessGoal.toLowerCase()}, with the brand story supporting—not competing with—the primary customer decision.` },
      { title: "Carry the brand through the system", body: `${project.visualDirection} The aim was a visual language that could flex across campaign, collection, and product moments without losing recognition.` },
      { title: "Build for practical commerce", body: `The delivery focused on a responsive Shopify structure that keeps ${project.experienceFocus.toLowerCase()} usable as content, products, and seasonal priorities change.` },
    ],
    process: delivery.process,
    technology: `The documented platform is Shopify. ${project.engagement === "Figma-to-Shopify" ? "The engagement record also identifies Figma as the source design workflow. " : ""}The live archive does not name the exact theme, app set, analytics implementation, hosting configuration, or external integrations, so they are intentionally not inferred here.`,
    stack: delivery.stack,
    features: project.featureFocus,
    responsive: [
      `Desktop uses the extra canvas for ${project.experienceFocus.toLowerCase()} and richer visual pacing; mobile preserves the same decision order in a single, thumb-friendly flow.`,
      "Navigation, media, and product actions are treated as responsive components rather than scaled-down desktop elements, keeping key actions reachable at smaller widths.",
      "The supplied captures demonstrate desktop and mobile states. Keyboard behavior, screen-reader support, performance budgets, and device test coverage are not published, so no compliance or performance metric is claimed.",
    ],
    designSystem: `${project.visualDirection} Reusable navigation, promotional, collection, product, and action patterns create continuity across the storefront while allowing campaign content to retain its own energy.`,
    results: `The verifiable outcome is a live, responsive Shopify storefront and the documented ${project.engagement.toLowerCase()} engagement. ${project.businessGoal} is given a more deliberate interface path, and the original desktop and mobile captures demonstrate the delivered visual system. Conversion, revenue, engagement, accessibility, and performance metrics were not supplied for this archive and are therefore unavailable.`,
    lessons: project.lessons,
    finalOutcome: `The project turns ${project.challenge.toLowerCase()} into a storefront centred on ${project.experienceFocus.toLowerCase()}. It gives the brand a more coherent way to present its offer while giving customers a clearer path to continue, explore, or purchase.`,
  };
}

function defineProject(project: ProjectBrief): PortfolioProject {
  const delivery = deliveryDetails(project.engagement);
  return { ...project, ...delivery, caseStudy: makeCaseStudy(project) };
}

export const portfolioProjects: PortfolioProject[] = [
  defineProject({
    slug: "toni-and-guy", name: "TONI&GUY", liveUrl: "https://www.toniguy.com/", category: "Haircare & salons", engagement: "Full Shopify build", cover: toniAndGuyCover,
    desktopCapture: toniAndGuyDesktop, mobileCapture: toniAndGuyMobile, tags: ["Shopify", "Theme build", "Responsive"], featured: true,
    summary: "A global salon and haircare storefront shaped around service discovery, education, and confident product browsing.",
    overview: "TONI&GUY brings together salon services and professional haircare under one globally recognised name. The storefront needed to balance service-led discovery with an ecommerce journey that could still feel precise, premium, and easy to navigate.",
    audience: "salon clients and haircare shoppers", businessGoal: "connect service discovery, hair expertise, and product purchase", experienceFocus: "service-led beauty commerce",
    challenge: "A salon-and-product brand has two different customer intents to serve: someone looking for an appointment or local expertise, and someone looking for the right haircare product. The interface needed to keep those paths distinct without making the brand feel fragmented.",
    visualDirection: "A black-and-white salon environment, editorial photography, precise type, and restrained calls to action create a confident professional-beauty tone.",
    researchFindings: [{ title: "Two high-intent paths", body: "The visible experience has to acknowledge service intent and shopping intent early, rather than forcing every visitor into a generic product-first journey." }, { title: "Expertise needs context", body: "Haircare benefits are more useful when paired with professional authority, clear category signals, and a practical next step." }, { title: "Premium does not mean obscure", body: "The design can remain minimal while still making navigation, service discovery, and shopping actions easy to identify." }],
    featureFocus: [{ title: "Salon discovery", body: "Service-focused entry points give visitors a route into the salon side of the brand before or alongside shopping." }, { title: "Haircare merchandising", body: "Product paths and supporting imagery turn professional haircare into a browsable, confidence-building retail experience." }, { title: "Editorial brand framing", body: "A high-contrast environment lets campaigns and education feel connected to the salon world rather than a separate store." }],
    lessons: ["When a brand has both service and product goals, navigation must make the difference visible immediately.", "A restrained interface needs exceptionally clear labels and purposeful imagery to keep the premium tone usable."],
  }),
  defineProject({
    slug: "mikeys-pies", name: "Mikey’s Pies", liveUrl: "https://www.mikeyspies.com/", category: "Food & beverage", engagement: "Full Shopify build", cover: mikeysPiesCover,
    desktopCapture: mikeysPiesDesktop, mobileCapture: mikeysPiesMobile, tags: ["Shopify", "Merchandising", "Mobile UX"], featured: true,
    summary: "An appetite-led food storefront that keeps product storytelling clear and the path to purchase practical.",
    overview: "Mikey’s Pies is a food brand where appetite, flavour, and occasion need to do real conversion work. The storefront brings the product close, gives the brand a warm personality, and keeps the route to a pie intentionally direct.",
    audience: "gift buyers, hosts, and pie lovers", businessGoal: "turn appetite and product personality into a straightforward order path", experienceFocus: "appetite-led food commerce",
    challenge: "Food imagery can create desire quickly, but a strong hero alone does not answer flavour, format, delivery, or purchase questions. The storefront needed to make the product feel irresistible while keeping ordering practical.",
    visualDirection: "Warm cream, navy, food-forward photography, and compact, friendly type give the store a classic bake-shop character without losing modern clarity.",
    researchFindings: [{ title: "The product should lead", body: "Visitors need to see the food and understand the offer quickly; supporting copy should sharpen the craving rather than slow the route to product." }, { title: "Occasion matters", body: "Pies are often bought for sharing, gifting, or a specific moment, so the experience benefits from clear formats and easy browsing." }, { title: "Mobile is an ordering surface", body: "The mobile capture keeps the visual appetite cue while making product actions and content stacks easy to scan." }],
    featureFocus: [{ title: "Product-first storytelling", body: "Hero imagery and concise copy establish flavour and quality before visitors have to make a buying decision." }, { title: "Clear category entry", body: "Store pathways surface pies and related choices without burying the product under a long brand introduction." }, { title: "Practical purchase flow", body: "The storefront balances the emotional food story with recognisable commerce cues so customers can move from craving to cart." }],
    lessons: ["In food commerce, photography creates the first impulse, but product clarity earns the next click.", "A playful food brand still benefits from a calm, unmistakable route to purchase."],
  }),
  defineProject({
    slug: "embassy-london", name: "Embassy London", liveUrl: "https://embassylondon.com/", category: "Footwear & accessories", engagement: "Full Shopify build", cover: embassyLondonCover,
    desktopCapture: embassyLondonDesktop, mobileCapture: embassyLondonMobile, tags: ["Shopify", "Collections", "Editorial UI"], featured: true,
    summary: "Editorial footwear commerce balancing seasonal campaigns, product discovery, and a high-volume catalog.",
    overview: "Embassy London presents designer footwear through a fashion-led lens. The storefront needed to give seasonal campaigns enough visual space while making a broad retail assortment easy to explore and shop.",
    audience: "fashion-conscious footwear shoppers", businessGoal: "support seasonal storytelling while keeping catalog discovery efficient", experienceFocus: "editorial fashion retail",
    challenge: "Campaign imagery can make a footwear site feel desirable, but it cannot obscure navigation, category context, or product discovery. The design had to hold both editorial aspiration and a practical catalog in one system.",
    visualDirection: "A red, white, and black palette with fashion photography and editorial-scale typography creates a polished department-store atmosphere.",
    researchFindings: [{ title: "Seasonality drives entry", body: "Newness and campaign storytelling need visible placements, but should resolve into recognisable shopping categories rather than isolated landing moments." }, { title: "Catalog clarity protects conversion", body: "Footwear shoppers need fast orientation around category and product type, especially when the visual direction is intentionally editorial." }, { title: "Pacing carries the premium cue", body: "Large type and generous space can create fashion credibility when the core shopping actions remain consistent." }],
    featureFocus: [{ title: "Campaign-led entry", body: "Seasonal visual stories establish a clear mood and give shoppers a timely reason to explore the store." }, { title: "Collection navigation", body: "The retail structure gives visitors a direct way to move from editorial context into footwear discovery." }, { title: "Product-forward mobile state", body: "The mobile layout preserves the campaign voice while condensing browsing decisions into a scan-friendly route." }],
    lessons: ["Fashion storytelling works best when it hands visitors cleanly into the catalog.", "A visual system with strong campaign energy needs dependable collection and product patterns underneath it."],
  }),
  defineProject({
    slug: "wildwonder", name: "wildwonder", liveUrl: "https://drinkwildwonder.com/", category: "Food & beverage", engagement: "Figma-to-Shopify", cover: wildwonderCover,
    desktopCapture: wildwonderDesktop, mobileCapture: wildwonderMobile, tags: ["Figma", "Shopify", "Responsive"], featured: true,
    summary: "A vibrant beverage experience translated into a responsive storefront without losing the brand’s expressive visual energy.",
    overview: "wildwonder packages functional beverage benefits in an unmistakably vivid consumer brand. The implementation needed to retain that energy while giving shoppers enough structure to understand the drink, browse it, and take action.",
    audience: "curious functional-beverage shoppers", businessGoal: "make an expressive brand system support clear product and benefit discovery", experienceFocus: "benefit-led beverage shopping",
    challenge: "The brand’s visual personality is a strength, but saturated colour, packaging, and illustration can compete with the practical question of what the product is and why to choose it. The storefront needed a firm hierarchy beneath its playfulness.",
    visualDirection: "Primary colours, oversized product moments, playful type, and bento-like visual blocks turn functional beverage education into something energetic and approachable.",
    researchFindings: [{ title: "Benefit language needs an anchor", body: "Functional claims land more clearly when packaging, benefit framing, and product actions sit together in a deliberate order." }, { title: "Expressiveness needs repetition", body: "A strong visual system becomes usable when its colour, scale, and action patterns repeat predictably across sections." }, { title: "Mobile must retain the spark", body: "The responsive capture shows that key product and action moments cannot be treated as decorative desktop-only elements." }],
    featureFocus: [{ title: "High-energy product hero", body: "Large product imagery and lively brand elements establish immediate recognition and keep the drink central to the story." }, { title: "Benefit-to-product hierarchy", body: "Content is arranged to move from the reason to care toward the product and a clear purchase action." }, { title: "Reusable expressive sections", body: "The implementation translates the design direction into component patterns that can carry campaign and product content consistently." }],
    lessons: ["An expressive brand becomes easier to shop when every visual flourish supports a visible decision.", "Responsive implementation has to preserve the brand’s pace, not simply reduce its scale."],
  }),
  defineProject({
    slug: "rockmarq", name: "Rockmarq", liveUrl: "https://rockmarq.com/", category: "Jewelry & accessories", engagement: "Figma-to-Shopify", cover: rockmarqCover,
    desktopCapture: rockmarqDesktop, mobileCapture: rockmarqMobile, tags: ["Figma", "Shopify", "Product UX"], featured: true,
    summary: "A premium jewelry storefront developed from detailed design direction with careful merchandising and restrained motion.",
    overview: "Rockmarq is a premium jewelry storefront that relies on material, silhouette, and detail to establish value. The implementation translates a considered fashion-jewelry direction into a calm, commerce-ready experience.",
    audience: "jewelry shoppers looking for distinctive everyday pieces", businessGoal: "make premium product discovery feel considered without adding friction", experienceFocus: "premium jewelry merchandising",
    challenge: "Jewelry needs to feel tactile and personal online, yet shoppers still need enough product context to browse confidently. The site had to use atmosphere and product imagery without making discovery feel precious or slow.",
    visualDirection: "Dark neutrals, reflective materials, close product photography, and restrained typography create a quiet-luxury environment with a tactile edge.",
    researchFindings: [{ title: "Detail is a conversion tool", body: "Material, shape, and styling imagery need to do explanatory work for a product category customers cannot physically handle online." }, { title: "Premium needs a calm interface", body: "Navigation and product actions should be easy to locate, but visually quiet enough to let the jewelry remain the focus." }, { title: "Merchandising benefits from restraint", body: "A limited number of strong product cues can feel more valuable than a crowded set of promotional messages." }],
    featureFocus: [{ title: "Material-led product framing", body: "Close-up imagery and a restrained palette give rings and accessories the visual weight expected of a premium product." }, { title: "Shop-forward editorial layout", body: "Brand atmosphere and collection discovery sit together so inspiration can lead directly into browsing." }, { title: "Measured interaction language", body: "The interface uses consistent, minimal action cues to support focus instead of distracting from product detail." }],
    lessons: ["Premium commerce does not need more interface—it needs better hierarchy around the product.", "Close material cues are especially valuable when physical qualities shape the buying decision."],
  }),
  defineProject({
    slug: "whole-life-pet", name: "Whole Life Pet", liveUrl: "https://wholelifepet.com/", category: "Pet care", engagement: "Figma-to-Shopify", cover: wholeLifePetCover,
    desktopCapture: wholeLifePetDesktop, mobileCapture: wholeLifePetMobile, tags: ["Figma", "Shopify", "Content system"], featured: true,
    summary: "A benefit-led pet nutrition storefront that makes product education and category navigation easy to scan.",
    overview: "Whole Life Pet serves pet parents making considered nutrition choices for dogs and cats. The storefront brings warmth and product confidence together, making it easier to understand the offer before choosing a food or treat.",
    audience: "pet parents shopping for dogs and cats", businessGoal: "make pet-nutrition choices easier to understand and browse", experienceFocus: "reassuring pet-nutrition commerce",
    challenge: "Pet nutrition carries an emotional responsibility: customers want a product that feels right for their animal, not just a cheerful package. The site needed to feel friendly while giving product education and category choices a clear place.",
    visualDirection: "Soft blue tones, expressive pet photography, gentle rounded shapes, and approachable product language create a caring, confident tone.",
    researchFindings: [{ title: "Shoppers start with their pet", body: "Dog and cat pathways need to be easy to spot because they reduce the distance between an owner’s need and a relevant product set." }, { title: "Trust is built in layers", body: "Warm imagery gains credibility when it is paired with structured benefit and product information." }, { title: "Reassurance has to travel to mobile", body: "The mobile state keeps the pet-first message and key actions close together so the experience remains comforting and practical." }],
    featureFocus: [{ title: "Pet-first entry points", body: "Dog and cat imagery and language provide immediate orientation before visitors commit to a category." }, { title: "Benefit-led content", body: "Supportive content frames the product offer in terms customers can understand while they browse." }, { title: "Approachable category system", body: "The storefront combines soft visual character with clear pathways into its nutrition and treat assortment." }],
    lessons: ["A warm pet brand still needs crisp category cues to reduce buyer uncertainty.", "Education feels more useful when it follows the customer’s animal-first mental model."],
  }),
  defineProject({
    slug: "tomato-snob", name: "Tomato Snob", liveUrl: "https://tomatosnob.co/", category: "Food & beverage", engagement: "Figma-to-Shopify", cover: tomatoSnobCover,
    desktopCapture: tomatoSnobDesktop, mobileCapture: tomatoSnobMobile, tags: ["Figma", "Shopify", "Brand UI"], featured: true,
    summary: "A characterful food brand translated into a bold storefront with strong visual pacing and direct product storytelling.",
    overview: "Tomato Snob turns a pantry staple into a vivid food-brand proposition. The storefront had to give the product a big personality while keeping the shopping experience legible and direct.",
    audience: "food-curious shoppers and home cooks", businessGoal: "turn a distinctive tomato proposition into a memorable, easy-to-shop product story", experienceFocus: "characterful pantry commerce",
    challenge: "The brand’s point of view is deliberately bold. The challenge was to let that personality lead without letting decorative content overshadow the actual product and purchase route.",
    visualDirection: "Tomato red, cream, oversized produce imagery, playful copy, and retro-inspired framing create a bold, appetite-forward rhythm.",
    researchFindings: [{ title: "The category is familiar; the proposition is not", body: "The interface needs to explain what makes the product worth noticing while using the immediate familiarity of tomato-led food imagery." }, { title: "Voice can guide browse behaviour", body: "Strong copy works best when it points toward product, flavour, or use rather than becoming an isolated brand monologue." }, { title: "Colour needs control", body: "A saturated palette feels intentional when important actions and content blocks have a consistent visual order." }],
    featureFocus: [{ title: "Product personality at first glance", body: "A large tomato-led hero creates a memorable brand cue and immediately establishes the food category." }, { title: "Direct product storytelling", body: "Concise brand language and product calls to action keep the experience moving from intrigue to purchase." }, { title: "Expressive responsive rhythm", body: "The mobile view translates the same playful visual pacing into a focused vertical story." }],
    lessons: ["A bold voice is most effective when it helps shoppers understand the product faster.", "Food brands can be expressive without hiding the commerce underneath."],
  }),
  defineProject({
    slug: "clear-theory", name: "Clear Theory", liveUrl: "https://www.getcleartheory.com/", category: "Functional beverage", engagement: "Figma-to-Shopify", cover: clearTheoryCover,
    desktopCapture: clearTheoryDesktop, mobileCapture: clearTheoryMobile, tags: ["Figma", "Shopify", "Mobile UX"], featured: true,
    summary: "A high-energy hydration storefront that turns product benefits into a clear, mobile-first shopping experience.",
    overview: "Clear Theory presents hydration through a youthful, high-energy performance lens. The storefront brings product benefit messaging, strong packaging, and direct shopping actions together in an easy-to-scan experience.",
    audience: "active shoppers looking for hydration support", businessGoal: "make hydration benefits and the product offer immediately clear", experienceFocus: "high-energy hydration commerce",
    challenge: "Hydration products often rely on benefit claims that can become dense or generic. The design needed to preserve the brand’s energy while giving customers a believable, simple route into the product story.",
    visualDirection: "Bright water blues, vivid pink packaging, bubble-like details, and oversized display type create a fast, refreshing visual system.",
    researchFindings: [{ title: "The first screen must explain the category", body: "A shopper should recognise the product, its hydration role, and a next action without working through dense copy." }, { title: "Energy requires a hierarchy", body: "A lively visual system still needs a consistent relationship between product, benefit statement, and call to action." }, { title: "Mobile needs rapid comprehension", body: "On a smaller screen, bold packaging and action hierarchy carry most of the job, with deeper detail available after interest is established." }],
    featureFocus: [{ title: "Benefit-forward hero", body: "The storefront places hydration language, packaging, and a clear product action in the same high-impact decision zone." }, { title: "High-contrast product system", body: "Strong colour and type make product information easy to spot while reinforcing a performance-minded brand voice." }, { title: "Mobile-first conversion path", body: "The vertical experience keeps benefit, product, and action in a tight sequence for faster scanning." }],
    lessons: ["Functional benefits become more convincing when product and action are visible at the same time.", "High-energy design needs a simple underlying decision sequence to stay usable."],
  }),
  defineProject({
    slug: "cherry-love", name: "Cherry Love", liveUrl: "https://cherry.love/", category: "Fashion & apparel", engagement: "Full Shopify build",
    desktopCapture: cherryLoveDesktop, mobileCapture: cherryLoveMobile, tags: ["Shopify", "Launch page", "Email capture"],
    summary: "A restrained pre-launch fashion experience built to establish the brand and capture early demand.",
    overview: "Cherry Love is a pre-launch fashion brand presence. Rather than simulating a full store before the assortment was ready, the website focuses on the essential launch task: establish a point of view and invite the right audience to stay close.",
    audience: "early fashion followers and prospective launch customers", businessGoal: "establish the brand and capture early interest before a full catalog launch", experienceFocus: "focused pre-launch fashion storytelling",
    challenge: "Pre-launch sites have very little content to work with. The experience had to feel intentional and fashion-led without pretending that a ready-to-shop catalog existed.",
    visualDirection: "Restrained cream space, a single confident image, refined type, and a minimal form put the brand mood and early-access action at the centre.",
    researchFindings: [{ title: "Scarcity can be honest", body: "A pre-launch landing page works best when it clearly signals that access is coming, rather than creating dead-end shopping expectations." }, { title: "One action is enough", body: "With no live product range, the email-access moment should remain the unmistakable primary conversion." }, { title: "Brand cues must do more with less", body: "Photography, typography, and whitespace need to carry the identity while the interface stays deliberately spare." }],
    featureFocus: [{ title: "Pre-launch access capture", body: "A focused email entry point creates a direct path for visitors who want to hear when the brand opens." }, { title: "Minimal fashion landing page", body: "The site uses a small number of carefully weighted elements to establish a visual point of view before product launch." }, { title: "Responsive invitation", body: "The same brand image and sign-up priority hold together on desktop and mobile without adding unnecessary navigation." }],
    lessons: ["A pre-launch page is stronger when it makes one promise and gives visitors one clear way to respond.", "Minimalism only works when the central message and action are unmistakable."],
  }),
  defineProject({
    slug: "bralas-best", name: "Brala’s Best", liveUrl: "https://www.bralasbest.com/", category: "Food & beverage", engagement: "Full Shopify build",
    desktopCapture: bralasBestDesktop, mobileCapture: bralasBestMobile, tags: ["Shopify", "Theme build", "Product story"],
    summary: "A bright, direct-to-consumer food storefront centered on a distinctive garlic-spread proposition.",
    overview: "Brala’s Best brings a distinctive garlic spread to a direct-to-consumer audience. The storefront has to make an unfamiliar product proposition instantly appetising, easy to understand, and simple to buy.",
    audience: "home cooks, hosts, and flavour-seeking food shoppers", businessGoal: "make a distinctive garlic spread easy to understand, crave, and purchase", experienceFocus: "flavour-led product storytelling",
    challenge: "A specialised spread may not have an obvious place in every shopper’s routine. The site needed to explain the product’s appeal quickly, translate its personality into appetite, and avoid making the route to purchase feel complicated.",
    visualDirection: "Buttery yellow, garlic imagery, warm food photography, and expressive display type make the brand feel sunny, flavourful, and direct.",
    researchFindings: [{ title: "Novelty needs a familiar entry", body: "The product needs enough visual and language context that a first-time visitor can understand it without reading a long explanation." }, { title: "Food photography creates use cues", body: "Serving imagery can help shoppers imagine where the product belongs in their own meal or hosting plans." }, { title: "Clear product access keeps the impulse", body: "Once appetite is established, the shopping path should feel obvious rather than requiring more brand education." }],
    featureFocus: [{ title: "Distinctive product proposition", body: "Garlic-led brand language and imagery make the core offer visible before shoppers have to search for it." }, { title: "Appetite and use-case cues", body: "Food photography helps translate a spread into an inviting, practical product rather than an abstract pantry item." }, { title: "Direct ecommerce action", body: "The layout keeps product browsing and purchase movement close to the brand story." }],
    lessons: ["For a new-to-market food proposition, use cues are as important as product benefits.", "A strong appetite cue should be followed immediately by a recognisable product path."],
  }),
  defineProject({
    slug: "the-legal-paige", name: "The Legal Paige", liveUrl: "https://thelegalpaige.com/", category: "Professional services", engagement: "Figma-to-Shopify", cover: legalPaigeCover,
    desktopCapture: legalPaigeDesktop, mobileCapture: legalPaigeMobile, tags: ["Figma", "Shopify", "Content UX"],
    summary: "A commerce-led legal resource platform balancing expert authority, education, and product discovery.",
    overview: "The Legal Paige makes legal resources more approachable for creative and small-business audiences. The storefront needed to communicate expertise and trust while still making templates, education, and offers easy to find.",
    audience: "creative business owners looking for legal resources", businessGoal: "make expert legal support feel approachable and easy to explore", experienceFocus: "trust-building resource commerce",
    challenge: "Legal content can feel intimidating, while commerce-led product pages can feel transactional. The site had to bridge authority and warmth without oversimplifying the value of professional resources.",
    visualDirection: "Warm neutrals, editorial portraits, structured serif typography, and calm card layouts create an expert-but-human point of view.",
    researchFindings: [{ title: "Trust has to arrive before purchase", body: "Professional-service shoppers need to understand the source’s authority and relevance before they can confidently evaluate a resource." }, { title: "Education is part of discovery", body: "Helpful content and product navigation need to work together rather than compete for attention." }, { title: "Warmth reduces perceived complexity", body: "A composed visual language and plain, clear content hierarchy make a high-stakes category easier to approach." }],
    featureFocus: [{ title: "Authority-led homepage", body: "The page gives expert positioning and the founder’s perspective visible weight before asking visitors to choose a resource." }, { title: "Resource discovery", body: "Structured content pathways help visitors move from a general legal concern toward relevant products or education." }, { title: "Calm conversion moments", body: "Consistent cards and calls to action keep the path to a resource clear without undermining the site’s advisory tone." }],
    lessons: ["For expert-led commerce, credibility is not a decorative layer—it is part of the purchase journey.", "Education and shopping can reinforce each other when both use the customer’s real question as their starting point."],
  }),
  defineProject({
    slug: "seasa", name: "SEASA", liveUrl: "https://www.drinkseasa.com/", category: "Functional beverage", engagement: "Figma-to-Shopify", cover: seasaCover,
    desktopCapture: seasaDesktop, mobileCapture: seasaMobile, tags: ["Figma", "Shopify", "Product education"],
    summary: "A benefit-focused beverage storefront with a strong visual system and simple conversion paths.",
    overview: "SEASA is a hydration brand with a concise, benefit-led proposition. The Shopify implementation gives the product a crisp, energetic storefront where the value proposition and the route to shop are immediately visible.",
    audience: "hydration-minded beverage shoppers", businessGoal: "turn a simple hydration proposition into a clear path to product", experienceFocus: "crisp benefit-led beverage commerce",
    challenge: "A short functional promise can disappear in a visually busy beverage market. The storefront needed to make the product and its use case memorable while avoiding explanation overload.",
    visualDirection: "Deep water blue, bright yellow, strong product photography, and punchy editorial blocks create an energetic but tightly controlled system.",
    researchFindings: [{ title: "One promise should lead", body: "The site benefits from making its core hydration message easy to identify before visitors encounter supporting product information." }, { title: "Packaging can carry recognition", body: "A distinct can and product colour system can make browsing faster when it remains prominent across key modules." }, { title: "Contrast improves scanability", body: "Strong blue-yellow contrast is most effective when it reinforces content priority, not when it is applied indiscriminately." }],
    featureFocus: [{ title: "Single-minded hydration message", body: "The first interaction pairs the product with a concise value proposition and a visible next step." }, { title: "Product-led visual modules", body: "Packaging appears as a recognisable anchor across the storefront’s benefit and shopping moments." }, { title: "Focused conversion path", body: "A consistent action language helps visitors move from understanding the drink to exploring it." }],
    lessons: ["A functional beverage can earn attention with a single clear promise before adding detail.", "High-contrast colour works best as a hierarchy tool, not only a brand signal."],
  }),
  defineProject({
    slug: "pearl-honey-spreads", name: "Pearl Honey Spreads", liveUrl: "https://pearlhoneyspreads.com/", category: "Food & beverage", engagement: "Figma-to-Shopify", cover: pearlHoneyCover,
    desktopCapture: pearlHoneyDesktop, mobileCapture: pearlHoneyMobile, tags: ["Figma", "Shopify", "Merchandising"],
    summary: "A colorful pantry-brand storefront built around clear flavor discovery and energetic merchandising.",
    overview: "Pearl Honey Spreads turns flavoured honey into a playful pantry-brand experience. The storefront gives jars, flavours, and the brand’s sunny personality enough room to sell together.",
    audience: "flavour-curious pantry shoppers and gift buyers", businessGoal: "make flavour discovery feel joyful and easy to shop", experienceFocus: "playful pantry merchandising",
    challenge: "A colourful food brand can feel fun without clearly explaining the product range. The site needed to use visual energy to invite exploration while keeping flavour and shopping decisions simple.",
    visualDirection: "Honey gold, teal, glossy jar photography, drips, and soft rounded forms create an optimistic, sweet-but-polished visual world.",
    researchFindings: [{ title: "Flavour is the browse model", body: "The category works best when customers can understand the product through familiar flavour and occasion cues." }, { title: "Packaging supports the system", body: "The jar design becomes a useful visual anchor that makes each merchandising moment recognisable." }, { title: "Joy needs clear structure", body: "Playful shapes and vivid colour should still lead toward product, flavour, and purchase in a consistent sequence." }],
    featureFocus: [{ title: "Flavour-led product entry", body: "The storefront surfaces the spread range through clear product imagery and a warm, appetising first impression." }, { title: "Energetic merchandising", body: "Brand graphics and product moments work together to make browsing feel lively without losing the category structure." }, { title: "Responsive product rhythm", body: "On mobile, product and flavour cues remain prominent as the desktop composition resolves into a focused vertical flow." }],
    lessons: ["When flavour is the product story, it should organise the browsing experience.", "Packaging can do real navigation work when it remains visually consistent across the storefront."],
  }),
  defineProject({
    slug: "passionjoy", name: "PassionJoy", liveUrl: "https://passionjoy.com/", category: "Food & beverage", engagement: "Figma-to-Shopify", cover: passionJoyCover,
    desktopCapture: passionJoyDesktop, mobileCapture: passionJoyMobile, tags: ["Figma", "Shopify", "Responsive"],
    summary: "A playful, conversion-focused storefront carrying a vivid brand system through every responsive state.",
    overview: "PassionJoy is a vivid beverage brand with a playful spirit and a direct-to-consumer sales goal. The storefront translates expressive packaging and a flavourful story into a coherent responsive shopping experience.",
    audience: "adventurous beverage shoppers", businessGoal: "make a playful beverage brand easy to recognise, explore, and purchase", experienceFocus: "vivid conversion-focused beverage commerce",
    challenge: "The brand has enough visual energy to be memorable, but a lively composition can bury key product and purchase signals. The implementation needed a consistent spine beneath the fun.",
    visualDirection: "Passionfruit pink, cream, wavy shapes, product floats, and rounded graphic elements make the storefront feel celebratory and distinct.",
    researchFindings: [{ title: "The product should share the spotlight", body: "Brand expression succeeds when packaging, product action, and campaign artwork appear in a clear relationship." }, { title: "A repeatable system protects consistency", body: "Reusable visual patterns prevent a playful design from feeling inconsistent as content changes." }, { title: "Every responsive state needs a hero", body: "The mobile experience should retain the product’s visual impact rather than reducing the brand to plain text and buttons." }],
    featureFocus: [{ title: "Expressive product hero", body: "A high-impact first section introduces the drink, brand mood, and purchase route in one recognisable moment." }, { title: "Campaign-ready component language", body: "Waves, shapes, colour, and product framing become reusable building blocks for future product or promotional content." }, { title: "Strong responsive translation", body: "The brand’s visual energy is preserved across screens while the content order stays easy to scan." }],
    lessons: ["A playful brand is easier to maintain when its expressive devices become reusable components.", "Mobile needs the same emotional impact as desktop, not just the same information."],
  }),
  defineProject({
    slug: "magnolia-coffee", name: "Magnolia Coffee Co.", liveUrl: "https://shop.magnoliacoffeeco.com/", category: "Coffee & beverage", engagement: "Figma-to-Shopify", cover: magnoliaCoffeeCover,
    desktopCapture: magnoliaCoffeeDesktop, mobileCapture: magnoliaCoffeeMobile, tags: ["Figma", "Shopify", "Product UX"],
    summary: "A coffee storefront balancing product discovery, roast education, and subscription-ready shopping journeys.",
    overview: "Magnolia Coffee Co. sells coffee through the familiar but highly choice-rich world of roast, flavour, and ritual. The storefront has to make product discovery feel welcoming for both knowledgeable coffee buyers and people simply looking for their next bag.",
    audience: "coffee drinkers choosing beans, roasts, and gifts", businessGoal: "make coffee selection feel approachable while supporting product discovery", experienceFocus: "roast-led coffee commerce",
    challenge: "Coffee carries a lot of product nuance—roast, taste, format, and ritual—without every shopper wanting a long lesson. The site needed to give the product enough context while keeping browsing warm and easy.",
    visualDirection: "Roast-toned neutrals, coffee bean photography, soft peach accents, and editorial product framing create a warm, considered café-to-home mood.",
    researchFindings: [{ title: "Choice needs gentle guidance", body: "Coffee shoppers benefit from a clear starting point that lets them browse without requiring specialist knowledge." }, { title: "Taste is sensory", body: "Packaging and bean imagery should support the imaginative, ritual-led part of choosing coffee online." }, { title: "A clean route supports repeat intent", body: "Product discovery should feel fast enough for returning customers while retaining context for newcomers." }],
    featureFocus: [{ title: "Roast and product discovery", body: "The storefront keeps coffee products visually central while supporting shoppers who need more context before choosing." }, { title: "Warm ritual-led storytelling", body: "Coffee imagery and restrained editorial layout make the brand feel considered without becoming overly formal." }, { title: "Commerce-ready product paths", body: "Clear product actions and category cues keep the experience useful for both first-time and returning shoppers." }],
    lessons: ["Product education is most effective when it helps a customer make the next choice, not when it becomes a separate lesson.", "Coffee brands can use sensory storytelling while keeping repeat-purchase paths quick."],
  }),
  defineProject({
    slug: "moo-cha-matcha", name: "Moo Cha Matcha", liveUrl: "https://moochamatcha.co/", category: "Food & beverage", engagement: "Figma-to-Shopify", cover: mooChaMatchaCover,
    desktopCapture: mooChaMatchaDesktop, mobileCapture: mooChaMatchaMobile, tags: ["Figma", "Shopify", "Brand UI"],
    summary: "A clean matcha storefront with playful brand expression and a focused direct-to-consumer buying flow.",
    overview: "Moo Cha Matcha brings matcha into a fresh, contemporary direct-to-consumer experience. The storefront uses a light, playful visual language to make the product feel approachable while giving customers a focused route to explore and buy.",
    audience: "matcha drinkers and curious wellness shoppers", businessGoal: "make matcha feel approachable and simple to purchase", experienceFocus: "fresh matcha product discovery",
    challenge: "Matcha can feel either overly ceremonial or overly functional. The design had to find a friendly middle ground that conveyed quality and personality without asking visitors to decode a specialist category.",
    visualDirection: "Pale green, glassy textures, soft shadows, product-led still life, and compact playful type create a modern, fresh sense of ritual.",
    researchFindings: [{ title: "Approachability widens the category", body: "The site benefits from showing matcha as an inviting everyday product rather than assuming advanced category knowledge." }, { title: "Colour creates instant recognition", body: "Green becomes both a product cue and a system-level signal, so it needs disciplined use around key actions and products." }, { title: "Visual calm supports the ritual", body: "Soft composition can make a wellness-adjacent product feel soothing while the purchase path remains clear." }],
    featureFocus: [{ title: "Product-led matcha entry", body: "A visually clean opening gives packaging and product identity the first role in explaining the offer." }, { title: "Approachable brand language", body: "The interface avoids a technical or formal tone, helping newcomers feel comfortable exploring the category." }, { title: "Focused shopping flow", body: "Clear actions keep the visual calm from becoming indecision by giving visitors a recognisable next step." }],
    lessons: ["A niche product becomes easier to try when the interface lowers the perceived expertise barrier.", "A strong signature colour should carry recognition without obscuring content priority."],
  }),
  defineProject({
    slug: "kinu", name: "Kinu", liveUrl: "https://kinu.supply/", category: "Fashion & apparel", engagement: "Figma-to-Shopify", cover: kinuCover,
    desktopCapture: kinuDesktop, mobileCapture: kinuMobile, tags: ["Figma", "Shopify", "Motion"],
    summary: "An expressive fashion storefront translated into a responsive system with distinctive typography and movement.",
    overview: "Kinu is an expressive apparel brand where typography and movement are part of the product world. The storefront implementation needed to protect that signature energy while keeping fashion browsing and product intent accessible.",
    audience: "style-led apparel shoppers", businessGoal: "carry a distinctive fashion identity into a usable product-discovery experience", experienceFocus: "expressive apparel commerce",
    challenge: "A fashion system built around oversized, moving typography can be visually magnetic but difficult to translate across devices. The experience needed to keep that identity without making product discovery or mobile browsing feel unstable.",
    visualDirection: "Cobalt blue, oversized type, kinetic ticker-like text, editorial imagery, and high-contrast composition create a strong, art-directed fashion world.",
    researchFindings: [{ title: "Motion must support orientation", body: "Kinetic elements are most effective when visitors can still identify navigation, product context, and a stable action path." }, { title: "Typography becomes a product cue", body: "The type system carries brand recognition, so it needs responsive rules rather than simply shrinking at smaller widths." }, { title: "Fashion energy can survive compression", body: "Mobile can preserve an oversized attitude when text, media, and actions are deliberately sequenced." }],
    featureFocus: [{ title: "Kinetic typographic identity", body: "Large moving type makes the brand feel immediate and gives the storefront a recognisable fashion signature." }, { title: "Art-directed storefront pacing", body: "The layout treats editorial imagery and type as a coordinated story while retaining clear commerce entry points." }, { title: "Responsive motion-aware layout", body: "The design accounts for smaller screens so expressive elements do not compromise scanability or access to products." }],
    lessons: ["Motion earns its place when it reinforces brand recognition without destabilising the shopper’s orientation.", "Expressive typography needs a responsive choreography, not a one-size-fits-all scale reduction."],
  }),
  defineProject({
    slug: "herb-affair", name: "Herb Affair", liveUrl: "https://www.herbaffair.com/", category: "Health & wellness", engagement: "Figma-to-Shopify", cover: herbAffairCover,
    desktopCapture: herbAffairDesktop, mobileCapture: herbAffairMobile, tags: ["Figma", "Shopify", "Content UX"],
    summary: "A wellness storefront with structured product education, clear merchandising, and a calm conversion journey.",
    overview: "Herb Affair presents supplements through a composed, nature-forward wellness identity. The storefront translates a product range with varied benefits into an environment that feels calm, credible, and uncomplicated to shop.",
    audience: "wellness shoppers comparing supplements", businessGoal: "make supplement benefits and product discovery feel calm and credible", experienceFocus: "structured wellness commerce",
    challenge: "Supplement storefronts can either overwhelm shoppers with benefit claims or make products feel too generic. The challenge was to create enough educational structure for informed choices while preserving a serene, premium brand mood.",
    visualDirection: "Forest green, botanical shadows, warm product photography, and considered card layouts create a grounded, calm sense of wellness.",
    researchFindings: [{ title: "Benefits need a clear container", body: "Shoppers need a simple way to connect a product to a need without being confronted by dense information at every step." }, { title: "Trust is visual and structural", body: "A grounded palette and clean content grouping make a wellness offer feel more deliberate and easier to assess." }, { title: "Calm should not hide action", body: "The design needs obvious browsing and product cues so the quiet visual language does not become passive." }],
    featureFocus: [{ title: "Need-oriented product discovery", body: "The storefront provides a more structured way to move from a wellness interest toward the appropriate product range." }, { title: "Grounded benefit framing", body: "Product imagery and concise benefit cues make the assortment easier to scan without turning the interface into a claims wall." }, { title: "Calm commerce patterns", body: "Consistent cards, clear actions, and generous spacing maintain a composed purchase journey." }],
    lessons: ["Wellness shoppers need calm information architecture as much as calm aesthetics.", "Credibility grows when product benefits are structured around a clear customer decision."],
  }),
  defineProject({
    slug: "box-of-sensory-toys", name: "Box of Sensory Toys", liveUrl: "https://www.boxofsensorytoys.com/", category: "Kids & learning", engagement: "Client enhancements", cover: boxOfSensoryToysCover,
    desktopCapture: boxOfSensoryToysDesktop, mobileCapture: boxOfSensoryToysMobile, tags: ["Shopify", "Theme updates", "Client requests"],
    summary: "Targeted storefront improvements delivered around evolving client requirements and campaign needs.",
    overview: "Box of Sensory Toys offers sensory-focused toy boxes for children and families. This engagement centred on targeted Shopify improvements that could support the brand’s evolving campaign and storefront needs without replacing the wider experience.",
    audience: "parents and gift buyers looking for sensory play products", businessGoal: "support evolving campaign and storefront needs while preserving an approachable product journey", experienceFocus: "family-friendly sensory product browsing",
    challenge: "Enhancement work requires care: new needs must be addressed without breaking existing content, subscription messaging, or a familiar shopping flow for parents. The updates had to fit the product’s playful world and the current theme structure.",
    visualDirection: "Playful purple, colourful sensory-toy imagery, soft translucent shapes, and a family-friendly composition reinforce the product’s imaginative purpose.",
    researchFindings: [{ title: "Parents need fast reassurance", body: "The first impression should make the product category and its intended value easy to recognise, especially for visitors new to sensory play." }, { title: "Subscription language needs clarity", body: "A recurring box proposition benefits from a straightforward explanation of what customers receive and why it is relevant." }, { title: "Enhancements must respect familiarity", body: "Changes should reinforce existing customer expectations rather than forcing a new navigation or brand model onto an established store." }],
    featureFocus: [{ title: "Targeted theme support", body: "Updates extend the existing storefront around active campaign and client needs without changing its core identity." }, { title: "Sensory-box proposition", body: "Colourful imagery and concise content help communicate the family-focused subscription product at a glance." }, { title: "Responsive refinement", body: "The experience continues to hold its friendly product and action hierarchy across desktop and mobile captures." }],
    lessons: ["Enhancement work succeeds when it solves the current need while preserving the customer familiarity the store has already earned.", "For family products, reassurance and clarity should arrive as quickly as the visual delight."],
  }),
  defineProject({
    slug: "upstate-coffee", name: "Upstate Coffee", liveUrl: "https://upstatecoffee.com/", category: "Coffee & lifestyle", engagement: "Client enhancements", cover: upstateCoffeeCover,
    desktopCapture: upstateCoffeeDesktop, mobileCapture: upstateCoffeeMobile, tags: ["Shopify", "Theme updates", "Responsive"],
    summary: "Focused theme and content refinements supporting new client requirements without disrupting the existing store.",
    overview: "Upstate Coffee connects coffee culture with sport, place, and lifestyle. This engagement focused on Shopify refinements that could support new client requirements while preserving the brand’s established visual identity and store behaviour.",
    audience: "coffee drinkers drawn to sport, place, and lifestyle culture", businessGoal: "support new content and campaign requirements without disrupting the current store", experienceFocus: "lifestyle-led coffee merchandising",
    challenge: "An established theme already carries customer expectations, product content, and campaign logic. Updates needed to serve the next business requirement while fitting naturally into the existing coffee-and-lifestyle world.",
    visualDirection: "Deep navy, outdoor and sport photography, clean product cards, and editorial visual blocks create a rugged, contemporary coffee-lifestyle tone.",
    researchFindings: [{ title: "Culture creates the entry point", body: "Sport and place can lead visitors into the brand, but product access needs to remain easy to find and use." }, { title: "Existing systems reward restraint", body: "Enhancements should use the store’s current component language so they feel like an evolution, not an interruption." }, { title: "Campaign context changes often", body: "A maintainable theme needs content areas that can respond to new imagery or promotion without reshaping the customer journey." }],
    featureFocus: [{ title: "Theme refinements", body: "Focused updates support new client requirements within the visual and structural constraints of an active Shopify storefront." }, { title: "Lifestyle-to-product bridge", body: "Cultural imagery gives the brand energy while recognisable store modules keep coffee products accessible." }, { title: "Responsive continuity", body: "The captured desktop and mobile states maintain the same editorial character and practical browsing behaviour." }],
    lessons: ["For an existing store, the best enhancement is often the one that feels like it was always part of the system.", "Lifestyle storytelling should always return customers to a clear product route."],
  }),
];

export const featuredProjects = portfolioProjects.filter((project) => project.featured);

export const additionalProjectLinks = [
  { name: "Nawala", liveUrl: "https://www.nawala.co/", engagement: "Figma-to-Shopify" },
  { name: "Fringe Food Co.", liveUrl: "https://fringefoodco.com/", engagement: "Figma-to-Shopify" },
] as const;

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug) ?? null;
}
