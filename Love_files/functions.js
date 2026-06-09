// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this);
			var lines = $ele.find('.say').map(function() {
				return {
					className: this.className,
					text: $(this).text()
				};
			}).get();
			var lineIndex = 0;
			var charIndex = 0;

			$ele.empty();
			lines.forEach(function(line) {
				$ele.append($('<span>').addClass(line.className).html('&nbsp;'));
			});

			var timer = setInterval(function() {
				var line = lines[lineIndex];
				var text = line.text.substring(0, charIndex);
				var cursor = charIndex < line.text.length ? '_' : '';

				$ele.find('.say').eq(lineIndex).text(text + cursor);

				if (charIndex < line.text.length) {
					charIndex++;
					return;
				}

				$ele.find('.say').eq(lineIndex).text(line.text);
				lineIndex++;
				charIndex = 0;

				if (lineIndex >= lines.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

	function timeElapse(date) {
		var currentDate = new Date();

		var startYear = date.getFullYear();	
		var startMonth = date.getMonth();
		var startDay = date.getDate();

		var currentYear = currentDate.getFullYear();
		var currentMonth = currentDate.getMonth();
		var currentDay = currentDate.getDate();

		var years = currentYear - startYear;
		var months = currentMonth - startMonth;
		var days = currentDay - startDay;

		if (days < 0) {
			months -= 1;
			var prevMonth = new Date(currentYear, currentMonth, 0);
			days += prevMonth.getDate();
		}
		if (months < 0) {
			years -= 1;
			months += 12;
		}
		if (months < 10) months = "0" + months;
		if (days < 10) days = "0" + days;

		var current = Date();
		var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
		seconds = seconds % (3600 * 24);
		var hours = Math.floor(seconds / 3600);
		if (hours < 10) {
			hours = "0" + hours;
		}
		seconds = seconds % 3600;
		var minutes = Math.floor(seconds / 60);
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		seconds = seconds % 60;
		if (seconds < 10) {
			seconds = "0" + seconds;
		}

		var result = "<span class=\"digit\">" + years + "</span> años, " +
					"<span class=\"digit\">" + months + "</span> meses, " +
					"<span class=\"digit\">" + days + "</span> días <br>"+
					"<div class='time-holder'><span class=\"s-digit\">" + hours + " hrs </span> "+
					"<span class=\"s-digit\">" + minutes + " min </span> "+
					"<span class=\"s-digit\">" + seconds + " seg</span><div> ";

		$("#clock").html(result);
	}


// function timeElapse(date){
// 	var current = Date();
// 	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
// 	var days = Math.floor(seconds / (3600 * 24));
// 	seconds = seconds % (3600 * 24);
// 	var hours = Math.floor(seconds / 3600);
// 	if (hours < 10) {
// 		hours = "0" + hours;
// 	}
// 	seconds = seconds % 3600;
// 	var minutes = Math.floor(seconds / 60);
// 	if (minutes < 10) {
// 		minutes = "0" + minutes;
// 	}
// 	seconds = seconds % 60;
// 	if (seconds < 10) {
// 		seconds = "0" + seconds;
// 	}
// 	var result = "Día <span class=\"digit\">" + days + "</span>, " + 
// 	"<span class=\"digit\">" + hours + "</span> horas, " + 
// 	"<span class=\"digit\">" + minutes + "</span> minutos, " + 
// 	"<span class=\"digit\">" + seconds + "</span> segundos";

// $("#clock").html(result);

// }
