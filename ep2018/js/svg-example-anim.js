 Reveal.addEventListener('svg-example-input-shown', function() {
    var $page = $('#slide-svg-example-input .figure .org-svg:first');
    $page.css({minWidth: '60%',
               positon: 'absolute',
               top: '35%',
               left: '20%',
               minHeight: '30%'});

    var $detail = $('#slide-svg-example-input .fragment:not(object)');
    $detail.css({top: '35%', left: '30%',
                 position: 'absolute'});

    var $word = $('#slide-svg-example-input .fragment:not(p)');
    $word.css({top: '15%', left: '-5%',
                 minWidth: '100%',
                 position: 'absolute'});

    var $svg = $($word[0].contentDocument.documentElement);
    $svg[0].unpauseAnimations();

    var intv = setInterval(function() {
        if (Reveal.getIndices()['f'] === 0) {
            $svg.find('#layer1 path').css({animationPlayState: 'running'});
            clearInterval(intv);
        }
    }, 100);
});
