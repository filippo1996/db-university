export default [
    {
        request : 'Selezionare tutti gli studenti nati nel 1990 (160)',
        reply : '<span class="keyword-db">SELECT</span> * <span class="keyword-db">FROM</span> db_university.students <br><span class="keyword-db">WHERE YEAR</span>(<span class="column-db">`date_of_birth`</span>) = <span class="int-db">1990</span>;'
    },
    {
        request : 'Selezionare tutti i corsi che valgono più di 10 crediti (479)',
        reply : '<span class="keyword-db">SELECT</span> * <span class="keyword-db">FROM</span> db_university.courses <br><span class="keyword-db">WHERE</span> <span class="column-db">`cfu`</span> > <span class="int-db">10</span>;'
    },
    {
        request : 'Selezionare tutti gli studenti che hanno più di 30 anni',
        reply : '<span class="keyword-db">SELECT</span> * <span class="keyword-db">FROM</span> db_university.students <br><span class="keyword-db">WHERE YEAR</span>(<span class="func-db">NOW()</span>) - <span class="keyword-db">YEAR</span>(<span class="column-db">`date_of_birth`</span>) > <span class="int-db">30</span>;'
    },
    {
        request : 'Selezionare tutti i corsi del primo semestre del primo anno di un qualsiasi corso di laurea (286)',
        reply : '<span class="keyword-db">SELECT</span> * <span class="keyword-db">FROM</span> db_university.courses <br><span class="keyword-db">WHERE</span> <span class="column-db">`period`</span> = <span class="str-db">\'I semestre\'</span> <br><span class="keyword-db">AND</span> <span class="column-db">`year`</span> = <span class="int-db">1</span>;'
    },
    {
        request : 'Selezionare tutti gli appelli d\'esame che avvengono nel pomeriggio (dopo le 14) del 20/06/2020 (21)',
        reply : '<span class="keyword-db">SELECT</span> * <span class="keyword-db">FROM</span> db_university.exams <br><span class="keyword-db">WHERE</span> <span class="column-db">`date`</span> = <span class="str-db">\'2020-06-20\'</span> <br><span class="keyword-db">AND</span> <span class="column-db">`hour`</span> > <span class="str-db">\'14:00:00\'</span>;'
    },
    {
        request : 'Selezionare tutti i corsi di laurea magistrale (38)',
        reply : '<span class="keyword-db">SELECT</span> * <span class="keyword-db">FROM</span> db_university.degrees <br><span class="keyword-db">WHERE</span> <span class="column-db">`level`</span> = <span class="str-db">\'magistrale\'</span>;'
    },
    {
        request : 'Da quanti dipartimenti è composta l\'università? (12)',
        reply : '<span class="keyword-db">SELECT</span> <span class="func-db">COUNT</span>(<span class="column-db">`id`</span>) <span class="keyword-db">FROM</span> db_university.departments;'
    },
    {
        request : 'Quanti sono gli insegnanti che non hanno un numero di telefono? (50)',
        reply : '<span class="keyword-db">SELECT</span> <span class="func-db">COUNT</span>(<span class="column-db">`id`</span>) <span class="keyword-db">FROM</span> db_university.teachers <br><span class="keyword-db">WHERE</span> <span class="column-db">`phone`</span> <span class="keyword-db">IS NULL</span>;'
    }
];