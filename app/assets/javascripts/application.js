// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
// require react_ujs
// require react_router.min
// require components

$(document).ready(function(){

  $('input[type="number"]').each(function(){
    var self = $(this);
    function update_quantity() {
      $.ajax({
        url: self.parents('form').attr('action'),
        data: {
          cart_item: {
            quantity: self.val()
          }
        },
        method: 'PUT',
        success: function(data){
          console.log(data)
          $('#cart_item_total_'+data.cart_item.product_id).html('R$'+data.cart_item.total);
          $('#subtotal').html('R$'+data.cart.subtotal);
          $('#total').html('R$'+data.cart.total);
        }
      })
    }
    self.prev().on('click',function(e) {
      if (self.val() > 1) self.val( parseInt(self.val()) - 1 );
      update_quantity()
    })
    self.next().on('click',function(e) {
      self.val( parseInt(self.val()) + 1 );
      update_quantity()
    })
  })

})
