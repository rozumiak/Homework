function Student(name, surname, birthday) {
    this.name = name;
    this.surname = surname;
    this.birthday = birthday;
    this.marks = [];
    this.attendance = [];


    this.getAge = function () {
        let dateNow = new Date();
        let birthDate = new Date(birthday);
        let age = dateNow.getFullYear() - birthDate.getFullYear();
        let month = dateNow.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && dateNow.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    this.getAvgMarks = function () {
        let sumMark = 0;
        this.marks.forEach(mark => {
            sumMark += mark;
        })
        return sumMark / this.marks.length;
    }

    this.summary = function () {
        let avgMarks = this.getAvgMarks();
        let attendance = 0;
        this.attendance.forEach(item => {
            item === true ? attendance += 1 : attendance += 0
        })
        let avgAttendance = attendance / this.attendance.length;

        if (avgMarks >= 90 && (avgAttendance) >= 0.9) {
            return "Молодець";
        } else if (avgMarks < 90 && (avgAttendance) < 0.9) {
            return "Редиска";
        } else if (avgMarks < 90 || (avgAttendance) < 0.9) {
            return "Добре, але можна краще";
        }
    }

    this.present = function () {
        if (this.attendance.length === 25) {
            return this.attendance;
        }
        return this.attendance.push(true);
    }

    this.absent = function () {
        if (this.attendance.length === 25) {
            return this.attendance;
        }
        return this.attendance.push(false);
    }
}

const student = new Student("Bogdan", "Rozumiak", "1999,11");
const student1 = new Student("John", "Watson", "1995,06");
const student2 = new Student("Sherlock", "Holmes", "1992,08");

student.marks = [100, 90, 100, 70];
student1.marks = [95, 90, 90, 90];
student2.marks = [60, 60, 60, 90];

student.present();
student.present();
student.present();

student1.absent();
student1.absent();
student1.absent();

student2.absent();
student2.present();
student2.present();

console.log(`${student.name} Ваш вік`, student.getAge());
console.log("Середня оцінка", student.getAvgMarks());
console.log(student.summary());

console.log(`${student1.name} Ваш вік`, student1.getAge());
console.log("Середня оцінка", student1.getAvgMarks());
console.log(student1.summary());

console.log(`${student2.name} Ваш вік`, student2.getAge());
console.log("Середня оцінка", student2.getAvgMarks());
console.log(student2.summary());