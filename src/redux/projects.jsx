const url = 'https://portfolio-backend20221125.herokuapp.com/';
const GETPROJECTS = 'redux/projects/GETPROJECTS';

function projectReducer(state = [], action) {
  switch (action.type) {
    case GETPROJECTS:
      return action.projects;
    default:
      return state;
  }
}

const getProjects = (projects) => ({
  type: GETPROJECTS,
  projects,
});

export const fetchProjects = () => (dispatch) => {
  const List = [];
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const projects = Object.entries(data);
      projects.forEach((project) => {
        List.push({
          id: project[0],
          name: project[1].name,
          skills: project[1].skills,
          image: project[1].image,
          description: project[1].description,
          demo: project[1].demo,
          github: project[1].github,
        });
      });
      dispatch(getProjects(List));
    });
};

export default projectReducer;
