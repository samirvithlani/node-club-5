mongo
db.employees.insertMany([
    { 
        _id:1,
        firstName: "John",
        lastName: "King",
        gender:'male',
        email: "john.king@abc.com",
        salary: 5000,
        department: { 
                    "name":"HR" 
                }
    },
    { 
        _id:2,
        firstName: "Sachin",
        lastName: "T",
        gender:'male',
        email: "sachin.t@abc.com",
        salary: 8000,
        department: { 
                    "name":"Finance" 
                }
    },
    { 
        _id:3,
        firstName: "James",
        lastName: "Bond",
        gender:'male',
        email: "jamesb@abc.com",
        salary: 7500,
        department: { 
                    "name":"Marketing" 
                }
    },
    { 
        _id:4,
        firstName: "Rosy",
        lastName: "Brown",
        gender:'female',
        email: "rosyb@abc.com",
        salary: 5000, 
        department: { 
                    "name":"HR" 
                }

    },
    { 
        _id:5,
        firstName: "Kapil",
        lastName: "D",
        gender:'male',
        email: "kapil.d@abc.com",
        salary: 4500,
        department: { 
                    "name":"Finance" 
                }

    },
    { 
        _id:6,
        firstName: "Amitabh",
        lastName: "B",
        gender:'male',
        email: "amitabh.b@abc.com",
        salary: 7000,
        department: { 
                    "name":"Marketing" 
                }
    }
])


1)sort by salary
2)sort by salary in descending order
3)sort by department name
4)sort by department name in descending order
5)sort by salary and department name
6)sort by salary in descending order and department name in descending order
7)sort by salary in descending order and department name in ascending order
8)sort by salary in ascending order and department name in descending order
9)sort by salary in ascending order and department name in ascending order

match:
1)find all employees whose salary is greater than 5000
2)find all employees whose salary is greater than 5000 and department name is HR
3)find all employees whose salary is greater than 5000 and department name is HR or Finance

group:
1)find total salary of all employees
2)find total salary of all employees in HR department
3)find total salary of all employees in HR and Finance department
4)find total salary of all employees in HR and Finance department and sort by salary in descending order
5)find total salary of all employees in HR and Finance department and sort by salary in ascending order

sort:
1)find all employees and sort by salary in descending order
2)find all employees and sort by salary in ascending order

match sort group:
1)find all employees whose salary is greater than 5000 and sort by salary in descending order
2)find all employees whose salary is greater than 5000 and sort by salary in ascending order
3)find all employees whose salary is greater than 5000 and sort by salary in descending order and group by department name
4)find all employees whose salary is greater than 5000 and sort by salary in ascending order and group by department name
5)find all employees whose salary is greater than 5000 and sort by salary in descending order and group by department name and sort by total salary in descending order
6)find all employees whose salary is greater than 5000 and sort by salary in ascending order and group by department name and sort by total salary in ascending order
7)find all employees whose salary is greater than 5000 and sort by salary in descending order and group by department name and sort by total salary in ascending order
8)find all employees whose salary is greater than 5000 and sort by salary in ascending order and group by department name and sort by total salary in descending order
