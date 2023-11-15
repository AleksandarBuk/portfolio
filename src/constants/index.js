export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "technology",
    title: "Technology",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
export const stats = [
  {
    id: "skill-1",
    title: "Data-Science",
    value: "+++++",
  },
  {
    id: "skill-2",
    title: "Web-Development",
    value: "+++++",
  },
  {
    id: "skill-3",
    title: "Machine-Learning",
    value: "+++++",
  },
];

export const projects = [
  {
    name: "Django-blog",
    technologies: ["Django", "Apache", "Bootstrap", "Docker", "GCP", "NameCheap"],
    description: "I created a django blog with django, used crispy-django forms, and django bootstrap for front. Developed 2 applications. the blog appcliation which is reponsible for creating the posts, and the user application that manages the user porfiles, login logout.",
  },
  {
    name: "DogVision",
    technologies: ["Google Colab", "Tensorflow", "Keras", "Pandas", "Flask"],
    description: "Developed a Neural-Networks model from the Kaggle competition dataset which I trained using Google Colab, Tensorflow & Keras. Utilized Flask for server-side. WIP",
  },
  {
    name: "Job-Hunt-Engine",
    technologies: ["Scrapy", "selenium", "requests", "BeautifulSoup"],
    description: "Developed a selenium based scraper that utilized webdriver to go through LinkeDin and gather relevant information about job market. The gathered data went through ETL pipe and were stored to the SQL database."
  },
]

export const technology = [
  {
  languages: ["Python", "Bash", "R"],
  backend: ["Django", "Flask", "PyQt", "Node.js", "Docker","GCP", "AWS", "Kubernetes"],
  frontend: ["HTML/CSS","JavaScript","Bootstrap", "Tailwind"],
  data_science: ["PostgreSQL", "MySQL", "MongoDB", 
  "numpy", "opencv","pandas", "Jupyter Notebook", "matplotlib", "seaborn", "Excell/VBA"],
  machine_learning: ["Classification", "Time-Series-Data", "Neural-Netwroks","Scikit-learn", "Tensorflow"],
  
}
]
