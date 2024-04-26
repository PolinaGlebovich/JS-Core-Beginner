// С использованием var
function testVar() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x); // 20
    }
    console.log(x); // 20
}

testVar();
console.log(x); // ReferenceError: x is not defined

// С использованием let
function testLet() {
    let x = 10;
    if (true) {
        let x = 20;
        console.log(x); // 20
    }
    console.log(x); // 10
}

testLet();
console.log(x); // ReferenceError: x is not defined

// С использованием const
function testConst() {
    const x = 10;
    if (true) {
        const x = 20;
        console.log(x); // 20
    }
    console.log(x); // 10
}

testConst();
console.log(x); // ReferenceError: x is not defined