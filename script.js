// Questions organized by programming language
const questionsByLanguage = {
    java: {
        name: "Java",
        icon: "bxl-java",
        levels: {
            1: [
                { word: "CLASS", question: "What is a blueprint for creating objects in Java?", hint: "Contains methods and variables" },
                { word: "OBJECT", question: "What is an instance of a class?", hint: "Created using 'new' keyword" },
                { word: "METHOD", question: "What is a block of code that performs a specific task?", hint: "Also known as function" },
                { word: "STATIC", question: "What keyword makes a method belong to the class itself?", hint: "No instance needed" },
                { word: "STRING", question: "What class is used to represent text/characters?", hint: "Immutable in Java" }
            ],
            2: [
                { word: "INHERITANCE", question: "What OOP concept allows a class to inherit from another?", hint: "Uses 'extends' keyword" },
                { word: "INTERFACE", question: "What defines a contract that classes can implement?", hint: "Uses 'implements' keyword" },
                { word: "ARRAYLIST", question: "What resizable array implementation from java.util?", hint: "Dynamically grows" },
                { word: "OVERRIDE", question: "What annotation is used to redefine a parent method?", hint: "Starts with @" },
                { word: "CONSTRUCTOR", question: "What special method initializes an object?", hint: "Same name as class" }
            ],
            3: [
                { word: "EXCEPTION", question: "What handles runtime errors in Java?", hint: "try-catch-finally" },
                { word: "THREAD", question: "What allows concurrent execution of code?", hint: "Extends Thread or implements Runnable" },
                { word: "GENERICS", question: "What provides type safety for collections?", hint: "Uses angle brackets <>" },
                { word: "LAMBDA", question: "What functional programming feature was added in Java 8?", hint: "Arrow notation ->" },
                { word: "STREAMS", question: "What API processes collections functionally?", hint: "filter, map, reduce operations" }
            ],
            4: [
                { word: "REFLECTION", question: "What allows inspecting classes at runtime?", hint: "Class.forName()" },
                { word: "JVM", question: "What executes Java bytecode?", hint: "Java Virtual Machine" },
                { word: "SPRING", question: "What popular Java framework uses dependency injection?", hint: "Spring Boot" },
                { word: "MAVEN", question: "What is a build automation tool for Java?", hint: "Uses pom.xml" },
                { word: "HIBERNATE", question: "What is an ORM framework for Java?", hint: "Maps objects to database tables" }
            ]
        }
    },
    csharp: {
        name: "C#",
        icon: "bxl-c-sharp",
        levels: {
            1: [
                { word: "CLASS", question: "What is a blueprint for creating objects in C#?", hint: "Contains fields and methods" },
                { word: "OBJECT", question: "What is an instance of a class?", hint: "Created with 'new' keyword" },
                { word: "METHOD", question: "What is a block of code that performs an action?", hint: "Called to execute code" },
                { word: "STRING", question: "What data type is used for text?", hint: "System.String" },
                { word: "ARRAY", question: "What stores multiple values of the same type?", hint: "Uses square brackets []" }
            ],
            2: [
                { word: "PROPERTY", question: "What provides get and set accessors for encapsulation?", hint: "Has get and set" },
                { word: "INHERITANCE", question: "What allows a class to derive from another?", hint: "Uses colon :" },
                { word: "INTERFACE", question: "What defines a contract that classes implement?", hint: "Starts with I prefix" },
                { word: "OVERRIDE", question: "What keyword redefines a virtual method?", hint: "Used with virtual methods" },
                { word: "LIST", question: "What generic collection is dynamically sized?", hint: "List<T>" }
            ],
            3: [
                { word: "LINQ", question: "What provides query capabilities in C#?", hint: "Language Integrated Query" },
                { word: "DELEGATE", question: "What is a type-safe function pointer?", hint: "Similar to callback" },
                { word: "EVENT", question: "What enables publisher-subscriber pattern?", hint: "Uses 'event' keyword" },
                { word: "ASYNC", question: "What keyword enables asynchronous programming?", hint: "Works with await" },
                { word: "GENERICS", question: "What provides type-safe data structures?", hint: "Uses angle brackets <T>" }
            ],
            4: [
                { word: "ATTRIBUTE", question: "What adds metadata to code elements?", hint: "Uses square brackets []" },
                { word: "REFLECTION", question: "What inspects types at runtime?", hint: "System.Reflection" },
                { word: "UNITY", question: "What popular game engine uses C#?", hint: "Game development platform" },
                { word: "ENTITY", question: "What ORM framework for C#?", hint: "Entity Framework" },
                { word: "ASP", question: "What web framework for C#?", hint: "ASP.NET Core" }
            ]
        }
    },
    webdev: {
        name: "Web Dev",
        icon: "bx-code-alt",
        levels: {
            1: [
                { word: "HTML", question: "What language defines the structure of a webpage?", hint: "HyperText Markup Language" },
                { word: "CSS", question: "What language styles the appearance of web pages?", hint: "Cascading Style Sheets" },
                { word: "JAVASCRIPT", question: "What language adds interactivity to web pages?", hint: "Can manipulate the DOM" },
                { word: "DIV", question: "What HTML element is a generic container?", hint: "Used for grouping content" },
                { word: "CLASS", question: "What attribute groups multiple elements for CSS styling?", hint: "Can be reused" }
            ],
            2: [
                { word: "FLEXBOX", question: "What CSS layout model arranges items in rows or columns?", hint: "display: flex" },
                { word: "GRID", question: "What CSS layout system creates 2D layouts?", hint: "display: grid" },
                { word: "ARRAY", question: "What JavaScript data structure holds ordered items?", hint: "Uses square brackets []" },
                { word: "FUNCTION", question: "What JavaScript block of code performs a task?", hint: "Reusable code" },
                { word: "EVENT", question: "What JavaScript concept responds to user actions?", hint: "click, mouseover, etc." }
            ],
            3: [
                { word: "PROMISE", question: "What handles asynchronous operations in JavaScript?", hint: "then and catch" },
                { word: "ASYNC", question: "What keyword makes a function return a Promise?", hint: "Used with await" },
                { word: "FETCH", question: "What API is used for HTTP requests?", hint: "Modern AJAX replacement" },
                { word: "LOCALSTORAGE", question: "What stores data persistently in the browser?", hint: "Key-value storage" },
                { word: "RESPONSIVE", question: "What design approach makes sites work on all devices?", hint: "Uses media queries" }
            ],
            4: [
                { word: "REACT", question: "What popular frontend library is made by Facebook?", hint: "Component-based" },
                { word: "NODEJS", question: "What runtime allows JavaScript to run on servers?", hint: "Built on Chrome's V8" },
                { word: "MONGODB", question: "What NoSQL database uses JSON-like documents?", hint: "Popular with MERN stack" },
                { word: "EXPRESS", question: "What web framework for Node.js?", hint: "Minimal and flexible" },
                { word: "WEBPACK", question: "What is a module bundler for JavaScript?", hint: "Bundles assets" }
            ]
        }
    },
    python: {
        name: "Python",
        icon: "bxl-python",
        levels: {
            1: [
                { word: "PRINT", question: "What function is used to output text in Python?", hint: "Used to display things on screen" },
                { word: "INPUT", question: "What function is used to get user input?", hint: "Reads from keyboard" },
                { word: "STRING", question: "What data type is used for text?", hint: "Surrounded by quotes" },
                { word: "INTEGER", question: "What data type is used for whole numbers?", hint: "No decimal points" },
                { word: "FLOAT", question: "What data type is used for decimal numbers?", hint: "Has decimal point" }
            ],
            2: [
                { word: "LIST", question: "What data structure can hold multiple items in order?", hint: "Uses square brackets []" },
                { word: "DICTIONARY", question: "What stores key-value pairs?", hint: "Uses curly braces {}" },
                { word: "FUNCTION", question: "What do you call a reusable block of code?", hint: "Defined with 'def'" },
                { word: "LOOP", question: "What repeats a block of code multiple times?", hint: "for and while" },
                { word: "CONDITIONAL", question: "What statement executes code based on conditions?", hint: "if, elif, else" }
            ],
            3: [
                { word: "DECORATOR", question: "What modifies the behavior of a function?", hint: "Uses @ syntax" },
                { word: "GENERATOR", question: "What yields values one at a time?", hint: "Uses 'yield' keyword" },
                { word: "LAMBDA", question: "What is a small anonymous function?", hint: "One-line function" },
                { word: "INHERITANCE", question: "What allows a class to inherit from another?", hint: "OOP concept" },
                { word: "EXCEPTION", question: "What handles runtime errors?", hint: "try-except block" }
            ],
            4: [
                { word: "METACLASS", question: "What is a class of a class?", hint: "Creates classes" },
                { word: "ASYNC", question: "What keyword is used for asynchronous programming?", hint: "async/await" },
                { word: "CONTEXTMANAGER", question: "What manages resources with 'with' statement?", hint: "Handles setup/teardown" },
                { word: "MULTITHREADING", question: "What allows concurrent execution?", hint: "Threads" },
                { word: "PACKAGE", question: "What organizes modules into directories?", hint: "Requires __init__.py" }
            ]
        }
    }
};

// Game state
let currentLanguage = "java";
let currentLevel = 1;
let currentQuestionIndex = 0;
let currentWord = '';
let currentQuestion = '';
let currentHint = '';
let guessedLetters = [];
let health = 6;
let perfectCount = 0;
let streakCount = 0;
let maxStreak = 0;
let totalPoints = 0;
let gameActive = true;
let levelQuestions = [];

const maxHealth = 6;
const levelNames = { 1: "Easy", 2: "Medium", 3: "Hard", 4: "Expert" };
const levelPoints = { 1: 1, 2: 2, 3: 3, 4: 4 };

// DOM Elements
const languageScreen = document.getElementById('languageScreen');
const levelScreen = document.getElementById('levelScreen');
const gameScreen = document.getElementById('gameScreen');
const wellDoneModal = document.getElementById('wellDoneModal');
const gameOverModal = document.getElementById('gameOverModal');

// Game Screen Elements
const levelIndicatorBtn = document.getElementById('levelIndicatorBtn');
const totalPointsEl = document.getElementById('totalPoints');
const perfectCountEl = document.getElementById('perfectCount');
const streakCountEl = document.getElementById('streakCount');
const maxStreakEl = document.getElementById('maxStreak');
const wordDisplay = document.getElementById('wordDisplay');
const questionEl = document.getElementById('question');
const hintEl = document.getElementById('hint');
const keyboardDiv = document.getElementById('keyboard');
const scoreAnimation = document.getElementById('scoreAnimation');
const healthCountSpan = document.getElementById('healthCount');
const heartMultiplierDiv = document.querySelector('.heart-multiplier');

// Modal Elements
const modalPointsEarned = document.getElementById('modalPointsEarned');
const modalTotalPoints = document.getElementById('modalTotalPoints');
const modalPerfect = document.getElementById('modalPerfect');
const modalStreak = document.getElementById('modalStreak');
const modalMaxStreak = document.getElementById('modalMaxStreak');
const gameOverWord = document.getElementById('gameOverWord');
const gameOverTotalPoints = document.getElementById('gameOverTotalPoints');

const hangmanParts = {
    head: document.getElementById('head'),
    body: document.getElementById('body'),
    leftArm: document.getElementById('leftArm'),
    rightArm: document.getElementById('rightArm'),
    leftLeg: document.getElementById('leftLeg'),
    rightLeg: document.getElementById('rightLeg')
};

// ========== HEALTH FUNCTIONS ==========
function updateHealthDisplay() {
    healthCountSpan.textContent = health;
}

function animateHealthLoss() {
    heartMultiplierDiv.classList.add('lose');
    setTimeout(() => {
        heartMultiplierDiv.classList.remove('lose');
    }, 300);
}

// ========== SCREEN NAVIGATION ==========

// Language -> Level
document.querySelectorAll('.lang-card').forEach(card => {
    card.addEventListener('click', () => {
        currentLanguage = card.dataset.lang;
        const langData = questionsByLanguage[currentLanguage];
        
        document.getElementById('selectedLangIconLevel').className = `bx ${langData.icon}`;
        document.getElementById('selectedLangNameLevel').textContent = langData.name;
        
        languageScreen.style.display = 'none';
        levelScreen.style.display = 'flex';
    });
});

// Level -> Game
document.querySelectorAll('.level-card').forEach(card => {
    card.addEventListener('click', () => {
        currentLevel = parseInt(card.dataset.level);
        levelIndicatorBtn.textContent = `Level ${currentLevel} - ${levelNames[currentLevel]}`;
        levelScreen.style.display = 'none';
        gameScreen.style.display = 'flex';
        initGame();
    });
});

// Back button from level screen to language screen
document.getElementById('backToLangBtn').addEventListener('click', () => {
    levelScreen.style.display = 'none';
    languageScreen.style.display = 'flex';
});

// Level Indicator Button - pag clinick, babalik sa level selection (ITO ANG PUMAPALIT SA BACK BUTTON)
levelIndicatorBtn.addEventListener('click', () => {
    gameScreen.style.display = 'none';
    levelScreen.style.display = 'flex';
    resetGameState();
});

// ========== GAME FUNCTIONS ==========

function initGame() {
    const langData = questionsByLanguage[currentLanguage];
    levelQuestions = langData.levels[currentLevel];
    currentQuestionIndex = 0;
    perfectCount = 0;
    streakCount = 0;
    maxStreak = 0;
    totalPoints = 0;
    health = 6;
    gameActive = true;
    updateStatsDisplay();
    updateHealthDisplay();
    loadQuestion();
    createKeyboard();
    resetHangman();
}

function loadQuestion() {
    if (currentQuestionIndex < levelQuestions.length) {
        const q = levelQuestions[currentQuestionIndex];
        currentWord = q.word.toUpperCase();
        currentQuestion = q.question;
        currentHint = q.hint;
        guessedLetters = [];
        health = 6;
        gameActive = true;
        
        questionEl.textContent = currentQuestion;
        hintEl.textContent = `💡 Hint: ${currentHint}`;
        updateWordDisplay();
        updateHealthDisplay();
        resetHangman();
        
        document.querySelectorAll('.key').forEach(btn => {
            btn.classList.remove('correct', 'wrong');
            btn.disabled = false;
        });
        
        enableKeyboard(true);
    } else {
        // Level completed - go back to level selection
        gameScreen.style.display = 'none';
        levelScreen.style.display = 'flex';
        resetGameState();
    }
}

function updateWordDisplay() {
    let display = '';
    for (let letter of currentWord) {
        if (guessedLetters.includes(letter)) {
            display += letter + ' ';
        } else {
            display += '_ ';
        }
    }
    wordDisplay.textContent = display.trim();
}

function checkWin() {
    return currentWord.split('').every(letter => guessedLetters.includes(letter));
}

function checkLoss() {
    return health <= 0;
}

function showScoreAnimation() {
    if (scoreAnimation) {
        scoreAnimation.classList.add('show');
        setTimeout(() => {
            scoreAnimation.classList.remove('show');
        }, 1000);
    }
}

function updateStatsDisplay() {
    totalPointsEl.textContent = totalPoints;
    perfectCountEl.textContent = perfectCount;
    streakCountEl.textContent = streakCount;
    maxStreakEl.textContent = maxStreak;
}

function nextQuestion() {
    wellDoneModal.style.display = 'none';
    currentQuestionIndex++;
    loadQuestion();
    enableKeyboard(true);
}

function handleGuess(letter) {
    if (!gameActive || guessedLetters.includes(letter)) return;

    guessedLetters.push(letter);
    const button = document.querySelector(`[data-letter="${letter}"]`);
    
    if (currentWord.includes(letter)) {
        button.classList.add('correct');
        updateWordDisplay();
        
        if (checkWin()) {
            const pointsEarned = levelPoints[currentLevel];
            totalPoints += pointsEarned;
            perfectCount++;
            streakCount++;
            if (streakCount > maxStreak) maxStreak = streakCount;
            updateStatsDisplay();
            showScoreAnimation();
            enableKeyboard(false);
            
            modalPointsEarned.textContent = pointsEarned;
            modalTotalPoints.textContent = totalPoints;
            modalPerfect.textContent = perfectCount;
            modalStreak.textContent = streakCount;
            modalMaxStreak.textContent = maxStreak;
            
            wellDoneModal.style.display = 'flex';
        }
    } else {
        button.classList.add('wrong');
        health--;
        streakCount = 0;
        updateStatsDisplay();
        updateHealthDisplay();
        animateHealthLoss();
        updateHangman();
        
        if (checkLoss()) {
            gameActive = false;
            gameOverWord.textContent = currentWord;
            gameOverTotalPoints.textContent = totalPoints;
            gameOverModal.style.display = 'flex';
            enableKeyboard(false);
        }
    }
    button.disabled = true;
}

function updateHangman() {
    const parts = ['head', 'body', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg'];
    const wrongCount = maxHealth - health;
    for (let i = 0; i < wrongCount; i++) {
        if (i < parts.length && hangmanParts[parts[i]]) {
            hangmanParts[parts[i]].style.display = 'block';
        }
    }
}

function resetHangman() {
    Object.values(hangmanParts).forEach(part => {
        if (part) part.style.display = 'none';
    });
}

function createKeyboard() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    keyboardDiv.innerHTML = '';
    letters.forEach(letter => {
        const button = document.createElement('button');
        button.className = 'key';
        button.textContent = letter;
        button.dataset.letter = letter;
        button.addEventListener('click', () => handleGuess(letter));
        keyboardDiv.appendChild(button);
    });
}

function enableKeyboard(enable) {
    document.querySelectorAll('.key').forEach(button => {
        button.disabled = !enable;
    });
}

function resetGameState() {
    currentQuestionIndex = 0;
    perfectCount = 0;
    streakCount = 0;
    maxStreak = 0;
    totalPoints = 0;
    health = 6;
    gameActive = true;
}

// Modal button event listeners
document.getElementById('nextWordBtn').onclick = function() {
    nextQuestion();
};

document.getElementById('gameOverRetryBtn').onclick = function() {
    gameOverModal.style.display = 'none';
    initGame();
};