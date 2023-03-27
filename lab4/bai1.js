class Student {
    constructor(id, firstName, lastName, classId, email, phoneNumber, dob) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.classId = classId;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.dob = dob;
    }
  
    getFullName() {
      return this.firstName + " " + this.lastName;
    }
  
    getTinhTuoiTheoNam() {
      const dob = new Date(this.dob);
      const today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      const diffMonths = today.getMonth() - dob.getMonth();
      if (
        diffMonths < 0 ||
        (diffMonths === 0 && today.getDate() < dob.getDate())
      ) {
        age--;
      }
      return age;
    }
  
    getTinhTuoiTheoNgay() {
      const dob = new Date(this.dob);
      const today = new Date();
      const diffTime = Math.abs(today - dob);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
  }
  
  const students = [
    new Student(
      1,
      "Phạm",
      "Tuấn",
      1,
      "phamtuan@gmail.com",
      "0123456789",
      "1990-11-21"
    ),
    new Student(
      2,
      "Nguyễn",
      "Đạt",
      1,
      "nguyendat@gmail.com",
      "0123456789",
      "1999-05-21"
    ),
    new Student(3, "Bùi", "Anh", 1, "buikimanh@gmail.com", "0123456789", "1994-06-17"),
    new Student(
      4,
      "Võ",
      "Đại",
      1,
      "vodai@gmail.com",
      "0123456789",
      "1988-08-06"
    ),
    new Student(
      5,
      "Biện",
      "Tiến",
      1,
      "bientien @gmail.com",
      "0123456789",
      "1991-12-30"
    ),
  ];
  
  students.sort((a, b) => a.getTinhTuoiTheoNgay() - b.getTinhTuoiTheoNgay());
  
  console.log(
    "Danh sách sinh viên theo thứ tự sinh viên có số tuổi từ thấp đến cao:"
  );
  students.forEach((student) => {
    console.log(
      `${student.getFullName()} (${student.getTinhTuoiTheoNgay()} ngày tuổi)`
    );
  });
  
  console.log(
    `Thông tin chiều rộng và chiều cao của màn hình: ${window.innerWidth} x ${window.innerHeight}`
  );