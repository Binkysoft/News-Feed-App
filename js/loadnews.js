function loadNews() {
	var divhtml = "<ul>";
	
	xmlhttp=new XMLHttpRequest();
 	xmlhttp.open("GET","http://www.binkysoft.com/mob/news.xml",false);
 	xmlhttp.send();
 	xmlDoc=xmlhttp.responseXML;
	
	var somenews = xmlDoc.getElementsByTagName("newsitem");
	if (somenews) {
		for (var i = 0; i < somenews.length; i++) {
			var title = somenews[i].getAttribute("title");
			var ref = somenews[i].getAttribute("ref");
			var reflink = somenews[i].getAttribute("reflink");
			var bdy = somenews[i].getAttribute("body");
			divhtml += "<li><p><span class='title'>" + title +
					"</span><a href='" + reflink + "'>" + ref + "</a><br>" + bdy +
					"</p></li>";
		}
	}
    else
    {
     	var title = "ERROR:";
		var ref = "Connection required";
		var reflink = "#";
		var bdy = "To get the latest news you must be connected to the internet. Check wireless or 3G!";
		divhtml += "<li><p><span class='title'>" + title +
					"</span><a href='" + reflink + "'>" + ref + "</a><br>" + bdy +
					"</p></li>";   
    }
	
	divhtml += "</ul>";
	$('#newsticker').html(divhtml);
 
	$(function() {
		$("#newsticker").jCarouselLite({
			vertical: true,
			hoverPause:true,
			btnPrev: ".previous",
			btnNext: ".next",
			visible: 3,
			auto:3000,
			speed:500
		});
	});
}