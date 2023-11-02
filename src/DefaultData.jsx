import { sub } from "date-fns";

const details = [
  {
    people:
      "https://img.mensxp.com/media/content/2019/Apr/background-dancers-who-became-known-bollywood-actors1400-1556545997.jpg",
    name: "john_doe1",
    image:
      "https://t4.ftcdn.net/jpg/01/54/94/85/240_F_154948524_ORSQMLKscgKF08N7dIgMCTvZvYzKozb2.jpg",
    description: "A delicious and nutritious fruit.",
    id: 1,
    liked: 10578,
    day: sub(new Date(), { minutes: 13 }).toISOString(),
  },
  {
    people:
      "https://i.pinimg.com/736x/55/c7/53/55c7539e539a277ae125850875c0fbd0.jpg",
    name: "janesmith_3",
    image:
      "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?cs=srgb&dl=pexels-simona-kidri%C4%8D-2607544.jpg&fm=jpg",
    description: "Man's best friend with a wagging tail.",
    id: 2,
    liked: 10438,
    day: sub(new Date(), { minutes: 38 }).toISOString(),
  },
  {
    people:
      "https://i.pinimg.com/236x/0a/0a/f4/0a0af4058de067a91430ff3e708352ac.jpg",
    name: "davidjohn_5",
    image:
      "https://cdn.pixabay.com/photo/2023/10/12/14/41/town-8310950_1280.jpg",
    description: "A breathtaking view as the day ends.",
    id: 3,
    liked: 178,
    day: sub(new Date(), { minutes: 97 }).toISOString(),
  },
  {
    people:
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Nani_at_an_interview_for_film_companion_%28cropped%29.png",
    name: "emily_89",
    image:
      "https://s2982.pcdn.co/wp-content/uploads/2020/06/library-libraries-feature-700x375-1.jpg.optimal.jpg",
    description: "A source of knowledge and adventure.",
    id: 4,
    liked: 18,
    day: sub(new Date(), { minutes: 2 }).toISOString(),
  },
  {
    people:
      "https://i.pinimg.com/originals/19/c2/b4/19c2b4dae84d8ad0c449997db5338445.jpg",
    name: "michael_67",
    image:
      "https://www.silverkris.com/wp-content/uploads/2017/03/iguazu-falls.jpg",
    description: "A majestic natural wonder.",
    id: 5,
    liked: 10234578,
    day: sub(new Date(), { minutes: 30 }).toISOString(),
  },
  {
    people:
      "https://cdn.pixabay.com/photo/2019/12/01/10/22/hero-4665129_1280.png",
    name: "sophia_8",
    image: "https://www.nutritionfact.in/wp-content/uploads/2020/02/juices.jpg",
    description: "The perfect pick-me-up beverage.",
    id: 6,
    liked: 8,
    day: sub(new Date(), { minutes: 27 }).toISOString(),
  },
  {
    people:
      "https://static.autox.com/uploads/2023/06/Hero-Xtreme-160R-4V-Front-Right-Quarter-Shot.jpg",
    name: "martinez_8",
    image:
      "https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2023/06/New-Project-2023-06-21T191413.464.jpg?size=*:900",
    description: "An instrument that creates beautiful music.",
    id: 7,
    liked: 1008,
    day: sub(new Date(), { minutes: 3 }).toISOString(),
  },
];
export default details