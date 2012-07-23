$(document).ready(function() {
	"use strict";
	$("input:radio").click(function() {
		var name = $(this).attr("name"),
			i = $(this).index(),
			currentRadio;
			switch (i) {
				case 1:
					i = 5;
					break;
				case 2:
					i = 4;
					break;
				case 3:
					i = 3;
					break;
				case 4:
					i = 2;
					break;
				case 5:
					i = 1;
					break;
			}
		$("input[name=" + name+ "].checked").removeClass("checked");
		for (i; i >= 0; i--) {
			currentRadio = "input[name=" + name + "][value=" + i + "]";
			$(currentRadio).addClass("checked");
		}
	});
	$("input:checkbox").click(function() {
		var name = $(this).attr("name"),
			i = $(this).index(),
			currentCheckbox;
			switch (i) {
				case 1:
					i = 5;
					break;
				case 2:
					i = 4;
					break;
				case 3:
					i = 3;
					break;
				case 4:
					i = 2;
					break;
				case 5:
					i = 1;
					break;
			}
		$("input[name=" + name+ "].checked").removeClass("checked");
		for (i; i >= 0; i--) {
			currentCheckbox = "input[name=" + name + "][value=" + i + "]";
			$(currentCheckbox).addClass("checked");
		}
	});
});