const flashcards = [
    { q: "What is the difference between var, let, and const?", a: "var is function-scoped, while let and const are block-scoped..." },
    { q: "What is a Closure in JS?", a: "A closure gives you access to an outer function's scope from an inner function." },
    { q: "What is the DOM?", a: "Document Object Model, an interface that treats HTML as a tree structure." }
];

let currentIndex = 0;
let isFlipped = false;

const cardContent = document.getElementById('card-content');
const toggleBtn = document.getElementById('toggle-btn');
const progressFill = document.getElementById('progress-fill');
const progressPercent = document.getElementById('progress-percent');
const cardCounter = document.getElementById('card-counter');

function render() {
    const current = flashcards[currentIndex];
    
    // 1. Cập nhật nội dung chữ
    cardContent.innerText = isFlipped ? current.a : current.q;
    toggleBtn.innerText = isFlipped ? "Hide Answer" : "Show Answer";
    
    // 2. Cập nhật tiến độ
    const total = flashcards.length;
    const percent = Math.round(((currentIndex + 1) / total) * 100);
    
    progressFill.style.width = `${percent}%`;
    progressPercent.innerText = `${percent}%`;
    cardCounter.innerText = `${currentIndex + 1} of ${total}`;
}

// Gắn sự kiện
document.getElementById('next-btn').onclick = () => {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        isFlipped = false;
        render();
    }
};

document.getElementById('prev-btn').onclick = () => {
    if (currentIndex > 0) {
        currentIndex--;
        isFlipped = false;
        render();
    }
};

toggleBtn.onclick = () => {
    isFlipped = !isFlipped;
    render();
};

// Chạy lần đầu
render();