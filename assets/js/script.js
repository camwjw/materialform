jQuery.fn.extend({checkEmpty:function(){console.log("check empty");var a=$(this);""===a.val()?(console.log("empty"),a.addClass("empty").removeClass("notempty")):(console.log("not empty"),a.addClass("notempty").removeClass("empty"))},floatLabel:function(){console.log("float label");var a=$(this);a.checkEmpty(),a.bind("change paste keyup",function(){console.log("event"),a.checkEmpty()})}}),$("input[type=text],input[type=password],input[type=email],input[type=number],input[type=tel],input[type=search],input[type=url],input[type=message],select,textarea").each(function(){$(this).floatLabel(),console.log("init")});var parent,ink,d,x,y;$("button").click(function(a){parent=$(this).parent(),0==parent.find(".ink").length&&parent.prepend("<span class='ink'></span>"),ink=parent.find(".ink"),ink.removeClass("animate"),ink.height()||ink.width()||(d=Math.max(parent.outerWidth(),parent.outerHeight()),ink.css({height:d,width:d})),x=a.pageX-parent.offset().left-ink.width()/2,y=a.pageY-parent.offset().top-ink.height()/2,ink.css({top:y+"px",left:x+"px"}).addClass("animate")}),$(function(){var a=$("#textarea"),b=$(document.createElement("div")),c=null;a.addClass("txtstuff"),b.addClass("hiddendiv common"),$("body").append(b),a.on("keyup",function(){c=$(this).val(),c=c.replace(/\n/g,"<br>"),b.html(c+'<br class="lbr">'),$(this).css("height",b.outerHeight())})});