document.addEventListener("DOMContentLoaded", () => {
  const introSection = document.getElementById("intro");
  const quizSection = document.getElementById("quiz");
  const resultSection = document.getElementById("result");
  const questionContainer = document.getElementById("question-container");
  const hobbyName = document.getElementById("hobby-name");
  const hobbyImage = document.getElementById("hobby-image");
  const hobbyInfo = document.getElementById("hobby-info");
  const hobbyCategory = document.getElementById("hobby-category");
  const hobbyChallenge = document.getElementById("hobby-challenge");

  let userChoices = {};
  let shownHobbies = {
    creative: [],
    athletic: [],
    intellectual: [],
    relaxing: [],
  };

  // When pressing the corresponding buttons, it will hide intro section, show quiz section, hide quiz section and show intro
  document.getElementById("find-hobby-btn").addEventListener("click", () => {
    introSection.style.display = "none";
    quizSection.style.display = "flex";
  });

  document.getElementById("back-to-intro").addEventListener("click", () => {
    quizSection.style.display = "none";
    introSection.style.display = "flex";
    resetQuiz();
  });

  document.querySelectorAll(".choice").forEach((button) => {
    button.addEventListener("click", (event) => {
      const value = event.target.getAttribute("data-value");

      if (!userChoices.interestType) {
        userChoices.interestType = value;
        questionContainer.style.display = "none";
        showHobbyResult();
      }
    });
  });

  // Listener for the pick for me button that randomly selects either category for the user
  document.getElementById("pick-for-me").addEventListener("click", () => {
    const randomChoice = ["creative", "athletic", "intellectual", "relaxing"];
    const randomType =
      randomChoice[Math.floor(Math.random() * randomChoice.length)];
    userChoices.interestType = randomType;
    showHobbyResult();
  });

  // Hides the quiz section and shows results
  function showHobbyResult() {
    quizSection.style.display = "none";
    resultSection.style.display = "flex";

    // Ensures that hobby name, image and text contents show on the results page
    const hobby = getRandomHobby(userChoices);
    hobbyName.textContent = hobby.name;
    hobbyImage.src = hobby.image;
    hobbyImage.alt = hobby.name;
    hobbyInfo.textContent = hobby.description;
    hobbyChallenge.textContent = hobby.challenge;
    hobbyCategory.textContent = `Based on your choice of the ${capitalizeFirstLetter(
      userChoices.interestType
    )} category, we recommend you try the following hobby`;
  }

  // Shuffle function to randomize the hobby list
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
  }

  // List of random hobbies based on which category the user picks.
  function getRandomHobby(choices) {
    const hobbies = {
      creative: [
        {
          name: "Digital Art & Graphic Design",
          image: "./images/digital_art.jpg",
          description:
            "Take your creativity to the next level by designing breathtaking visuals and digital masterpieces. Whether you’re crafting illustrations, logos, or social media graphics, your imagination is the only limit!",
          challenge:
            "Here's a challenge for you: Challenge yourself to create one piece of artwork every day for a month! It can be as simple or difficult as you want it to be. Somedays could be as plain as a circle",
        },
        {
          name: "Video Editing & Content Creation",
          image: "./images/video_editing.jpg",
          description:
            "Turn raw footage into cinematic magic! Whether you’re cutting together a vlog, an action-packed montage, or a creative short film, video editing allows you to bring your vision to life with stunning effects and smooth transitions.",
          challenge:
            "Here's a challenge for you: Create and edit a short video using transitions and effects you've never tried before or try to stream on any platform of your choosing for 1-2hrs everyday",
        },
        {
          name: "Music Production",
          image: "./images/music_production.jpg",
          description:
            "Compose beats, mix tracks, and create mesmerizing soundscapes with digital audio workstations. Whether you're making electronic music, hip-hop, or ambient soundtracks, music production is a gateway to boundless creativity.",
          challenge:
            "Here's a challenge for you: Make a full track using only three instruments or sounds.",
        },
        {
          name: "DIY & Crafting",
          image: "./images/diy_crafting.jpg",
          description:
            "Transform everyday materials into something extraordinary! Whether it's resin art, custom clothing, or intricate papercrafts, this hobby lets you bring handmade magic into the world.",
          challenge:
            "Here's a challenge for you: Design and craft a gift for a friend or family member from scratch using whatever you have at your disposal.",
        },
        {
          name: "Writing",
          image: "./images/writing.jpg",
          description:
            "Unleash the power of words and let your imagination run wild. From short stories and blog posts to poetry and screenplays, writing is a fantastic way to express yourself and craft compelling narratives.",
          challenge:
            "Here's a challenge for you: Write a short story or poem in under 500 words, then edit it to perfection!",
        },
        {
          name: "Photography & Photo Editing",
          image: "./images/photography.jpg",
          description:
            "Capture the beauty of the world through your lens! Whether you're exploring street photography, portraits, or landscapes, every snapshot tells a story—and with photo editing, you can make that story even more vibrant.",
          challenge:
            "Here's a challenge for you: Take 10 unique photos of objects or places around you using different perspectives and learn to edit them using simple picture editing guides.",
        },
        {
          name: "3D Modeling & Printing",
          image: "./images/3d_modeling.jpg",
          description:
            "Bring your ideas to life in three dimensions! Whether you're designing game assets, custom figurines, or engineering prototypes, 3D modeling and printing open up limitless creative possibilities.",
          challenge:
            "Here's a challenge for you: Model a simple character or object and bring it to life with 3D printing! We're aware of the expenses of 3D printers so if you don't own one simply try for a new hobby",
        },
      ],
      athletic: [
        {
          name: "Gym & Weightlifting",
          image: "./images/gym.jpg",
          description:
            "Push your limits, build strength, and sculpt your body through weight training. Whether you’re lifting for aesthetics, power, or endurance, every rep brings you closer to your goals.",
          challenge:
            "Here's a challenge for you: Aim to slowly increase the difficulty of your exercises for each week be it increasing the rep amount or weightload.",
        },
        {
          name: "Jogging / Running",
          image: "./images/running.jpg",
          description:
            "Feel the wind against your face as you hit the pavement or trail! Whether you’re sprinting, jogging, or training for a marathon, running is a powerful way to clear your mind and boost your endurance.",
          challenge:
            "Here's a challenge for you: Run a distance of 5 kilometers (about 3.1 miles) without stopping, and track your time to measure your progress! If that's too easy then increase the difficulty for each week",
        },
        {
          name: "Yoga & Pilates",
          image: "./images/yoga.jpg",
          description:
            "Discover the perfect balance of strength and serenity. Yoga and Pilates improve flexibility, core strength, and mental well-being, helping you feel grounded and energized.",
          challenge:
            "Here's a challenge for you: Master a new yoga pose every week and document your progress.",
        },
        {
          name: "Home Workouts",
          image: "./images/home_workout.jpg",
          description:
            "Stay fit from the comfort of your home! Whether you're doing high-intensity interval training (HIIT), bodyweight exercises, or dance workouts, fitness is just a few movements away.",
          challenge:
            "Here's a challenge for you: Complete a 30-day bodyweight exercise challenge and make sure you measure your starting weight and aim to reach a goal!",
        },
        {
          name: "Rock Climbing",
          image: "./images/rock_climbing.jpg",
          description:
            "Test your strength, agility, and problem-solving skills by scaling indoor climbing walls or rugged outdoor cliffs. Every climb is a new challenge waiting to be conquered!",
          challenge:
            "Here's a challenge for you: Climb a new route every time you visit the climbing gym and try to increase the difficulty each day or week.",
        },
        {
          name: "Parkour & Freerunning",
          image: "./images/parkour.jpg",
          description:
            "Jump, climb, and vault your way through the urban jungle! Parkour and freerunning challenge your body and mind to navigate obstacles in the most efficient—and creative—ways.",
          challenge:
            "Here's a challenge for you: Land your first vault or precision jump with control!",
        },
        {
          name: "Martial Arts",
          image: "./images/martial_arts.jpg",
          description:
            "Perfect your strikes, kicks, and blocks while learning discipline and focus. Martial arts offer a unique blend of physical and mental challenges that improve strength and coordination.",
          challenge:
            "Here's a challenge for you: Perfect a new combination of strikes, blocks, or submissions.",
        },
      ],
      intellectual: [
        {
          name: "Chess & Strategy Games",
          image: "./images/chess.jpg",
          description:
            "Sharpen your mind with the ultimate battle of strategy and foresight. Whether you're playing classic chess, Go, or modern strategy games, every move is a test of skill and logic.",
          challenge:
            "Here's a challenge for you: Win three chess games in a row against progressively harder opponents.",
        },
        {
          name: "Coding & Programming",
          image: "./images/coding.jpg",
          description:
            "Unlock the power of technology by learning to code! Whether you're developing games, building websites, or automating tasks, programming allows you to turn ideas into reality.",
          challenge:
            "Here's a challenge for you: Build a small project, like a to-do app or a simple game! Here is a list of potential languages to maybe learn: Python, Javascript, Scratch, HTML&CSS, Ruby or Swift",
        },
        {
          name: "Reading",
          image: "./images/reading.jpg",
          description:
            "Escape into different worlds, expand your knowledge, and experience new perspectives. Whether it's self-improvement books, fiction, or audiobooks, reading is a gateway to lifelong learning.",
          challenge:
            "Here's a challenge for you: Finish a book or a book in a genre you’ve never read before.",
        },
        {
          name: "Investing & Crypto Analysis",
          image: "./images/investing.jpg",
          description:
            "Explore the world of finance and investing! Build your portfolio and learn how to make informed decisions with stocks, bonds, and cryptocurrency.",
          challenge:
            "Here's a challenge for you: Create a mock portfolio and see if you can increase its value in a month.",
        },
        {
          name: "Language Learning",
          image: "./images/language_learning.jpg",
          description:
            "Open up new cultural doors by learning a new language. Whether you're using an app, a tutor, or immersive experiences, language learning is a rewarding intellectual challenge.",
          challenge:
            "Here's a challenge for you: Hold a five-minute conversation in your target language and aim for consistent learning of 15minutes to 1hour everyday.",
        },
        {
          name: "Puzzle Solving",
          image: "./images/puzzle_solving.jpg",
          description:
            "Exercise your brain by solving challenging puzzles! Whether it’s jigsaw puzzles, sudoku, or logic games, puzzle-solving sharpens your problem-solving and analytical skills.",
          challenge:
            "Here's a challenge for you: Solve a Rubik’s cube in under three minutes! If you've already solved the Rubik's cube before try other puzzle exercises and see how quickly you can solve them",
        },
        {
          name: "Stock Trading Simulations",
          image: "./images/stock_trading.jpg",
          description:
            "Test your skills in the world of finance with simulated stock trading. Track the stock market and make calculated moves to see how well you can grow your portfolio.",
          challenge:
            "Here's a challenge for you: See if you can ‘trade’ your way to a 10% profit over a simulated month.",
        },
      ],
      relaxing: [
        {
          name: "ASMR & Meditation Listening",
          image: "./images/meditation.jpg",
          description:
            "Unwind and relax with soothing ASMR or meditation music. Whether you prefer soft whispers, nature sounds, or guided mindfulness sessions, this hobby helps melt away stress.",
          challenge:
            "Here's a challenge for you: Try a 10-minute guided meditation or ASMR experience every day for a month.",
        },
        {
          name: "Casual Gaming",
          image: "./images/casual_gaming.jpg",
          description:
            "Enjoy stress-free gaming experiences, from cozy farming sims to immersive story-driven adventures. Perfect for when you want to relax and escape reality for a while.",
          challenge:
            "Here's a challenge for you: Complete a game without using any hints or walkthroughs.",
        },
        {
          name: "Watching TV Shows / Anime",
          image: "./images/tv_shows.jpg",
          description:
            "Binge-watch your favorite series or explore new stories from different cultures. Whether it's an intense drama, a feel-good comedy, or an action-packed anime, entertainment is always a click away.",
          challenge:
            "Here's a challenge for you: Watch an entire season of a show or anime in a new genre that you normally don't watch!",
        },
        {
          name: "Gardening",
          image: "./images/gardening.jpg",
          description:
            "Reconnect with nature by growing your own plants, herbs, or flowers. Whether you have a backyard or a small balcony, gardening is a peaceful and rewarding hobby.",
          challenge:
            "Here's a challenge for you: Grow a plant from a seed and track its progress! You can grow multiple at a time if you want.",
        },
      ],
    };

    // Shuffle the hobbies in the selected category
    shuffleArray(hobbies[choices.interestType]);

    // Find the first hobby that hasn't been shown
    let nextHobby = hobbies[choices.interestType].find(
      (hobby) => !shownHobbies[choices.interestType].includes(hobby.name)
    );

    if (nextHobby) {
      // Mark the hobby as shown
      shownHobbies[choices.interestType].push(nextHobby.name);
    } else {
      // If all hobbies in the category have been shown, reset and shuffle again
      shownHobbies[choices.interestType] = [];
      nextHobby = hobbies[choices.interestType][0];
      shownHobbies[choices.interestType].push(nextHobby.name);
    }

    return nextHobby;
  }

  // Makes it so that when user clicks on the button "back to quiz" it hides results and shows intro
  document.getElementById("back-to-quiz").addEventListener("click", () => {
    resultSection.style.display = "none";
    introSection.style.display = "flex";
    resetQuiz();
  });

  function resetQuiz() {
    userChoices = {};
    questionContainer.style.display = "block";
  }
});

// Quick function to capitalize letters in my hobbyCategory.textContent on the results page
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Targets each data color from the buttons giving them their proper color
document.querySelectorAll(".choice").forEach((button) => {
  const color = button.getAttribute("data-color");
  button.style.backgroundColor = color;
});
