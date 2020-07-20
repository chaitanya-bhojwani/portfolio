
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Chaitanya Bhojwani",
  title: "Chaitanya Bhojwani",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Scalable Backend Systems, Android and Web applications with Java / Vert.x / Nodejs / Python and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1W5RhUa9CRWiqNZ74dmn6OARwXUHuuacb/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/chaitanya-bhojwani",
  linkedin: "https://www.linkedin.com/in/chaitanya-bhojwani/",
  gmail: "chaitanya.bhojwani1012@gmail.com",
  instagram: "https://www.instagram.com/chaitanya_bhojwani/",
  facebook: "https://www.facebook.com/chaitanya.bhojwani"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "A passionate Full-Stack Developer who wants to explore all web and mobile tech stacks.",
  skills: [
    emoji("⚡ Develop fast and reliable Backend Systems for your web and mobile applications"),
    emoji("⚡ Believe in building scalable and robust software systems."),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Google Cloud")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Vert.x",
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Kotlin",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
    },
    {
      skillName: "Kafka",
    },
    {
      skillName: "MQTT",
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Google Cloud",
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "HTML 5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS 3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Android Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Web Development",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Intern",  
      company: "OLA Cabs",
      companylogo: require("./assets/images/ola.png"),
      date: "Jan 2020 – Present",
      desc: "Worked on Building an end-to-end MicroService responsible for upgrade-downgrade of categories of Play Cars including sending driver notifications and runtime speech texts in Play Cars. Worked on building Trending Playlists and Special labels for Play Devices and various other tasks.",
      descBullets: [
        "Technologies Worked On: Java, Vertx, REST API, Kafka, MQTT, Redis Cache, MySQL, SpringBoot, Python, AWS (S3).",
      ]
    },
    {
      role: "Software Development Summer Intern",   
      company: "OLA Cabs",
      companylogo: require("./assets/images/ola.png"),
      date: "May 2019 – Jun 2019",
      desc: "Worked on a MQTT based server-centric Android Chat Client between driver and customer with additional speech (Text-to-Speech and Speech-to-Text) features for Driver assistance. Built on MVVM Architecture using Kotlin.",
      descBullets: [
        "Technologies Worked On: Android Jetpack, ViewModel, LiveData, Room, MQTT, GCP Cloud Speech-To-Text, Text-to-Speech.",
      ]
    },
    {
      role: "Software Development Summer Intern",  
      company: "Jiva Adventures",
      companylogo: require("./assets/images/jiva.png"),
      date: "May 2018 – Jun 2018",
      desc: "Worked on an offline Indoor Navigation Support Android application for places with limited GPS and internet connectivity using Beacons and BLE technology.",
      descBullets: [
        "Technologies Worked On: Android Programming, Backend Development (Java), MySQL, AWS (S3).",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "chaitanya-bhojwani", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Organizations",
  subtitle: "Some Organizations I have been Part of !",
  projects: [
    {
      image: require("./assets/images/ieee-cs-logo.png"),
      link: "http://www.ieeecsvit.com/"
    },
    {
      image: require("./assets/images/elysion.png"),
      link: "https://elysionsoftwares.com/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements ⚡ "),
  subtitle: "Big Projects, Tech Talks and Mentorship Programmes !",

  achivementsCards: [
    {
      title: "Message Classifier",
      subtitle: "Made an AI powered Message Classifying application which automatically detects Spam messages and classifies messages into different categories",
      image: require("./assets/images/messageClassifier.webp"),
      footerLink: [
        { name: "Playstore Link", url: "https://play.google.com/store/apps/details?id=com.sbdevelopers.messageclassifier&hl=en_IN" }
      ]
    },
    {
      title: "Android Mentor at GirlScript",
      subtitle: "Conducted a series of Android Sessions under Education Outreach Programme conducted by GirlScript",
      image: require("./assets/images/girlscript.jpeg"),
      footerLink: [{ name: "View Certification", url: "https://drive.google.com/file/d/14K875Nj4J74Q9V2eGoEjRJ8nnCYmTd5P/view?usp=sharing" }]
    },

    {
      title: "Manager at ARCS'18",
      subtitle: "Managed ARCS'18 which includes a series of technical events conducted by IEEE-CS Student Chapter, VIT University ",
      image: require("./assets/images/arcs.png"),
      footerLink: [
        { name: "Arcs Website", url: "http://arcs.ieeecsvit.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@chaitanya.bhojwani1012/eclipse-paho-mqtt-android-client-using-kotlin-56129ff5fbe7",
      title: "Eclipse Paho Mqtt Android Client using Kotlin",
      description: "In this Blog, I have covered a step by step approach to how you can create a simple Android MQTT client using Eclipse Paho MQTT Library and Kotlin."
    },
    {
      url: "https://medium.com/@brainy.trainee1/kick-start-your-journey-to-super-dream-placement-6963c77ba49",
      title: "Kick-Start your Journey to Super Dream Placement !!",
      description: "In this Blog series, I have talked about Placements, mostly on-campus, steps to preparation and things to always keep in mind while sitting for one."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Have an opening at your organization ? Or want to discuss on a freelance project ? My Inbox is open for all.",
  number: "+91 7976087285",
  email_address: "chaitanya.bhojwani1012@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
