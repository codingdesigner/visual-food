/* Author:
*  [your name here]
*/

// add a class to style the active tabs
$(document).ready(function() {
  function set_tabset(tabset) {
    $tabset = tabset;
    $checked_id = $tabset.find('[type=radio]:checked').attr('id');
    $tabset.find('label').removeClass('radio-checked');
    $tabset.find('label[for='+ $checked_id +']').addClass('radio-checked');
  }
  $('.tabset').each(function(index, el) {
    set_tabset($(this));
  });
  $('[type=radio]').change(function() {
    set_tabset($(this).parents('.tabset'));
  });
});
