export type CourseAttributes = {
  Title: string;
  description: string;
  Duration: number;
  prerequisties: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type Course = {
  id: number;
  attributes: CourseAttributes;
};

export type PaginationMeta = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type CoursesResponse = {
  data: Course[];
  meta: PaginationMeta;
};

export type CourseCardProps = {
  course: Course;
};
