 
        function checkAnswers() {
            const a1 = document.getElementById("q1").value.trim().toLowerCase();
            const a2 = document.getElementById("q2").value.trim().toLowerCase();
            const a3 = document.getElementById("q3").value.trim().toLowerCase();
            const a4 = document.getElementById("q4").value.trim().toLowerCase();
            const a6 = document.getElementById("q6").value.trim().toLowerCase();
           let selectedOption5 = document.querySelector('input[name="q5"]:checked');
let a5 = selectedOption5 ? selectedOption5.value.toLowerCase() : '';

let selectedOption9 = document.querySelector('input[name="q9"]:checked');
let a9 = selectedOption9 ? selectedOption9.value.toLowerCase() : '';

let selectedOption8 = document.querySelector('input[name="q8"]:checked');
let a8 = selectedOption8 ? selectedOption8.value.toLowerCase() : '';


            const ans1 = "moon";
            const ans2 = "black";
            const ans3 = "cat";
            const ans4 = "daffer";
            const ans5 = "no";
            const ans6 = "august";
            const ans8 = "registers and capacitors";
            const ans9 = "rylics";

            if (a1 === ans1 && a2 === ans2 && a3 === ans3 && a4 === ans4 && a5 === ans5 && a6 === ans6 && a8 === ans8 && a9 === ans9) {
                document.getElementById("quizPage").style.display = "none";
                document.getElementById("finalPage").style.display = "block";
                launchConfetti();
const message = `Just like your name, you brighten the darkest nights and make life magical.On your special day, I just want to remind you how precious you are, dreams that always come true, and happiness that shines brighter than all the stars combined.I will always be there by your side. Keep glowing, keep smiling, and keep being the amazing YOU! 💖Cheers to another year of adventures, memories, and friendship!Love & Wishes – [Your Daffer]`;

let index = 0;
const speed = 35; // typing speed in ms

function typeWriter() {
    if (index < message.length) {
        document.getElementById("typed-message").innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();  

                playMusic();
                window.scrollTo(0,0);
            } else {
                document.getElementById("error").style.display = "block";
            }
        }

        function launchConfetti() {
            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = Math.random() * window.innerWidth + 'px';
                confetti.style.top = '-10px';
                confetti.style.backgroundColor = getRandomColor();
                confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                document.body.appendChild(confetti);
                setTimeout(() => confetti.remove(), 5000);
            }
        }

        function getRandomColor() {
            const colors = ['#00ffff', '#ffff66', '#66ff66', '#ff9966', '#ff66cc'];
            return colors[Math.floor(Math.random() * colors.length)];
        }

        function typeMessage(text) {
            const msgElem = document.getElementById("typedMessage");
            msgElem.textContent = "";
            let i = 0;
            function typing() {
                if (i < text.length) {
                    msgElem.textContent += text.charAt(i);
                    i++;
                    setTimeout(typing, 50);
                }
            }
            typing();
        }
        function playMusic() { const music = document.getElementById("bgMusic"); music.volume = 0.5; music.play().catch(()=>{}); }

        function toggleMute() { const music = document.getElementById("bgMusic"); const btn = document.getElementById("muteBtn"); music.muted = !music.muted; btn.textContent = music.muted ? "Unmute" : "Mute"; }
