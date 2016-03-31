TwitterCloud = function(domElement, type='wall') {
	
	$.ajax({url: 'php/index.php'})
	.done(function(data) {
		data = data.statuses;
		console.log(data);
		//$(domElement).addClass('cloud-container');
		if (type=='scatter') {
			$(domElement).addClass('cloud-container-fix');
			$(domElement).append('<h2 style="position:absolute; top:-20px; left: calc(50% - 55px);">Tweet Cloud</h2>');
			for(i=0;i<data.length;i++) {
			div = $('<div>');
			divRow = $('<div>');
			divcol1 = $('<div>');
			divcol2 = $('<div>');
			img = $('<img>');
			h5 = $('<h5>');
			small = $('<small>');
			p = $('<p>');

			img.attr('src', data[i].user.profile_image_url_https);
			h5.html(data[i].user.name);
			small.html('@'+data[i].user.screen_name);
			p.html(data[i].text);

			divRow.addClass('row');
			divcol1.addClass('col-md-3');
			divcol2.addClass('col-md-9');

			divcol1.append(img);
			divcol2.append(h5);
			divcol2.append(small);


			divRow.append(divcol1);
			divRow.append(divcol2);
			div.append(divRow);
			div.append(p);

			
			div.addClass('cloud-card');
			div.css('left',Math.floor(Math.random() * (window.outerWidth - 150)) - 50 +'px');
			div.css('top',Math.floor(Math.random() * 400 + 40) +'px');

			$(domElement).append(div);	
		}
		}
		else if(type == 'wall') {
			$(domElement).addClass('masonry');
			$(domElement).append('<h2 style="text-align: center">Tweet Cloud</h2>');
			for(i=0;i<data.length;i++) {


				div = $('<div>');
				divRow = $('<div>');
				divcol1 = $('<div>');
				divcol2 = $('<div>');
				img = $('<img>');
				h5 = $('<h5>');
				small = $('<small>');
				p = $('<p>');

				img.attr('src', data[i].user.profile_image_url_https);
				h5.html(data[i].user.name);
				small.html('@'+data[i].user.screen_name);
				p.html(data[i].text);

				div.addClass('item');
				//div.css('backgroundColor', '#'+color[Math.floor(Math.random() * 5)]);

				divRow.addClass('row');
				divcol1.addClass('col-md-3');
				divcol2.addClass('col-md-9');

				divcol1.append(img);
				divcol2.append(h5);
				divcol2.append(small);


				divRow.append(divcol1);
				divRow.append(divcol2);
				div.append(divRow);
				div.append(p);

				

				$(domElement).append(div);	
			}
		}
		
		
			
	});

	

}