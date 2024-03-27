import { mathQuestions } from './mathQuestions.js';

let playerOneBike = null;
let playerTwoBike = null;
let selectedBikes = [];

$('#playBtn').click(function () {
    $('#playerOne').show();
});

function playSound(soundId) {
    var sound = document.getElementById(soundId);
    if (sound) {
        sound.play();
    }
}

$('#playerOne .bike-piece').click(function () {
    const bikeId = $(this).attr('id');

    if (!selectedBikes.includes(bikeId)) {
        playerOneBike = bikeId;
        selectedBikes.push(bikeId);
        $('#playerOne').hide();
        $('#playerTwo').show();
        playSound("myAudio")
    }
});

$('#playerTwo .bike-piece').click(function () {
    const bikeId = $(this).attr('id');
    if (!selectedBikes.includes(bikeId)) {
        playerTwoBike = bikeId;
        selectedBikes.push(bikeId);
        $(this).prop('disabled', true);
        $('#playerTwo').hide();
        $('#p1').attr('id', playerOneBike);
        $('#p2').attr('id', playerTwoBike);
        showGameBoard();
        playSound("myAudio");
    }
});


function showGameBoard() {
    $('.game-container').show();
    $('.cards-container').css('display', 'flex');

    function createPlayerDiv(playerBike, playerId) {
        const playerImg = $('<img>').attr({
            'src': `images/game-components/${playerBike}-bike.png`,
            'width': '100%'
        });
        return $('<div>').attr('id', playerId).append(playerImg);
    }
    for (let i = 1; i <= 100; i++) {
        const gridId = '#b' + (i < 10 ? '0' : '') + i;
        $(gridId).append(
            createPlayerDiv(playerOneBike, 'p1'),
            createPlayerDiv(playerTwoBike, 'p2')
        );
    }
}



const positionContentInGrid = ((elementId, gridId) => $(`${gridId} ${elementId}`).css('display', 'block'));

const removeContentInGrid = ((elementId, gridId) => $(`${gridId} ${elementId}`).css('display', 'none'));

let tog = 1;
let p1sum = 0;
let p2sum = 0;

function playWrong() {
    var wrong = document.getElementById('wrong');
    wrong.play();
}

function playCorrect() {
    var correct = document.getElementById('correct');
    correct.play();
}

function play(player, psum, num) {
    let sum;
    if (psum == 'p1sum') {
        p1sum += num;
        console.log("p1sum:", p1sum);
        for (let i = 1; i <= 100; i++) {
            let selector = '#b' + (i < 10 ? '0' + i : i); 
            let element = '#p1';
            
            if (p1sum == i) {
                if ([3, 6, 7, 17, 22, 27, 29, 36, 46, 57, 79, 83, 90].includes(p1sum)) {
                    var divIds = [];
                    for (var j = 1; j <= 15; j++) {
                        divIds.push("charge" + j);
                    }
                    var randomIndex = Math.floor(Math.random() * divIds.length);
                    var selectedDivId = divIds[randomIndex];
                    var selectedDiv = $("#" + selectedDivId);
                    selectedDiv[0].offsetWidth;
                    selectedDiv.css("display", "block").addClass("animated");
                    console.log(selectedDiv)
        
                    if(selectedDivId == 'charge1') {
                        p1sum -= 1;
                        console.log("p1sum:", p1sum);
                    } else if(selectedDivId == 'charge2' || selectedDivId == 'charge3' || selectedDivId == 'charge4') {
                        p1sum -= 2;
                        console.log("p1sum:", p1sum);
                    } else if(selectedDivId == 'charge5' || selectedDivId == 'charge6' || selectedDivId == 'charge7' || selectedDivId == 'charge8') {
                        p1sum -= 3;
                        console.log("p1sum:", p1sum);
                    } else if(selectedDivId == 'charge9' || selectedDivId == 'charge10' || selectedDivId == 'charge11' || selectedDivId == 'charge12') {
                        p1sum -= 4;
                        console.log("p1sum:", p1sum);
                    } else if(selectedDivId == 'charge13' || selectedDivId == 'charge14' || selectedDivId == 'charge15'){
                        p1sum -= 5;
                        console.log("p1sum:", p1sum);
                    }
                    setTimeout(function() {
                        selectedDiv.css("display", "none").removeClass("animated");
                        positionContentInGrid('#p1', '#b' + (p1sum < 10 ? '0' + p1sum : p1sum));
                    }, 3200);
                    if ((p1sum >= 11 && p1sum < 21) || (p1sum >= 31 && p1sum < 41) || (p1sum >= 51 && p1sum < 61) || (p1sum >= 71 && p1sum < 81) || (p1sum >= 91)) {
                        $(`#p1 img`).css('transform', 'scaleX(-1)');
                    } else {
                        $(`#p1 img`).css('transform', 'scaleX(1)');
                    }
                    break;
                 } else if([9, 13, 31, 34, 37, 56, 67, 68, 78, 87, 88].includes(p1sum)) {
                    var divIdsBlue = [];
                    for(let j = 1; j <= 15; j++) {
                        divIdsBlue.push("chance" + j);
                    }
                    var randomBlueCard = Math.floor(Math.random() * divIdsBlue.length);
                    var selectedBlueCard = divIdsBlue[randomBlueCard];
                    var selectedBlue = $("#" + selectedBlueCard);
                    selectedBlue[0].offsetWidth;
                    selectedBlue.css("display", "block").addClass("animated");
                    console.log(selectedBlue)

                    if(selectedBlueCard == 'chance1') {
                        p1sum += 1;
                    } else if(selectedBlueCard == 'chance2' || selectedBlueCard == 'chance3') {
                        p1sum += 2;
                    } else if(selectedBlueCard == 'chance4' || selectedBlueCard == 'chance5' || selectedBlueCard == 'chance6' || selectedBlueCard == 'chance7') {
                        p1sum += 3;
                    } else if(selectedBlueCard == 'chance8' || selectedBlueCard == 'chance9' || selectedBlueCard == 'chance10' || selectedBlueCard == 'chance11' || selectedBlueCard == 'chance12') {
                        p1sum += 4;
                    } else if(selectedBlueCard == 'chance13' || selectedBlueCard == 'chance14' || selectedBlueCard == 'chance15') {
                        p1sum += 5;
                    }
                    setTimeout(function() {
                        selectedBlue.css("display", "none").removeClass("animated");
                        positionContentInGrid('#p1', '#b' + (p1sum < 10 ? '0' + p1sum : p1sum));
                    }, 3200);
                    if ((p1sum >= 11 && p1sum < 21) || (p1sum >= 31 && p1sum < 41) || (p1sum >= 51 && p1sum < 61) || (p1sum >= 71 && p1sum < 81) || (p1sum >= 91)) {
                        $(`#p1 img`).css('transform', 'scaleX(-1)');
                    } else {
                        $(`#p1 img`).css('transform', 'scaleX(1)');
                    }
                    break;
                 } else if ([15, 20, 25, 30, 33, 39, 50, 55, 60, 65, 70, 73, 80, 84, 89, 92, 93].includes(p1sum)) {
                    var randomIndex = Math.floor(Math.random() * mathQuestions.length);
                    var randomQuestion = mathQuestions[randomIndex];
                    var imageNumber = randomQuestion.value;
                    
                    var html = `
                        <div class="questions" style="transform: ${randomQuestion.translateY};">
                            <div>
                                <h3 class="equation" style="font-size: ${randomQuestion.fontSize};">${randomQuestion.question}</h3>
                            </div>
                            <div class="answer-choices ${randomQuestion.toggleWordProblem ? 'word-problem' : ''}">
                                ${randomQuestion.choices.map(choice => `
                                    <p class="choice">${choice.label}</p>
                                `).join('')}
                            </div>
                        </div>
                    `;
                    $('.math-pop').html(html);
                    $('.math-pop').css('background-image', `url("images/red-cards/math-bg-${imageNumber}.png")`);
                    $('.math-pop').toggleClass("math-animation");

                    $('.math-pop').on('click', '.choice', function() {
                        var choiceText = $(this).text().trim();
                        var questionObj = mathQuestions.find(question => question.question === $('.equation').text().trim());
                                         
                        var selectedChoice = questionObj.choices.find(choice => choice.label === choiceText);
                        if (selectedChoice) {
                            if (selectedChoice.isCorrect) {
                                p1sum += questionObj.value;
                                playCorrect();
                                setTimeout(function() {
                                    positionContentInGrid('#p1', '#b' + (p1sum < 10 ? '0' + p1sum : p1sum));
                                }, 2200);
                            } else {
                                p1sum -= questionObj.value;
                                playWrong();
                                setTimeout(function() {
                                    positionContentInGrid('#p1', '#b' + (p1sum < 10 ? '0' + p1sum : p1sum));
                                }, 2200);
                            }
                            
                            $('.math-pop').off('click', '.choice');
                            $('.math-pop').removeClass("math-animation");

                            if ((p1sum >= 11 && p1sum < 21) || (p1sum >= 31 && p1sum < 41) || (p1sum >= 51 && p1sum < 61) || (p1sum >= 71 && p1sum < 81) || (p1sum >= 91)) {
                                $(`#p1 img`).css('transform', 'scaleX(-1)');
                            } else {
                                $(`#p1 img`).css('transform', 'scaleX(1)');
                            }
                        } else {
                            console.error("Selected choice not found:", choiceText);
                        }
                    });
                    break;
                } else {
                    positionContentInGrid(element, selector);
                    break;
                } 
            } else {
                removeContentInGrid(element, selector);
            }

            if ((p1sum >= 11 && p1sum < 21) || (p1sum >= 31 && p1sum < 41) || (p1sum >= 51 && p1sum < 61) || (p1sum >= 71 && p1sum < 81) || (p1sum >= 91)) {
                $(`#p1 img`).css('transform', 'scaleX(-1)');
            } else {
                $(`#p1 img`).css('transform', 'scaleX(1)');
            }
        }
        if(p1sum < 0) {
            p1sum = 1;
        }        
        sum = p1sum
    }
    if (psum == 'p2sum') {
        p2sum += num;
        console.log("p2sum:", p2sum);
        for (let i = 1; i <= 100; i++) {
            let selector = '#b' + (i < 10 ? '0' + i : i); 
            let element = '#p2';
            
            if (p2sum == i) {
                if ([3, 6, 7, 17, 22, 27, 29, 36, 46, 57, 79, 83, 90].includes(p2sum)) {
                    var divIds = [];
                    for (var j = 1; j <= 15; j++) {
                        divIds.push("charge" + j);
                    }
                    var randomIndex = Math.floor(Math.random() * divIds.length);
                    var selectedDivId = divIds[randomIndex];
                    var selectedDiv = $("#" + selectedDivId);
                    selectedDiv[0].offsetWidth;
                    selectedDiv.css("display", "block").addClass("animated");
                    console.log(selectedDiv)

                    if(selectedDivId == 'charge1') {
                        p2sum -= 1;
                    } else if(selectedDivId == 'charge2' || selectedDivId == 'charge3' || selectedDivId == 'charge4') {
                        p2sum -= 2;
                    } else if(selectedDivId == 'charge5' || selectedDivId == 'charge6' || selectedDivId == 'charge7' || selectedDivId == 'charge8') {
                        p2sum -= 3;
                    } else if(selectedDivId == 'charge9' || selectedDivId == 'charge10' || selectedDivId == 'charge11' || selectedDivId == 'charge12') {
                        p2sum -= 4;
                    } else if(selectedDivId == 'charge13' || selectedDivId == 'charge14' || selectedDivId == 'charge15'){
                        p2sum -= 5;
                    }
                    setTimeout(function() {
                        selectedDiv.css("display", "none").removeClass("animated");
                        positionContentInGrid('#p2', '#b' + (p2sum < 10 ? '0' + p2sum : p2sum));
                    }, 3200);
                    if ((p2sum >= 11 && p2sum < 21) || (p2sum >= 31 && p2sum < 41) || (p2sum >= 51 && p2sum < 61) || (p2sum >= 71 && p2sum < 81) || (p2sum >= 91)) {
                        $(`#p2 img`).css('transform', 'scaleX(-1)');
                    } else {
                        $(`#p2 img`).css('transform', 'scaleX(1)');
                    }
                    break;
                 } else if([9, 13, 31, 34, 37, 56, 67, 68, 78, 87, 88].includes(p2sum)) {
                    var divIdsBlue = [];
                    for(let j = 1; j <= 15; j++) {
                        divIdsBlue.push("chance" + j);
                    }
                    var randomBlueCard = Math.floor(Math.random() * divIdsBlue.length);
                    var selectedBlueCard = divIdsBlue[randomBlueCard];
                    var selectedBlue = $("#" + selectedBlueCard);
                    selectedBlue[0].offsetWidth;
                    selectedBlue.css("display", "block").addClass("animated");
                    console.log(selectedBlue)
        

                    if(selectedBlueCard == 'chance1') {
                        p2sum += 1;
                    } else if(selectedBlueCard == 'chance2' || selectedBlueCard == 'chance3') {
                        p2sum += 2;
                    } else if(selectedBlueCard == 'chance4' || selectedBlueCard == 'chance5' || selectedBlueCard == 'chance6' || selectedBlueCard == 'chance7') {
                        p2sum += 3;
                    } else if(selectedBlueCard == 'chance8' || selectedBlueCard == 'chance9' || selectedBlueCard == 'chance10' || selectedBlueCard == 'chance11' || selectedBlueCard == 'chance12') {
                        p2sum += 4;
                    } else if(selectedBlueCard == 'chance13' || selectedBlueCard == 'chance14' || selectedBlueCard == 'chance15') {
                        p2sum += 5;
                    }
                    setTimeout(function() {
                        selectedBlue.css("display", "none").removeClass("animated");
                        positionContentInGrid('#p2', '#b' + (p2sum < 10 ? '0' + p2sum : p2sum));
                    }, 3200);
                    if ((p2sum >= 11 && p2sum < 21) || (p2sum >= 31 && p2sum < 41) || (p2sum >= 51 && p2sum < 61) || (p2sum >= 71 && p2sum < 81) || (p2sum >= 91)) {
                        $(`#p2 img`).css('transform', 'scaleX(-1)');
                    } else {
                        $(`#p2 img`).css('transform', 'scaleX(1)');
                    }
                    break;
                 } else if ([15, 20, 25, 30, 33, 39, 50, 55, 60, 65, 70, 73, 80, 84, 89, 92, 93].includes(p2sum)) {
                    var randomIndex = Math.floor(Math.random() * mathQuestions.length);
                    var randomQuestion = mathQuestions[randomIndex];
                    var imageNumber = randomQuestion.value;
                    
                    var html = `
                        <div class="questions">
                            <div>
                                <h3 class="equation" style="font-size: ${randomQuestion.fontSize};">${randomQuestion.question}</h3>
                            </div>
                            <div class="answer-choices">
                                ${randomQuestion.choices.map(choice => `
                                    <p class="choice">${choice.label}</p>
                                `).join('')}
                            </div>
                        </div>
                    `;
                    $('.math-pop').html(html);
                    $('.math-pop').css('background-image', `url("images/red-cards/math-bg-${imageNumber}.png")`);
                    $('.math-pop').toggleClass("math-animation");

                    $('.math-pop').on('click', '.choice', function() {
                        var choiceText = $(this).text().trim();
                        var questionObj = mathQuestions.find(question => question.question === $('.equation').text().trim());
                                         
                        var selectedChoice = questionObj.choices.find(choice => choice.label === choiceText);
                        if (selectedChoice) {
                            if (selectedChoice.isCorrect) {
                                p2sum += questionObj.value;
                                playCorrect();
                                setTimeout(function() {
                                    positionContentInGrid('#p2', '#b' + (p2sum < 10 ? '0' + p2sum : p2sum));
                                }, 2200);
                            } else {
                                p2sum -= questionObj.value;
                                playWrong();
                                setTimeout(function() {
                                    positionContentInGrid('#p2', '#b' + (p2sum < 10 ? '0' + p2sum : p2sum));
                                }, 2200);
                            }
                            if ((p2sum >= 11 && p2sum < 21) || (p2sum >= 31 && p2sum < 41) || (p2sum >= 51 && p2sum < 61) || (p2sum >= 71 && p2sum < 81) || (p2sum >= 91)) {
                                $(`#p2 img`).css('transform', 'scaleX(-1)');
                            } else {
                                $(`#p2 img`).css('transform', 'scaleX(1)');
                            }
                            $('.math-pop').off('click', '.choice');
                            $('.math-pop').removeClass("math-animation");
                        } else {
                            console.error("Selected choice not found:", choiceText);
                        }
                    });
                    break;
                } else {
                    positionContentInGrid(element, selector);
                    break; 
                }
            } else {
                removeContentInGrid(element, selector)
            }

            if ((p2sum >= 11 && p2sum < 21) || (p2sum >= 31 && p2sum < 41) || (p2sum >= 51 && p2sum < 61) || (p2sum >= 71 && p2sum < 81) || (p2sum >= 91)) {
                $(`#p2 img`).css('transform', 'scaleX(-1)');
            } else {
                $(`#p2 img`).css('transform', 'scaleX(1)');
            }
        }
        if(p2sum < 0) {
            p2sum = 1;
        }        
        sum = p2sum
    }
    

    if (sum >= 100) {
        setTimeout(function() {
          if (player == 'p1') {
            $('.p1-win').css('display', 'block');
            $('.p1-win').toggleClass("win-animation");
            $('.back').click(function() {
                $('.p1-win').removeClass("win-animation");
                $('.p1-win').css('display', 'none');
                location.reload();
            })
          }
          else if (player == 'p2') {
            $('.p2-win').css('display', 'block');
            $('.p2-win').toggleClass("win-animation");
            $('.back').click(function() {
                $('.p2-win').removeClass("win-animation");
                $('.p2-win').css('display', 'none');
                location.reload();
            })
          }
        }, 1000);
    }

   
}


let animationInProgress = false;

$('#roll').click(function() {
    if (animationInProgress) return; 

    animationInProgress = true;

    const randomDice = () => {
        const num = Math.floor(Math.random() * 6) + 1;
        rollDice(num);
    };

    const rollDice = num => {
        $('.dice').css('animation', 'rolling 4s');

        setTimeout(() => {
            switch (num) {
                case 1:
                    $('.dice').css('transform', 'rotateX(0deg) rotateY(0deg)');
                    break;
                case 6:
                    $('.dice').css('transform', 'rotateX(180deg) rotateY(0deg)');
                    break;
                case 2:
                    $('.dice').css('transform', 'rotateX(-90deg) rotateY(0deg)');
                    break;
                case 5:
                    $('.dice').css('transform', 'rotateX(90deg) rotateY(0deg)');
                    break;
                case 3:
                    $('.dice').css('transform', 'rotateX(0deg) rotateY(90deg)');
                    break;
                case 4:
                    $('.dice').css('transform', 'rotateX(0deg) rotateY(-90deg)');
                    break;
                default:
                    break;
            }
            if (tog % 2 != 0) {
                document.getElementById('tog').innerText = "Player 2's turn "
                play('p1', 'p1sum', num)
            } else if (tog % 2 == 0) {
                document.getElementById('tog').innerText = "Player 1's turn "
                play('p2', 'p2sum', num)
            }
            tog += 1;
            $('.dice').css('animation', 'none');
            console.log("Dice value:", num);
            animationInProgress = false; 
        }, 4050);
    };

    randomDice();
});
