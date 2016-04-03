// detects when a field is empty
jQuery.fn.extend({
    checkEmpty: function() {
        var $this = $(this);
        if ($this.val() === '') {
            $this
                .addClass('empty')
                .removeClass('notempty');
        } else {
            $this
                .addClass('notempty')
                .removeClass('empty');
        }
    },
    floatLabel: function() {
        var $this = $(this);
        $this.checkEmpty();
        $this.bind("change paste keyup", function() {
            $this.checkEmpty();
        });
    }
});

// inits the isempty check
$('input[type=text],input[type=password],input[type=email],input[type=number],input[type=tel],input[type=search],input[type=url],input[type=message],select,textarea').each(function() {
    $(this).floatLabel();
});

// handles the click feedback animation for buttons
$('button').each(function() {
    var $this = $(this);
    $this.on('click', function() {
        $this.removeClass('clicked');
        $this.addClass('clicked');
    });
});


// http://www.impressivewebs.com/textarea-auto-resize/
$(function() {
    var txt = $('#textarea'),
        hiddenDiv = $(document.createElement('div')),
        content = null;

    txt.addClass('txtstuff');
    hiddenDiv.addClass('hiddendiv common');

    $('body').append(hiddenDiv);

    txt.on('keyup', function() {

        content = $(this).val();

        content = content.replace(/\n/g, '<br>');
        hiddenDiv.html(content + '<br class="lbr">');

        $(this).css('height', hiddenDiv.outerHeight());

    });​
});
