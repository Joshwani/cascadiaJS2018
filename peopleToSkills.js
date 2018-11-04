// PROBLEM 1
const people = [
    {
      id: 0,
      name: "John",
      skills: ["javascript", "html", "css", "c#"]
    },
    {
      id: 1,
      name: "Brian",
      skills: ["javascript", "java", "c", "c#", "c++", "html"]
    },
    {
      id: 2,
      name: "Michael",
      skills: ["c", "c++", "go", "rust"]
    }
  ];
  
  // const expectedResult = {
  //   "c": ["Brian", "Michael"],
  //   "c#": ["John", "Brian"],
  //   "c++": ["Brian", "Michael"],
  //   "css": ["John"],
  //   "go": ["Michael"],
  //   "html": ["John", "Brian"],
  //   "java": ["Brian"],
  //   "javascript": ["John", "Brian"],
  //   "rust": ["Michael"]
  // };
  
  function peopleToSkills(people) {
    skills = {};
    people.forEach(person => {
      person.skills.forEach(skill => {
        if (skill in skills) {
          skills[skill].push(person.name);
        } else {
          skills[skill] = [person.name];
        }
      });
    });
    return skills;
  }

  console.log(peopleToSkills(people));