import { useState, useEffect, useCallback, useRef } from "react";

/**
 * Zuora loading screen fun facts - subscription and billing humor!
 */
const FUN_FACTS = [
  "Loading… like your MRR, we prefer this number to keep going up and to the right.",
  "Welcome to Zuora, where \"It's complicated\" is a valid relationship status between customers and subscriptions.",
  "Somewhere in the background, a subscription just renewed itself. Magic? No, Zuora.",
  "This app runs on coffee, APIs, and a mild obsession with recurring revenue.",
  "Fun fact: \"Just one more tweak\" to the product catalog is how entire pricing strategies are born.",
  "Subscription joke: We never really say goodbye here… we just quietly auto‑renew.",
  "This loading bar is like a ramp deal—starts small, grows over time.",
  "Our favorite hobby? Turning \"Can finance handle this?\" into \"Already done.\"",
  "If you hear a faint humming sound, that's just Zuora thinking about your next upsell.",
  "Relax. Somewhere, an Excel billing spreadsheet just got retired in your honor.",
  "At Zuora, we don't fear commitment—unless it's a 10-year fixed-price contract.",
  "Good news: this app loads faster than most month-end closes.",
  "\"One simple use case\" has never, ever been one simple use case. We see you.",
  "Loading… please enjoy this short break from explaining ARR vs. revenue to your stakeholders.",
  "Our favorite button? \"Bill run complete successfully.\"",
  "They say money doesn't buy happiness, but predictable recurring revenue comes pretty close.",
  "This screen is your reminder to drink water and maybe cancel that subscription you forgot about. (Not this one.)",
  "If your pricing model feels weird, congratulations—you're probably innovating.",
  "You know you're in Zuora land when \"amendment\" is a love language.",
  "We don't do \"set it and forget it.\" We do \"set it, test it, iterate it, scale it.\"",
  "Somewhere in your org, someone still thinks everything is billed once a year. Be kind to them.",
  "Loading… like your backlog of \"quick billing questions.\"",
  "In a world of one‑time sales, be a subscription.",
  "Think of Zuora as your monetization DJ, mixing subscriptions, usage, and services into one clean track.",
  "If you can dream the offer, there's probably a way to model it. (Should you? That's another question.)",
  "This app is brought to you by the letters Z, U, O, R, and A, and the number ∞ (as in \"infinite amendments\").",
  "Somewhere, a customer just upgraded. We're rooting for more of that.",
  "If your business model changed faster than your legacy billing system… that's why we're here.",
  "Reminder: Discounts are like chili flakes. A little is great. The whole jar is not.",
  "Zuora: making \"Let's launch a new product\" slightly less terrifying since 2007.",
  "Your product manager's favorite phrase: \"Can we launch this next quarter?\" Zuora's answer: \"Let's talk.\"",
  "Loading… a safer place for your data than that one mystery spreadsheet on someone's desktop.",
  "Subscription economy rule #1: It's easier to keep a customer than to win them back. Be nice to renewals.",
  "Somewhere, a CFO just smiled because the numbers actually reconciled.",
  "We love long walks on the beach and long lists of happy subscribers.",
  "If you've ever said, \"We'll just fix it in phase two,\" this app is for you.",
  "Loading screen or mini vacation? You decide.",
  "In Zuora world, \"What if we changed our pricing?\" is not a scary question.",
  "The best time to clean up your product catalog was three years ago. The second best time is after this app loads.",
  "Fun fact: A good collections strategy is basically just a well-timed nudge with good manners.",
  "Don't worry—somewhere a payment just went through on the first try. It does happen.",
  "We believe in second chances: for payments, for pricing, and for that one messy subscription.",
  "Loading… somewhere your customers are clicking \"upgrade.\"",
  "In a subscription business, every month is \"reporting season.\"",
  "We don't just manage invoices. We manage all the \"Oops, can we change that?\" after the invoice.",
  "Think of us as relationship counselors for you and your customers' wallets.",
  "Your data has a happy place. Spoiler: it's not scattered across 10 systems.",
  "Subscription life motto: Bill early, bill often, bill correctly.",
  "This app is like a good renewal email—shows up at just the right time.",
  "If your business model has more plot twists than a TV drama, you're in the right platform.",
  "We don't judge your pricing experiments. We just help you keep track of them.",
  "Somewhere, a customer portal login just saved a support ticket.",
  "Loading… ideal time to think of your next cross‑sell.",
  "Reminder: \"One-off exception\" is how every permanent process starts. Choose wisely.",
  "In Zuora, \"simple plan\" is an aspiration, not a guarantee.",
  "Just like your favorite subscription, this app aims to be delightful and slightly addictive.",
  "We treat failed payments like cliffhangers—we really want a happy ending.",
  "If you can't describe your pricing in one sentence, at least this app can still handle it.",
  "Loading… your daily dose of \"this could've been a spreadsheet, but isn't.\"",
  "Behind every clean invoice is a messy story. We handle the story so you can enjoy the invoice.",
  "We love all our users equally, but the ones who document their processes… we love a tiny bit more.",
  "This app believes in second chances, especially for typos in product names.",
  "If confusion were billable, half of us would have hit quota by now.",
  "Loading… pretend this is a very thoughtful \"buffer\" in your process flow.",
  "We don't eliminate chaos. We just route it more intelligently.",
  "Your contracts are long; your customers are picky; your systems are many. That's why Zuora exists.",
  "Subscription rule: The more creative the offer, the more important the billing.",
  "This app is the part of your stack that quietly holds everything together like duct tape, but prettier.",
  "Somewhere, a business user just changed a setting and did not need a deployment for it. Progress.",
  "Loading… great moment to remember that \"test in sandbox first\" is not just a suggestion.",
  "Our unofficial motto: \"No one yelled about billing this month.\"",
  "If pricing was easy, this screen would be blank.",
  "We're not saying Zuora solves everything, but it has ended a lot of Excel-based suffering.",
  "Loading… like your roadmap, we're 90% done and 60% certain.",
  "Every subscription has a story. We just make sure the story and the invoice match.",
  "Somewhere, a renewal just happened quietly without a fire drill. That's the dream.",
  "This app is allergic to copy‑pasting data between systems.",
  "Your customers don't think in invoices and journal entries. Lucky for you, we do.",
  "Loading… please enjoy this short break from being asked, \"Can we see that by region, segment, and product?\"",
  "Behind every smart subscription business is someone who said, \"We should probably not build our own billing system.\"",
  "We love dashboards, but we love \"everything just worked\" even more.",
  "This app's love language is accurate, on‑time invoices.",
  "Some people collect stamps. We collect recurring revenue.",
  "Loading… a nice reminder that automation is just future you saying \"thanks.\"",
  "We don't do drama. Just amendments, renewals, and the occasional heroic fix.",
  "Congratulations: by using this app, you're officially part of the \"I know what ARR is\" club.",
  "Behind the scenes, lots of logic. On the surface, \"Sure, we can support that use case.\"",
  "Loading… perfect moment to think of one manual process you never want to do again.",
  "We can't solve all your problems, but we can definitely make \"invoice alignment\" less of one.",
  "If your business model is a moving target, consider us your billing GPS.",
  "This app is powered by Zuora and a healthy skepticism of hard‑coded anything.",
  "Loading… just like your roadmap: a work in progress, but getting better every release.",
  "Every time this screen appears, a legacy system somewhere gets nervous.",
  "You bring the big ideas. We'll help make sure they actually bill and renew.",
  "Somewhere, a meeting about \"our pricing strategy\" just ran 30 minutes over. We've all been there.",
  "Loading… take a deep breath and remember: at least you're not reconciling this by hand.",
  "Our unofficial motto: fewer surprises, better renewals.",
  "This app is what happens when people who love subscriptions build tools for people who run them.",
  "One day, you'll tell your grandkids about manual billing. They will not believe you.",
  "Thanks for your patience. May your load times be short and your renewals be long.",
];

/**
 * Fisher-Yates shuffle algorithm
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

interface UseFunFactsOptions {
  /** Interval in milliseconds between fact changes. Default: 6000 (6 seconds) */
  interval?: number;
  /** Whether to auto-rotate facts. Default: true */
  autoRotate?: boolean;
}

/**
 * Hook that provides rotating fun facts for loading screens.
 * Randomizes order and doesn't repeat until all facts have been shown.
 */
export function useFunFacts(options: UseFunFactsOptions = {}) {
  const { interval = 6000, autoRotate = true } = options;

  // Use refs to avoid triggering unnecessary re-renders
  const shuffledFactsRef = useRef<string[]>([]);
  const currentIndexRef = useRef(0);

  const [currentFact, setCurrentFact] = useState<string>("");

  // Initialize or reshuffle when we've shown all facts
  const getNextFact = useCallback(() => {
    // Initialize if empty
    if (shuffledFactsRef.current.length === 0) {
      shuffledFactsRef.current = shuffleArray(FUN_FACTS);
      currentIndexRef.current = 0;
    }

    const fact = shuffledFactsRef.current[currentIndexRef.current];
    setCurrentFact(fact);

    // Advance to next, reshuffle if we've shown all
    currentIndexRef.current++;
    if (currentIndexRef.current >= shuffledFactsRef.current.length) {
      shuffledFactsRef.current = shuffleArray(FUN_FACTS);
      currentIndexRef.current = 0;
    }
  }, []);

  // Initialize on mount
  useEffect(() => {
    getNextFact();
  }, [getNextFact]);

  // Auto-rotate if enabled
  useEffect(() => {
    if (!autoRotate) return;

    const timer = setInterval(() => {
      getNextFact();
    }, interval);

    return () => clearInterval(timer);
  }, [autoRotate, interval, getNextFact]);

  return {
    currentFact,
    nextFact: getNextFact,
    totalFacts: FUN_FACTS.length,
  };
}
