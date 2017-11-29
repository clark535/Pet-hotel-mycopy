console.log('client.js is sources');

$(document).ready(function () {
    console.log('jQuery .ready has been loaded');



    $('#register').on('click', addNewOwner);

    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function addNewOwner(){
        console.log('addNewOwner called');
        var newFirstName=$('#first_name').val();
        var newLastName=$('#last_name').val();
        //var ownerName=newFirstName + newLastName;
      $.ajax({
          method: 'POST',
          url: '/registration',
          data: {
            first_name: first_name,
            last_name: last_name
          }
      }).then(function(response){
          console.log('response', response);
          $('#first_name').val('');
          $('#last_name').val('');
          ownerOptionUpdate();
      })
      }

      function ownerOptionUpdate(){
        $('#owner-options').empty();
          $.ajax({
              method: 'GET',
              url: '/registration',
              
          }).then(function(response){
            for (let index = 0; index < response.length; index++) {
                $('#owner-options').append('<option data-id="' + response[index].id + '">' + response[index].first_name + '</option>')
                
            }
          });
      }

