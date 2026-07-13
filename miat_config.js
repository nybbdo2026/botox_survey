const brands = [
    { name: "Axe", img: "img/Axe.png" },
    { name: "Degree", img: "img/Degree.png" }, 
    { name: "Dove_men", img:"img/Dove_men.png" }, 
    { name: "Dr_Squatch", img:"img/Dr_Squatch.png" },
    { name: "Hawthrone", img: "img/Hawthrone.png" },
    { name: "Mando", img: "img/Mando.png" },
    { name: "Native", img: "img/Native.png" },
    { name: "Old_spice", img: "img/Old_spice.png" }
  ];

const category = "Body Spray"

const attributes = ["adventure","freedom","courage","spontaneity","escape","self-expression","resilience","daring","pride","perfection","recognition","success","self-confidence","empowerment","becoming my best self","independence","allure","discipline","control","reason","efficiency","pragmatic","simplicity","expertise","functional","safety","security","closeness","belonging","protection","confidence","acceptance by others","self-acceptance","joy","spoil myself","sensuality","carefreeness","comfort","indulge myself","exhilaration","naturalness","be at ease with myself","desirability","excitement","zest for life","inspiration","vitality","fun","playfulness","stimulation","individuality","magnetism","charisma"];

const pretest_attributes = [
  "Hot", 
  "Cold", 
  "Dangerous",
  "Refreshing", 
  "Cute",
  "Soft"
];


const pretest_images = [
  {name: "Cat", img: "pretest_img/pretest_cat.png", correct: ["Cute", "Soft"]},
  {name: "Fire", img:"pretest_img/pretest_fire.png", correct:["Dangerous", "Hot"]}, 
  {name: "Icecube", img: "pretest_img/pretest_icecube.png", correct:["Cold", "Refreshing"]}
]

const pretest_attributes_multiple = ["Hot", "Cold", "Dangerous", "Refreshing", "Cute", "Soft", "Travel", "Excitement", "Precise", "Time", "Deep", "Wet"]

const pretest_images_multiple = [
  {name: "Cat", img: "pretest_img/pretest_cat.png", correct: ["Cute", "Soft"]},
  {name: "Fire", img:"pretest_img/pretest_fire.png", correct:["Dangerous", "Hot"]}, 
  {name: "Icecube", img: "pretest_img/pretest_icecube.png", correct:["Cold", "Refreshing"]}, 
  {name: "Driving", img: "pretest_img/pretest_driving.png", correct:["Travel", "Excitement"]}, 
  {name: "Ocean", img: "pretest_img/pretest_ocean.png", correct:["Deep", "Wet"]},
  {name: "Clock", img: "pretest_img/pretest_clock.png", correct:["Precise", "Time"]}
]


const survey_name = "Axe Body Spray"