const partyGuset = { //속성, 메서드들의 집합체 = 객체
    name: 'Birthday party',
    guestList: ['sean', 'Taehoon', 'Hyeon woo'],
    printGuestList(){
        console.log('Guset list for' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending' + this.name)
        })
    }
};

partyGuset.printGuestList();

// console.log(안녕하세요 저희 수강생은 name 입니다.)

const likelion = { //속성, 메서드들의 집합체 = 객체
    name: '입니다',
    studentList: ['sean', 'Taehoon', 'Hyeon woo'],
    printStudentList(){
        console.log('Like lion 수강생 리스트' + this.name)

        this.studentList.forEach((student) => {
            console.log('안녕하세요 저희 수강생은 ' + student + this.name)
        })
    }
};
g
likelion.printStudentList();

const classList = {
    name: ['sungrak', 'jongrak', 'wally', 'JH'],
    callName(){
        this.name.forEach((x) => {
            console.log('안녕하세요 저희 수강생은 ' + x + '입니다');
        })
    }
}
classList.callName();