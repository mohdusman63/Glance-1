const recommended = [
  {
    skills: ["reactjs", "nodejs", "angularjs", "vuejs", "nextjs"]
  },
  {
    skills: ["python", "django", "ai", "ml", "flask", "jupiter"]
  },
  {
    skills: ["java", "spring", "struts", "hiberbates", "xml"]
  }
];

console.log(recommended.length);
for (let i = 0; i < recommended.length; i++) {
  if (recommended[i].skills.includes("python")) {
    console.log(recommended[i].skills);
  }
}
