
function displayPatterns(rows) {
    let alphabet = 64;

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= rows - i; j++) {
            process.stdout.write("   ");
        }
        for (let k = 1; k <= 2 * i - 1; k += 2) {
            process.stdout.write(k + " ");
        }
        for (let l = 1; l <= i; l++) {
            process.stdout.write(String.fromCharCode(alphabet + l) + " ");
        }
        console.log();
    }

    for (let i = rows - 1; i > 0; i--) {

        for (let j = 1; j <= rows - i; j++) {
            process.stdout.write("   ");
        }

        for (let k = 1; k <= 2 * i - 1; k += 2) {
            process.stdout.write(k + " ");
        }

        for (let l = 1; l <= i; l++) {
            process.stdout.write(String.fromCharCode(alphabet + l) + " ");
        }
        console.log();
    }
}

displayPatterns(4);

