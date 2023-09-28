function censor() {
    const pairs = [];

    return function (str, replacement) {
        if (str && replacement) {
            pairs.push([str, replacement]);
        } else if (str) {
            pairs.forEach(pair => {
                str = str.replace(pair[0], pair[1]);
            });
            return str;
        }
    };
}

const changeScene = censor();

changeScene("PHP", "JS");
changeScene("backend", "frontend");

console.log(changeScene("PHP in backend"));