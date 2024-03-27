$(document).ready(function() {
    function globeAnimation() {
        $('.globe').animate({ 
            'top': '-10%',
            'right': '-25%',
            'opacity': '0.9'
        }, 1000); 
    }
    globeAnimation();

    function factoryAnimation() {
        $('.factory').animate({ 
            'bottom': '-40px',
            'opacity': '0.9'
        }, 1000); 
    }
    
    setTimeout(function() {
        $('.image-container').css('display', 'block');
       $('.image-container').addClass('fadeInUp');
    }, 1000);

    setTimeout(function() {
        factoryAnimation();
    }, 1500);
    
    $('.globe').addClass('rotateGlobe');
    $('.factory').addClass('blink');
    setTimeout(function() {
        $('body').css('background-image', "url('/images/background/bg-page-2.png')");
    }, 3000);

    setTimeout(function() {
        $('body').css('height', '100vh')
        $(".logo-first-container").css('display', 'none');
        $('.home').css('display', 'flex');
        $('.home-options').css('display', 'flex');
        $('.globe').css('display', 'none');
        $('.factory').css('display', 'none');
        var music = $('#bgMusic')[0]; 
        function loopMusic() {
            music.currentTime = 0; 
            music.play(); 
        }
        music.addEventListener('ended', loopMusic);
    
        music.play();
    }, 3000);
    $('#settingsBtn').on('click', function() {
        $('.settings-modal').css('display', 'flex');
        $('.home-header').css('display', 'flex');
        $('#htpBtn').css('visibility', 'hidden');
        $('#profileBtn').css('visibility', 'hidden');
        $('#playBtn').css('visibility', 'hidden');
        $('#homeLogo').css('transform', 'translateY(80%)');
        $('#homeLogo').css('width', '340px');
        $('.home').css('transform', 'translateY(0%)');
    });

    $('.volume-range').each(function() {
        $(this).on('input', function() {
            $(this).css('--value', $(this).val() + '%');
        });
    });

    $('#settingsClose').on('click', function() {
        $('.settings-modal').css('display', 'none');
        $('.home-header').css('display', 'none');
        $('#htpBtn').css('visibility', 'visible');
        $('#profileBtn').css('visibility', 'visible');
        $('#playBtn').css('visibility', 'visible');
        $('#homeLogo').css('transform', 'translateY(0%)');
        $('#homeLogo').css('width', '300px');
        $('.home').css('transform', 'translateY(13%)');
    });

    $('#htpBtn').on('click', function() {
        $('.htp-modal').css('display', 'flex');
        $('.home-header').css('display', 'flex');
        $('#settingsBtn').css('visibility', 'hidden');
        $('#profileBtn').css('visibility', 'hidden');
        $('#playBtn').css('visibility', 'hidden');
        $('#homeLogo').css('transform', 'translateY(80%)');
        $('#homeLogo').css('width', '340px');
        $('.home').css('transform', 'translateY(0%)');
    });
    
    $('#blueTile').on('click', function() {
        $('.blue-tile-modal').css('display', 'block');
        $('.htp-desc').css('display', 'none');
        $('.htp-tile-mechanics').css('display', 'none');
        $('.htp-tile').css('display', 'none');
        $('#htpClose').css('display', 'none');
        $('.back-btn').css('display', 'block');
        $('.settings-heading').css('flex-direction', 'row-reverse');
        $('.heading-text').css('flex-direction', 'row-reverse');
    })

    $('#greenTile').on('click', function() {
        $('.green-tile-modal').css('display', 'block');
        $('.htp-desc').css('display', 'none');
        $('.htp-tile-mechanics').css('display', 'none');
        $('.htp-tile').css('display', 'none');
        $('#htpClose').css('display', 'none');
        $('.back-btn').css('display', 'block');
        $('.settings-heading').css('flex-direction', 'row-reverse');
        $('.heading-text').css('flex-direction', 'row-reverse');
    })

    $('#redTile').on('click', function() {
        $('.red-tile-modal').css('display', 'block');
        $('.htp-desc').css('display', 'none');
        $('.htp-tile-mechanics').css('display', 'none');
        $('.htp-tile').css('display', 'none');
        $('#htpClose').css('display', 'none');
        $('.back-btn').css('display', 'block');
        $('.settings-heading').css('flex-direction', 'row-reverse');
        $('.heading-text').css('flex-direction', 'row-reverse');
    })

    $('.back-btn').on('click', function() {
        $('.blue-tile-modal').css('display', 'none');
        $('.green-tile-modal').css('display', 'none');
        $('.red-tile-modal').css('display', 'none');
        $('.htp-desc').css('display', 'flex');
        $('.htp-tile-mechanics').css('display', 'grid');
        $('.htp-tile').css('display', 'flex');
        $('#htpClose').css('display', 'block');
        $(this).css('display', 'none');
        $('.settings-heading').css('flex-direction', 'row');
        $('.heading-text').css('flex-direction', 'row');
    })

    $('#htpClose').on('click', function() {
        $('.htp-modal').css('display', 'none');
        $('.home-header').css('display', 'none');
        $('#htpBtn').css('visibility', 'visible');
        $('#settingsBtn').css('visibility', 'visible');
        $('#profileBtn').css('visibility', 'visible');
        $('#playBtn').css('visibility', 'visible');
        $('#homeLogo').css('transform', 'translateY(0%)');
        $('#homeLogo').css('width', '300px');
        $('.home').css('transform', 'translateY(13%)');
    });

    $("#profileBtn").on('click', function() {
        $('.profile-modal').css('display', 'flex');
        $('.home-header').css('display', 'flex');
        $('#settingsBtn').css('visibility', 'hidden');
        $('#htpBtn').css('visibility', 'hidden');
        $('#playBtn').css('visibility', 'hidden');
        $('#homeLogo').css('transform', 'translateY(80%)');
        $('#homeLogo').css('width', '340px');
        $('.home').css('transform', 'translateY(0%)');
    })

    $('#profileClose').on('click', function() {
        $('.profile-modal').css('display', 'none');
        $('.home-header').css('display', 'none');
        $('#htpBtn').css('visibility', 'visible');
        $('#settingsBtn').css('visibility', 'visible');
        $('#playBtn').css('visibility', 'visible');
        $('#homeLogo').css('transform', 'translateY(0%)');
        $('#homeLogo').css('width', '300px');
        $('.home').css('transform', 'translateY(13%)');
    });


    $('#playBtn').on('click', function() {
        $('body').css('background-image', "url('/images/background/bg-3.png')");
        $('.home').css('display', 'none');
        $('.home-options').css('display', 'none');
        $('.game-page').css('display', 'block');
    })

   $('.openbtn').on('click', function() {
      $('.settings-modal').css({ 
        'display': 'block',
        'position': 'absolute',
        'width': '95%',
        'top': '45%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)',
        'z-index': '100',
        'margin-left': 'auto',
        'margin-right': 'auto',
        'background': 'radial-gradient(circle at 50% 50%, rgba(126, 217, 88, 0.66), #0097b2)'
    });
   })
   
    function debounce(func, delay) {
        let timer;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(context, args);
            }, delay);
        };
    }

    const handleSoundEffectVolume = debounce(function() {
        var volumeValue = $(this).val() / 100;
        $('.sound-effect')[0].volume = volumeValue;
        $('.sounds').not(this).val(volumeValue * 100).trigger('input');
    }, 20);

    $('.sounds').on('input', handleSoundEffectVolume);
  

    const handleVolumeChange = debounce(function() {
        var volumeValue = $(this).val() / 100;
        $('#bgMusic')[0].volume = volumeValue;
        $('.music').not(this).val(volumeValue * 100).trigger('input');
    }, 20);
  
    $('.music').on('input', handleVolumeChange);

    const handleBrightnessChange = debounce(function() {
        var brightnessValue = $(this).val();
        brightnessValue = Math.min(Math.max(brightnessValue, 0), 100);
        var alphaValue = 0.335 - (0.335 * brightnessValue / 100);
        var adjustedBrightness = brightnessValue / 100;
        $('.overlay').css("background-color", "hsla(0, 0%, 0%, " + alphaValue + ")");
        $('.overlay').css("filter", "brightness(" + adjustedBrightness + ")");

        $('.brightness').not(this).val(brightnessValue).trigger('input');
    }, 20);

   $('.brightness').on('input', handleBrightnessChange);

   $('#closeGameSettings').on('click', function() {
      $('.settings-modal').css('display', 'none');
      $('.game-page').css('z-index', '1')
   });
});



var storedData = localStorage.getItem("profileData");
if (storedData) {
    var profileData = JSON.parse(storedData);
    $("#nicknameInput").val(profileData.nickname);
    $("#usernameInput").val(profileData.username);
    $("#nicknameInput").attr("placeholder", profileData.nickname);
    $("#usernameInput").attr("placeholder", "@" + profileData.username);
    $("#placeholderImg").attr("src", profileData.avatar);
    if (profileData.avatar) {
        $("#placeholderBg").hide();
    }
}

var storedData = localStorage.getItem("profileData");
if (storedData) {
    var profileData = JSON.parse(storedData);
    $("#nicknameInput").val(profileData.nickname);
    $("#usernameInput").val(profileData.username);
    $("#nicknameInput").attr("placeholder", profileData.nickname);
    $("#usernameInput").attr("placeholder", "@" + profileData.username);
    $("#placeholderImg").attr("src", profileData.avatar || "images/profile-modal/placeholder-profile.png");
    if (profileData.avatar) {
        $("#placeholderBg").hide();
    }
}

function saveDataToLocalStorage() {
    var nickname = $("#nicknameInput").val();
    var username = $("#usernameInput").val();
    var selectedAvatar = $(".avatar.selected").attr("data-avatar");

    var profileData = {
        "nickname": nickname,
        "username": username,
        "avatar": selectedAvatar || "images/profile-modal/placeholder-profile.png"
    };

    localStorage.setItem("profileData", JSON.stringify(profileData));
}

$("#applyBtn").click(function() {
    saveDataToLocalStorage();
    $('.profile-modal').css('display', 'none');
    $('.home-header').css('display', 'none');
    $('#htpBtn').css('visibility', 'visible');
    $('#settingsBtn').css('visibility', 'visible');
    $('#playBtn').css('visibility', 'visible');
    $('#homeLogo').css('transform', 'translateY(0%)');
    $('#homeLogo').css('width', '300px');
    $('.home').css('transform', 'translateY(13%)');
});

$("#nicknameInput, #usernameInput").on("input", function() {
    saveDataToLocalStorage();
});

$(".avatar").click(function() {
    $(".avatar.selected").removeClass("selected");
    $(this).addClass("selected");
    saveDataToLocalStorage();

    // Replace placeholder image with selected avatar
    var selectedAvatarSrc = $(this).attr("data-avatar");
    $("#placeholderImg").attr("src", selectedAvatarSrc);
    $("#placeholderBg").hide();
});


$('.tile').each(function() {
    // Check if the tile is not at the edge
    if (!$(this).hasClass('move-down') && !$(this).hasClass('edge')) {
        const lineContainer = $('<div class="line-container"></div>');
        const column1 = $('<div class="column"><div class="line"></div></div>');
        const column2 = $('<div class="column"><div class="separator"><div class="middle-line"></div><div class="middle-line"></div></div></div>');
        const column3 = $('<div class="column"><div class="line"></div></div>');

        lineContainer.append(column1, column2, column3);
        $(this).append(lineContainer);
    }
});







