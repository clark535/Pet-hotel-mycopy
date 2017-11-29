console.log('client.js is sources');

$(document).ready(function () {
    console.log('jQuery .ready has been loaded');
    getAllInfo();


    $('#register').on('click', addNewOwner);

    

    $('#add-pet').on('click', addNewPet )


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
            first_name: newFirstName,
            last_name: newLastName
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


function addNewPet(){
console.log('add pets button was clicked');
var newPetName = $('#pet_name').val();
var newBreedName = $('#breed').val();
var newColor = $('#color').val();
var newOwnerId = $('#owner-options option:selected').attr('data-id')
$.ajax({
    method: 'POST',
    url: '/pet',
    data: { pet_name: newPetName,
        breed: newBreedName,
        color: newColor,
        owner_id: newOwnerId
        }
    
    })
    success: getAllInfo 
}



function getAllInfo(){
        console.log( 'in getAllInfo' );
        // ajax call to server to get List
        $.ajax({
          method: 'GET',
          url: '/pet',
        }).then(function(response){ //this .then is a promise which is used in a syncronise code
            console.log('response', response)
            for (let i = 0; i < response.length; i++) {
                var customer = response[i]
            }//end for loop
            $('#table-body').empty();
            $('#table-body').append('<tr><td>' + customer.first_name + '</td><td>' + customer.last_name + `</td>
            <td>` + customer.name + '</td><td>' + customer.breed + '</td><td>' + customer.color + '</td></tr>');
        });//end then
      } // end getAllInfo

