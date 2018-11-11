export const listStudents = () => {
    return [
        {
            firstName: 'Tamara ',
            lastName: 'Gjorgieva',
            index: '163004',
            studyProgram: 'Networking Technologies'
        },
        {
            firstName: 'Pero',
            lastName: 'Perovski',
            index: '113051',
            studyProgram: 'Networking Technologies'
        },
        {
            firstName: 'Ana',
            lastName: 'Aneva',
            index: '111111',
            studyProgram: 'Networking Technologies'
        },
        {
            firstName: 'Marija',
            lastName: 'Petrovska',
            index: '160001',
            studyProgram: 'Computer Sciences and Engineering'
        },
        {
            firstName: 'Sara',
            lastName: 'Stefanovska',
            index: '160095',
            studyProgram: 'Application of Information Technologies'
        },
        {
            firstName: 'Nikola',
            lastName: 'Nikolovski',
            index: '121212',
            studyProgram: 'Networking Technologies'
        }
    ];
};

export const cloneStudents = (state,index,student) => {
    const newStudentsArrayRef = [
        ...state.students
    ];

    newStudentsArrayRef[index] = student;
    return newStudentsArrayRef;
}