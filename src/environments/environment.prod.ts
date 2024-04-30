const api =  "http://localhost:3000";
export const environment = {
  production: false,
  api: api,
  userRoute: {
    getInfoUserById: `/dist/assets/data/user.json`,
    getAllUser: `/dist/assets/data/user.json`
  },
  experienceRoute: {
    getAllExperiencies: `/dist/assets/data/experience.json`
  },
  educationRoute: {
    getAllEducation: `/dist/assets/data/education.json`
  }
};