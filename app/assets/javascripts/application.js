//= require jquery.js
//# require jquery.min.js
//= require jquery.tipTip.js
//= require humane.js
//= require jquery_ujs.js
//# require jquery-ui.js
//# require prototip.js
//= require domains
//= require domain_templates
//= require users
//= require views
//= require audits
//= require bind
//= require_self

$(document).ready(function() {
    // ----------------- ajax activity indicator -----------------
    $('body').append('<div id="ajaxBusy"><img src="/assets/loading.gif"></div>');

    // setup tooltips where required
    $('.help-icon').each(function(i, icon){
        $(icon).tipTip({
            content: $( "#" + $(icon).data("help") ).text()
        });
    });

    // ----------------- setup tooltips of search boxes -----------------
    $('.search-field').each(function(i, field) {
        $(field).tipTip({
            content: $("#" + $(field).data("help")).text(),
			delay: 2000,
			activation: "click"
        });
    });

	// ----------------- ajax flash messages -----------------
	var flashMessageDelay = {
		error:   5000,
		warning: 5000,
		notice:  2000
	};
	var flashMessageIcon = {
		error:   'warning-sign',
		warning: 'warning-sign',
		notice:  'info-sign'
	};
	$.fn.flashMessage = function(message, messageType, delay) {
		var container = $('.flash-ajax.flash-' + messageType);
		if (container.length == 0) {
			if (console) console.log('creating flash container (type: ' + messageType + ')');
			var container = $('<div class="flash-ajax flash-' + messageType + '"><span class="icon ui-icon-' + flashMessageIcon[messageType] + '"></span><span class="message"></span></div>');
			container.hide();
			$('body').append(container);
		}
		container.find('.message').html(message);
		container.fadeIn().delay(delay || flashMessageDelay[messageType]).fadeOut('slow');
	};

	// ----------------- ajax pagination ---------------
	// will_paginate does not support link attributes yet.
	// See: https://github.com/mislav/will_paginate/pull/100
	$('.pagination a').live('click', function () {
		$.rails.handleRemote($(this));
		return false;
	});
});

// ajax activity indicator bound to ajax start/stop document events
$(document).ajaxStart(function() {
    $('#ajaxBusy').show();
}).ajaxStop(function(){
    $('#ajaxBusy').hide();
});

$(document).ajaxComplete(function(evt, xhr, options) {
	var message     = xhr.getResponseHeader('x-flash');
	var messageType = xhr.getResponseHeader('x-flash-type');

	if (message && messageType)
		$.fn.flashMessage(message, messageType);
});

//* rest of file omitted */
