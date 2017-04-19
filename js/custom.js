		$(document).ready(function () {
		var selector = '.sidebar li';
		$(selector).on('click', function(){
		$(selector).removeClass('active');
		$(this).addClass('active');
		});
		
		var Navigate = function (diff) {		 
			displayBoxIndex += diff;
			var oBoxCollection = $("#keybor1 li");
		    if (displayBoxIndex >= oBoxCollection.length) {
				displayBoxIndex = 0;
			}
			if (displayBoxIndex < 0) {
				displayBoxIndex = oBoxCollection.length - 1;
			}
			var cssClass = "display_box_hover";
			oBoxCollection.removeClass(cssClass).eq(displayBoxIndex).addClass(cssClass);
		}
		
			window.displayBoxIndex = -1;
				$(document).on('keypress keyup', function (e) {
					if (e.keyCode == 40) {            
						Navigate(1);
					}
					if (e.keyCode == 38) {            
						Navigate(-1);
					}
				});		
			});