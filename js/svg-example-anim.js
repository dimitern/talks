$('a object').css({display: 'inline !important', visibility: 'visible !important', opacity: '1 !important');

Reveal.addEventListener('svg-example-input-shown', function() {
    var $page = $('#slide-svg-example-input .figure .org-svg:first');
    $page.css({minWidth: '800px',
               positon: 'absolute',
               top: '33%',
               left: '25%',
               minHeight: '150px'});

    var $detail = $('#slide-svg-example-input .fragment:not(object)');
    $detail.css({top: '33%', left: '40%',
                 position: 'absolute'});

    var $word = $('#slide-svg-example-input .fragment:not(p)');
    $word.css({top: '8%', left: 0,
                 minWidth: '500px',
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
