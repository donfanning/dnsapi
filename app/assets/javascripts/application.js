//= require jquery.js
//# require jquery.min.js
//= require jquery.tipTip.js
//= require humane.js
//= require jquery_ujs.js
//# require jquery-ui.js
//# require prototip.js
//= require domains
//= require users
//= require_self

$(document).ready(function() {

  // AJAX activity indicator
  $('body').append('<div id="ajaxBusy"><img src="/assets/loading.gif">Processing</div>');

  // Setup tooltips where required
  $('.help-icn').each(function(i, icon){
    $(icon).tipTip({
      content: $( "#" + $(icon).data("help") ).text()
    });
  });

  // // Used by the new record form
  // $('#record-form #record_type').change(function() {
  //   toggleRecordFields( $(this).val() );
  // });

  // // Used by the new domain form
  // $('#domain_type').change(function() {
  //   if ( $(this).val() == 'SLAVE' ) {
  //     $('#master-address').show();
  //     $('#zone-templates').hide();
  //     $('#no-template-input').hide();
  //   } else {
  //     $('#master-address').hide();
  //     $('#zone-templates').show();
  //     $('#no-template-input').show();
  //   }
  // });

  // // Used by the new domain form
  // $('#domain_zone_template_id').change(function() {
  //   if ( $(this).val() == '' ) {
  //     $('#no-template-input').show();
  //   } else {
  //     $('#no-template-input').hide();
  //   }
  // });

  // // Used by the new record template form
  // $('#record-form #record_template_record_type').change(function() {
  //   toggleRecordFields( $(this).val() );
  // });

  // // Used by the new macro step form
  // $('#record-form #macro_step_record_type').change(function() {
  //   toggleRecordFields( $(this).val() );
  // });
});

// Ajax activity indicator bound to ajax start/stop document events
$(document).ajaxStart(function() {
  $('#ajaxBusy').show(); 
}).ajaxStop(function(){ 
  $('#ajaxBusy').hide();
});

//* rest of file omitted */
