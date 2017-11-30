var app = angular.module('PetHotelApp', []);

app.controller('PetController', ['$http', function ($http) {
    console.log('PetController has loaded');
    var self = this;
    self.newName

    var addNewOwner = function () {
        console.log('addNewOwner called');
        // var newFirstName=$('#first_name').val();
        // var newLastName=$('#last_name').val();
        //var ownerName=newFirstName + newLastName;
        $http({
            method: 'POST',
            url: '/registration',
            data: newName.first_name
                newName.last_name
        }).then(function (response) {
            console.log('response', response);
            //   $('#first_name').val('');
            //   $('#last_name').val('');
            //   ownerOptionUpdate();
        })
    }

    var ownerOptionUpdate = function () {
        //$('#owner-options').empty();
        $http({
            method: 'GET',
            url: '/registration'

        }).then(function (response) {
            // for (let index = 0; index < response.length; index++) {
            //     $('#owner-options').append('<option data-id="' + response[index].id + '">' + response[index].first_name + '</option>')

            // }
        });
    }


    var addNewPet = function () {
        console.log('add pets button was clicked');
        // var newPetName = $('#pet_name').val();
        // var newBreedName = $('#breed').val();
        // var newColor = $('#color').val();
        // var newOwnerId = $('#owner-options option:selected').attr('data-id')
        $http({
            method: 'POST',
            url: '/pet',
            data: {
                pet_name: newPetName,
                breed: newBreedName,
                color: newColor,
                owner_id: newOwnerId
            }

        })
        success: getAllInfo
    }



    var getAllInfo = function () {
        console.log('in getAllInfo');
        // ajax call to server to get List
        $http({
            method: 'GET',
            url: '/pet'
        }).then(function (response) { //this .then is a promise which is used in a syncronise code
            console.log('response', response)
            //     for (let i = 0; i < response.length; i++) {
            //         var customer = response[i]
            //     }//end for loop
            //     $('#table-body').empty();
            //     $('#table-body').append('<tr><td>' + customer.first_name + '</td><td>' + customer.last_name + `</td>
            //     <td>` + customer.name + '</td><td>' + customer.breed + '</td><td>' + customer.color + '</td></tr>');
            // });//end then

            // end getAllInfo
        });
    }
}]);