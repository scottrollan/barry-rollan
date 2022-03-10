import calendar from '../assets/calendar.jpg';
import cardMatch from '../assets/cardMatch.png';
import personality from '../assets/personality.jpg';
import wordGame from '../assets/wordGame.png';
import linq from '../assets/linq.jpg';
import movieTrailer from '../assets/movieTrailers.jpg';
import nursery from '../assets/nursery.jpg';
import neighborhood from '../assets/neighborhood.jpeg';
import stockSearch from '../assets/stockMarket.jpg';

const portfolio = [
  {
    href: 'https://blackland-ridge.com',
    src: neighborhood,
    description:
      'This project was created for a small, 80-home community, in essence, to replace NextDoor and Facebook. Neighbors can add, comment on and "like" public messages, send and receive private chats, receive email and sms notifications, veiw and add business referrals, pet profiles, kid entrepreneurs and more.',
    label: 'Neighbors Talk',
    techsUsed: [
      'React',
      'Firebase Authentication, Database & Cloud Functions',
      'jQuery',
    ],
  },
  {
    href: 'https://scottrollan.github.io/movieTrailers/',
    src: movieTrailer,
    description:
      'This app, with beautiful effects, lets a user search for movies by title or category to view trailers, read movie synopses, navigate to purchase movie tickes via Fandango (if in theaters) and more.',
    label: 'Movie Trailer App',
    techsUsed: [
      'jQuery and AJAX calls',
      'CSS grid with animations',
      'Bootstrap',
      'React',
    ],
  },
  {
    href: 'https://laughing-colden-c2d5f3.netlify.app//',
    src: wordGame,
    description:
      'My take on a popular daily word game. I have added a continuous-play option, along with the word of the day, as well as a custom user list with persistent scoring data.',
    label: 'Wordie Game',
    techsUsed: [
      'React with hooks',
      'Google Firebase',
      'jQuery',
      'axios',
      'Merriam-Webster API',
    ],
  },
  {
    href: 'https://scottrollan.github.io/memory-match-game/',
    src: cardMatch,
    description:
      'A classic card-match game with data-persistent Top-Ten scores',
    label: 'Memory Game',
    techsUsed: [
      'React',
      'CSS Modules',
      'CSS animations',
      'jQuery',
      'Sanity CMS',
    ],
  },
  {
    href: 'https://scottrollan.github.io/StockSearch/',
    src: stockSearch,
    description:
      'This mobile-responsive app allows a user to dynamically generate buttons that will, when clicked, see stock information for any valid stock symbol in the IEX Trading database.',
    label: 'Stock Search',
    techsUsed: ['jQuery', 'AJAX calls', 'Bootstrap', 'HTML', 'CSS'],
  },
  {
    href: 'https://naughty-lewin-713240.netlify.app/',
    src: calendar,
    description:
      "Exhibiting mastery of JavaScript, I coded this functioning calendar with buttons to move forward and backward by month, and another to 'Go To Today'",
    label: 'Working Calendar',
    techsUsed: [
      'React',
      'JavaScript',
      'date-fns from npm',
      'Bootstrap',
      'HTML',
      'CSS',
    ],
  },
  {
    href: 'https://sanity-personality-match.netlify.app/',
    src: personality,
    description:
      "A user answers a 10-question survey about their personality traits and stores it to a database.  The app generates a personality 'match' of another user.",
    label: 'Personality Match',
    techsUsed: [
      'Sanity.io (CMS)',
      'GraphQL',
      'Netlify hosting',
      'React styled components',
      'Next.js',
      'CSS Modules',
    ],
  },
  {
    href: 'https://latinolinq.org/',
    src: linq,
    description: 'A bilingual (Spanish/English) non-profit organization.',
    label: 'Non-Profit',
    techsUsed: [
      'Material UI',
      'Sanity CMS',
      'Netlify Forms',
      'jQuery',
      'Node',
      'React',
    ],
  },
  {
    href: 'https://cranky-swanson-2635a4.netlify.app',
    src: nursery,
    description:
      "This nursery's 510-item inventory is searchable by various plant-growing conditions or by common or latin name.",
    label: 'Plant Nursery Website',
    techsUsed: [
      'Sanity CMS',
      'GraphQL',
      'Javascript',
      'Netlify',
      'React stylized componets',
    ],
  },
];

export default portfolio;
