Reveal.addEventListener('examplepageshown', function() {
    var $page = $('#slide-example-page .figure .org-svg:first');
    $page.css({minWidth: '800px',
               positon: 'absolute',
               top: '35%',
               left: '25%',
               minHeight: '150px'}).addClass('svg-page');

    var $detail = $('#slide-example-page .fragment:not(object)');
    $detail.css({top: '40%', left: '40%',
                 position: 'absolute'});

    var $word = $('#slide-example-page .fragment:not(p)');
    $word.css({top: '10%', left: 0,
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

Reveal.addEventListener('exampleoutputshown', function() {
    $('#slide-example-output object').each(function() {
        $(this).css({
            width: '600px',
            height: '600px',
            position: 'absolute',
            top: '66%',
            left: '35%'
//            display: 'block'
        });

        $(this.contentDocument.documentElement).attr({
            width: '100%',
            height: '100%',
            viewBox: '0 0 400 400'
        });

        $(this.contentDocument.documentElement).find('g:first').attr({
            transform: 'scale(1.15, 1.5)'
        });
    });
});
