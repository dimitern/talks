Reveal.addEventListener('svgexampleshown', function() {
    var $o = $('#slide-svg-example .figure object');
    var svg = $o[0].contentDocument.documentElement;
    svg.unpauseAnimations();
    
    var intv = setInterval(function() {
        if (Reveal.getIndices()['f'] === 0) {
            $(svg).find('#g16 path').css('animation-play-state', 'running');
            clearInterval(intv);
        }
    }, 100);
});
