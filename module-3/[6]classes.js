class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    calculateAnnualSalary() {
        const baseSalary = super.calculateAnnualSalary();
        const bonus = 0.1 * baseSalary; // Бонус для менеджеров
        return baseSalary + bonus;
    }
}

const manager1 = new Manager("Анна", 50000, "Отдел продаж");
const manager2 = new Manager("Петр", 60000, "Отдел маркетинга");

console.log("Годовая зарплата менеджера 1:", manager1.calculateAnnualSalary()); // Выведет годовую зарплату менеджера 1
console.log("Годовая зарплата менеджера 2:", manager2.calculateAnnualSalary()); // Выведет годовую зарплату менеджера 2
