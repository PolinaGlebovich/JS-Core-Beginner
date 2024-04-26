class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

const rectangle = new Rectangle(5, 3);
console.log("Площадь прямоугольника:", rectangle.getArea()); // Выведет: Площадь прямоугольника: 15
console.log("Периметр прямоугольника:", rectangle.getPerimeter()); // Выведет: Периметр прямоугольника: 16
