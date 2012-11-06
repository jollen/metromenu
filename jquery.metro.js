/*
* Metro Menu - Metro UI Style Menus - jQuery Plugin
* http://www.moko365.com
* Copyright (c) 2012 Moko365 Inc.
* MIT License
*/

(function ($) {	
$.fn.addMetroSimpleText = function (items) {
	var html_code = "";
	var ctx = $(this);
	
	ctx.empty().css("display", "none");
	
	for (var i = 0; i < items.length; i++) {
		var bgcolor = items[i].bgcolor,
			text = items[i].text,
			link = items[i].link;
		
		 html_code += "<div";
		
		 if (link != '') {
		     html_code += " onclick='parent.location=\"" + link + "\"'";
		 }
		 html_code += " class='metro metrosingle' style='background:" + bgcolor + ";'>\n";
		 html_code += "<span class='metrotext'>" + text + "</span>\n";
		 html_code += "</div>\n";
	}
	
	ctx.append(html_code);
	ctx.fadeIn('slow');
}
	
$.fn.AddMetroSimpleButton = function (theme, image, text, items, subCtx) {
	var html_code = "<div";
	var ctx = $(this);
		
	if (items != '') {
	    html_code += " onclick='$(\"#" + subCtx + "\").addMetroSimpleText(" + JSON.stringify(items) + ");'";
	}
	html_code += " class='metro metrosingle " + theme + "'>\n";
	html_code += "<div class='imgsimple'><img src='" + image + "' alt='" + text + "' /></div>\n";
	html_code += "<span>" + text + "</span>\n";
	html_code += "</div>\n";
	
	ctx.append(html_code);
	
	ctx.fadeIn('slow');
};
})(jQuery);