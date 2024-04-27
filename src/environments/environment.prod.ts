const api =  "http://localhost:3000";
export const environment = {
  production: false,
  api: api,
  userRoute: {
    getInfoUserById: `/assets/data/user.json`,
    getAllUser: `/assets/data/user.json`
  },
  experienceRoute: {
    getAllExperiencies: `/assets/data/experience.json`
  }
};