var Paginator = {

  init: function(searchPath) {
      this.setup(searchPath);
  },

  setup: function(searchPath) {

    $('#results').html('');

    $.address.state('/');

    $.address.change(function(event) {
      $.ajax({
        url: searchPath,
        data: event.parameters,
        dataType: 'script',
        type: 'GET',
        success: function(html) {
          $('#results').html(html);
        }
      })
    });


    $(document).ready(function() {
      $('.pagination a').live('click', function() {
        $.address.value($(this).attr('href'));
        return false;
      })
    })

  }

}
