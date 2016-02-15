// detects when a field is empty
$('input,select,textarea').each(function() {
  var $this = $(this);
  $this.bind("change paste keyup", function() {
    if ($this.val() === '') {
      $this.addClass('empty');
      $this.removeClass('notempty');
    } else {
      $this.addClass('notempty');
      $this.removeClass('empty');
    }
    //console.log($this.prop('class'));
  });
});


// http://thecodeplayer.com/walkthrough/ripple-click-effect-google-material-design
var parent, ink, d, x, y;
$("button").click(function(e){
	parent = $(this).parent();
	//create .ink element if it doesn't exist
	if(parent.find(".ink").length == 0)
		parent.prepend("<span class='ink'></span>");
		
	ink = parent.find(".ink");
	//incase of quick double clicks stop the previous animation
	ink.removeClass("animate");
	
	//set size of .ink
	if(!ink.height() && !ink.width())
	{
		//use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
		d = Math.max(parent.outerWidth(), parent.outerHeight());
		ink.css({height: d, width: d});
	}
	
	//get click coordinates
	//logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
	x = e.pageX - parent.offset().left - ink.width()/2;
	y = e.pageY - parent.offset().top - ink.height()/2;
	
	//set the position and add class .animate
	ink.css({top: y+'px', left: x+'px'}).addClass("animate");
})


// http://www.impressivewebs.com/textarea-auto-resize/
$(function() {
    var txt = $('#textarea'),
        hiddenDiv = $(document.createElement('div')),
        content = null;

    txt.addClass('txtstuff');
    hiddenDiv.addClass('hiddendiv common');

    $('body').append(hiddenDiv);

    txt.on('keyup', function () {

        content = $(this).val();

        content = content.replace(/\n/g, '<br>');
        hiddenDiv.html(content + '<br class="lbr">');

        $(this).css('height', hiddenDiv.outerHeight());

    });​
});