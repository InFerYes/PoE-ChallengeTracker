function restoreOrder(source, element) {
    var cookie = $.cookie(source);
    if (!cookie) return; 
    var SavedID = cookie.split(',');
    var compl = [], ncompl = [];
    for (var Sitem = 0, m = SavedID.length; Sitem < m; Sitem++) { 
        $(element).append($('.challenges').children("#" + SavedID[Sitem]));
    } 

}

function addToCookie(source, elemnt){
    var cooked = [];
    $(elemnt).each(function(index, domEle) {
        cooked[index] = $(domEle).sortable('toArray');
    });
    $.cookie(source, cooked, {
        expires: 199,
        path: '/'
    });      
}

$(function() {
    $("#notcompleted, #completed").sortable({
        connectWith: ".challenges",
        handle: "h2",
        placeholder: "place",
        secondChallengeRewardoll: true,
        update: function(event, ui) {

            addToCookie('notcompleted', '#notcompleted');
            addToCookie('completed', '#completed');

        }
    }).disableSelection();
});

$(document).ready(function() {

    restoreOrder('notcompleted', '#notcompleted');
    restoreOrder('completed', '#completed');

    // REWARDS
    var ncom = $('#notcompleted .challenge').length;
    if(ncom === 40){
        $('.cND').html('<span class="corrupted">40</span>');
    } else if(ncom > 0){
        $('.cND').html(ncom);
    } else if(ncom === 0) {
        $('.cND').html('<span class="or">0 - WELL DONE</span>');
    }

    var com = $('#completed .challenge').length;
    if(com === 40){
        $('.cD').html('<span class="or">40 - WELL DONE</span>');
    } else if(com > 0){
        $('.cD').html(com);
    } else if(com === 0) {
        $('.cD').html('<span class="corrupted">0</span>');
    }

    // rewards
    // First challenge reward
    var firstChallengeReward = 12;
    if(com >= firstChallengeReward){
        $('<p class="or">Breach Footprint Effect is yours.</p>').appendTo('.firstChallengeReward');
    } else if(firstChallengeReward - com === 1){
        $('<p>You still need to complete ' + (firstChallengeReward-com) + ' challenge to get Breach Footprint Effect</p>').appendTo('.firstChallengeReward');
    } else {
        $('<p>You still need to complete ' + (firstChallengeReward-com) + ' challenges to get Breach Footprint Effect</p>').appendTo('.firstChallengeReward');
    }

    // Second challenge reward
    var secondChallengeReward = 24;
    if(com >= secondChallengeReward){
        $('<p class="or">Breach Portal Effect is yours.</p>').appendTo('.secondChallengeReward');
    } else if(secondChallengeReward - com === 1){
        $('<p>You still need to complete ' + (secondChallengeReward-com) + ' challenge to get Breach Portal Effect</p>').appendTo('.secondChallengeReward');
    } else {
        $('<p>You still need to complete ' + (secondChallengeReward-com) + ' challenges to get Breach Portal Effect</p>').appendTo('.secondChallengeReward');
    }
    // Third challenge reward
    var thirdChallengeReward = 36;
    if(com >= thirdChallengeReward){
        $('<p class="or">Demonic Wings are yours.</p>').appendTo('.thirdChallengeReward');
    } else if(thirdChallengeReward - com === 1){
        $('<p>You still need to complete ' + (thirdChallengeReward-com) + ' challenge to get Demonic Wings</p>').appendTo('.thirdChallengeReward');
    } else {
        $('<p>You still need to complete ' + (thirdChallengeReward-com) + ' challenges to get Demonic Wings</p>').appendTo('.thirdChallengeReward');
    }
    $.cookieBar();
});
