
$('.ajax-results').live('submit', function() {
  var action = $(this).attr('action');
  var params = $(this).serialize();
  if(Paginator.hasPushSupport())
    window.location = action + '?' + params;
  else
    window.location = action + '#/?' + params;
  return false;
})

var Paginator = {

  init: function(searchPath) {
    if(this.hasPushSupport() || !window.location.search) {
      this.path = searchPath || window.location.path;
      this.setup();
    }
  },

  setup: function() {

    $.address.state('/');

    $.address.change(function(event) {
      $('#search').val(event.parameters.q);
      $.ajax({
        url: window.location.path,
        data: event.parameters,
        dataType: 'script',
        type: 'GET',
        success: function(html) {
          $('#results').html(html);
        }
      });
    });

    $(document).ready(function() {
      $('.pagination a').live('click', function() {
        var href = $(this).attr('href');
        var path = Paginator.hasPushSupport() ? href : href.replace(Paginator.path, '');

        $.address.value(path);
        return false;
      })
    })

  },

  hasPushSupport: function() {
    return history.pushState ? true : false;
  }

}
