function BaseEntity(name) {
  this.name = name;
}

BaseEntity.prototype.getName = function () {
  return this.name;
};

function Course(name) {
  BaseEntity.call(this, name);
  this.students = [];
}


Course.prototype = Object.create(BaseEntity.prototype);
Course.prototype.constructor = Course;

Course.prototype.addStudent = function (student) {
  this.students.push(student);
};
function Teacher(name) {
  BaseEntity.call(this, name);
  this.courses = [];
}

Teacher.prototype = Object.create(BaseEntity.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.addCourse = function (course) {
  this.courses.push(course);
};
function Student(name) {
  BaseEntity.call(this, name);
  this.courses = [];
}

Student.prototype = Object.create(BaseEntity.prototype);
Student.prototype.constructor = Student;

Student.prototype.addCourse = function (course) {
  this.courses.push(course);
};

Student.prototype.viewCourses = function () {
  console.log(`Курси студента ${this.name}:`);
  this.courses.forEach(course => {
    console.log("- " + course.getName());
  });
};
const teacher = new Teacher("Дмитро Мороз");
const student1 = new Student("Софія");
const student2 = new Student("Софія");

const course1 = new Course("Веб-програмування");
const course2 = new Course("JavaScript");

teacher.addCourse(course1);
teacher.addCourse(course2);

course1.addStudent(student1);
course1.addStudent(student2);

student1.addCourse(course1);
student2.addCourse(course1);
student2.addCourse(course2);

// перегляд курсів студентів
student1.viewCourses();
student2.viewCourses();
