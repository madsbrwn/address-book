augular.module('contacts', []);
app.controller('ContactsController', mainCtrl);

function mainCtrl($scope)
{
    $scope.usercontacts = []
    $scope.addNew = function (user) {
        
        $scope.usercontacts.push({
                          name: user.name,
                          photo: user.url,
                          address: user.address,
                          phone: user.phone
                          }); /* [1] */
        user.name="";
        user.url="";
        user.address="";
        user.phone="";  
};
