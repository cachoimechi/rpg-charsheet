$(document).ready(function() {
	$("input:radio").click(function() {
				var name = $(this).attr("name"),
					i = $(this).index();
					console.log(i);
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
});