const brands = [
    { name: "BMW", img: "img/BMW.png" },
    { name: "Ducati", img: "img/Ducati.png" }, 
    { name: "Honda", img:"img/Honda.png" }, 
    { name: "Suzuki", img:"img/Suzuki.png" }
  ];

const category = "Aesthetic Enhancement"

const attributes = ["Freedom","Courage","Impulsiveness","Discovery","Escape","Unconventional","Resilience","Boldness","Transformation","Pride","Perfection","Recognition","Success","Sophistication","Confidence","Status","Empowerment","Optimization","Legacy","Original","Esteem","Routine/Discipline","Control","Effective","Simplicity","Methodical","Expertise","Natural","Savvy","Value","Proactive","High quality","Endorsed","Safety","Trusted","Protection","Peace of mind","Comfort","Belonging","Acceptance by others","Avoid embarrassment","Dependable","Joy","Sensual","Carefreeness","Relief","Fun","Indulge myself","Optimism","Naturalness","Be at ease with myself","Excitement","Zest for life","Inspiration","Vitality","Playfulness","Expression","Be on trend","Vibrant","Reviving"];

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


const survey_name = "Test Bikes Survey"