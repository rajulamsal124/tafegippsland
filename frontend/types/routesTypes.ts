// types/routes.ts

export type route = {
  name: string;
  path: string;
};

const routes: { [key: string]: route } = {
  home: {
    name: 'Home',
    path: '/',
  },
  courses: {
    name: 'Courses',
    path: '/courses',
  },
  courseDetail: {
    name: 'Course Detail',
    path: '/courses/[courseId]',
  },
  // ... add more routes as needed
};

export default routes;
