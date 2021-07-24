// Random Generator of jokes
// Everytime runs, randomize output
// Combine components to display final message.

const NINJA_NAMES_FRAGMENTS = {
    A: 'ka',
    B: 'zu',
    C: 'mi',
    D: 'te',
    E: 'ku',
    F: 'lu',
    G: 'ji',
    H: 'ri',
    I: 'ki',
    J: 'zu',
    K: 'me',
    L: 'ta',
    M: 'rin',
    N: 'to',
    O: 'mo',
    P: 'no',
    Q: 'ke',
    R: 'shi',
    S: 'ari',
    T: 'chi',
    U: 'do',
    V: 'ru',
    W: 'mei',
    X: 'na',
    Y: 'fu',
    Z: 'zi'
};

function randomKey() {
    // 65 = A, 90 = Z
    let random = Math.floor(Math.random() * 26 + 65); // Returns a random key between 'A' & 'Z'.
    return String.fromCharCode(random);
};

function randomizeNinjaName() {
    let random = NINJA_NAMES_FRAGMENTS[randomKey()];
    let random_2 = NINJA_NAMES_FRAGMENTS[randomKey()];
    let random_3 = NINJA_NAMES_FRAGMENTS[randomKey()];

    return `Your new ninja name is: ${random}${random_2}${random_3}`;
};