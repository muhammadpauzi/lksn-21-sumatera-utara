// elements
const gameIntroduction = document.querySelector('.game-introduction');
const pause = document.querySelector('.pause');
const buttonContinue = document.getElementById('buttonContinue');
const buttonRestart = document.getElementById('buttonRestart');
const buttonPlay = document.getElementById('buttonPlay');
const songSelect = document.getElementById('songSelect');
const countdown = document.querySelector('.countdown');
const countdownValue = countdown.querySelector('.countdown-value');
const timeValue = document.querySelector('.time-value');
const scoreValue = document.querySelector('.score-value');
const buttonQuit = document.getElementById('buttonQuit');
const buttonChooseSong = document.getElementById('buttonChooseSong');

let songName = '';
let startTime = 3;
let currentScore = 0;
let isPaused = false;

buttonPlay.addEventListener('click', function () {
    songName = songSelect.value;

    // run countdown    
    runCountdown();

    // hide game introduction
    gameIntroduction.style.display = 'none';
});

function play() {
    // run all function
    setKeys();
    playMusic(songName);
    setHitPiano(songName);
    runTimer();

    const elementsWithEventClick = [
        [buttonChooseSong, showConfirm],
        [buttonQuit, showConfirm],
        [buttonRestart, showConfirm],
        [buttonContinue, showPause],
    ]
    elementsWithEventClick.map(element => element[0].addEventListener('click', element[1]));
    document.addEventListener('keydown', function (e) {
        if (e.code == "Escape") {
            showPause();
        }
    });

    function showPause() {
        isPaused = !isPaused;
        // show or hide pause popup
        pause.style.display = pause.style.display == 'grid' ? 'none' : 'grid';
    }

    function showConfirm() {
        confirm("Are you sure to restart the game?") && window.location.reload();
    }
}

function runCountdown() {
    // show countdown element
    countdown.style.display = 'grid';
    countdownValue.textContent = startTime;

    // start countdown
    const interval = setInterval(() => {
        countdownValue.textContent = parseInt(countdownValue.textContent) - 1;

        if (countdownValue.textContent == 0) {
            countdown.style.display = 'none';
            play();
            clearInterval(interval);
        }
    }, 1000);
}

function runTimer() {
    let second = 0;

    // update second
    setInterval(() => {
        if (!isPaused) {
            second += 1;
        }
    }, 1000);

    // update milisecond and show second
    setInterval(() => {
        if (!isPaused) {
            timeValue.textContent = `${second}:${new Date().getMilliseconds().toString().substr(0, 2)}`;
        }
    }, 10);
}

function setKeys() {
    const keys = document.querySelectorAll('.main-board-piano .key');
    document.addEventListener('keydown', function (e) {
        const code = e.code;

        keys.forEach(key => {
            if (key.dataset.key == code) {
                // show highlight
                key.previousElementSibling.style.display = 'block';
            }
        })

        // remove highlight/active on key of piano
        document.addEventListener('keyup', function (e) {
            const code = e.code;

            keys.forEach(key => {
                if (key.dataset.key == code) {
                    key.previousElementSibling.style.display = 'none';
                }
            })
        });
    });
}

function playMusic(songName = '') {
    const music = new Audio(`./songs/${songName}/music.mp3`);
    music.addEventListener("loadedmetadata", function () {
        // if music is end
        setTimeout(() => {
            finish();
        }, music.duration * 1000);
    });
    if (isPaused) {
        music.pause();
    }
    music.play();
    // music.loop = true;  
    // music.playbackRate = 2;
}

async function setHitPiano(songName = '') {
    const lineGroups = document.querySelectorAll('.lines-group .line-group');
    // Get map.json of music
    const res = await fetch(`./songs/${songName}/map.json`);
    const { hitObjects } = await res.json();

    hitObjects.map((hitObject, i) => {
        setTimeout(() => {
            if (!isPaused) {
                const hitPiano = document.createElement('span');
                hitPiano.setAttribute('class', 'hit-piano');
                // hitPiano.style.height = hitObject.length + 'px';
                lineGroups.forEach(lineGroup => {
                    if (lineGroup.dataset.line == hitObject.position) {
                        lineGroup.appendChild(hitPiano);
                        setTimeout(() => {
                            hitPiano.remove();
                        }, hitObjects[i].hitAt);
                    }
                });
            }
        }, hitObject.hitAt);
    })
}

function finish() {
    const status = currentScore <= 50 ? 'Lose' : 'Win';
    localStorage.setItem('high_score', currentScore);
    const highScore = localStorage.getItem('high_score');
    alert(`
        Score : ${currentScore}
        High Score : ${highScore || 'No'}
        Status : ${status}
    `);
    window.location.reload();
}