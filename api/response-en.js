export default [
    {
        request : 'Select all students born in 1990 (160)',
        reply : '<span class="keyword-db">SELECT</span> * <span class="keyword-db">FROM</span> db_university.students <br><span class="keyword-db">WHERE YEAR</span>(<span class="column-db">`date_of_birth`</span>) = <span class="int-db">1990</span>;'
    },
    {
        request : 'Select all students born in 1990 (479)',
        reply : '<span class="keyword-db">SELECT</span> * <span class="keyword-db">FROM</span> db_university.courses <br><span class="keyword-db">WHERE</span> <span class="column-db">`cfu`</span> > <span class="int-db">10</span>;'
    },
    {
        request : 'Select all students who are over 30 years old',
        reply : '<span class="keyword-db">SELECT</span> * <span class="keyword-db">FROM</span> db_university.students <br><span class="keyword-db">WHERE YEAR</span>(<span class="func-db">NOW()</span>) - <span class="keyword-db">YEAR</span>(<span class="column-db">`date_of_birth`</span>) > <span class="int-db">30</span>;'
    },
    {
        request : 'Select all the courses of the first semester of the first year of any degree course (286)',
        reply : '<span class="keyword-db">SELECT</span> * <span class="keyword-db">FROM</span> db_university.courses <br><span class="keyword-db">WHERE</span> <span class="column-db">`period`</span> = <span class="str-db">\'I semestre\'</span> <br><span class="keyword-db">AND</span> <span class="column-db">`year`</span> = <span class="int-db">1</span>;'
    },
    {
        request : 'Select all the exam sessions that take place in the afternoon (after 2 pm) of 20/06/2020 (21)',
        reply : '<span class="keyword-db">SELECT</span> * <span class="keyword-db">FROM</span> db_university.exams <br><span class="keyword-db">WHERE</span> <span class="column-db">`date`</span> = <span class="str-db">\'2020-06-20\'</span> <br><span class="keyword-db">AND</span> <span class="column-db">`hour`</span> > <span class="str-db">\'14:00:00\'</span>;'
    },
    {
        request : 'Select all master\'s degree courses (38)',
        reply : '<span class="keyword-db">SELECT</span> * <span class="keyword-db">FROM</span> db_university.degrees <br><span class="keyword-db">WHERE</span> <span class="column-db">`level`</span> = <span class="str-db">\'magistrale\'</span>;'
    },
    {
        request : 'Dhow many departments does the university comprise? (12)',
        reply : '<span class="keyword-db">SELECT</span> <span class="func-db">COUNT</span>(<span class="column-db">`id`</span>) <span class="keyword-db">FROM</span> db_university.departments;'
    },
    {
        request : 'How many teachers are there who don\'t have a phone number? (50)',
        reply : '<span class="keyword-db">SELECT</span> <span class="func-db">COUNT</span>(<span class="column-db">`id`</span>) <span class="keyword-db">FROM</span> db_university.teachers <br><span class="keyword-db">WHERE</span> <span class="column-db">`phone`</span> <span class="keyword-db">IS NULL</span>;'
    }
];