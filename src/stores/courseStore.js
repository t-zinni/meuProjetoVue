import { defineStore } from 'pinia';

export const useCourseStore = defineStore('courseStore', {
  state: () => ({
    courses: [
      { id: 'sports', name: 'Sports' },
      { id: 'science', name: 'Science' },
      { id: 'history', name: 'History' }
    ],
    selectedCourse: ''
  }),
  actions: {
    setSelectedCourse(courseId) {
      this.selectedCourse = courseId;
    }
  }
});
