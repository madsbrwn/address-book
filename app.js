angular.module('contacts', [])
.controller('ContactsController', mainCtrl)
.directive ('user', contactsDirective);

function mainCtrl($scope)
{
    $scope.usercontacts = []
    $scope.addNew = function (contact) {

        $scope.usercontacts.push({
                          name: contact.name,
                          url: contact.url,
                          phone: contact.phone,
                          email: contact.email,
                          address: contact.address,
                          });
        contact.name="";
        contact.url="";
        contact.phone="";
        contact.email="";
        contact.address="";
    };
  $scope.remove=function()
    {
       var oldlist=$scope.usercontacts;
        $scope.usercontacts=[];
        angular.forEach(oldlist,function(x)
                        {
                        if(!x.done)
                        {
                        $scope.usercontacts.push(x);
                        }
                        })
        
    };

}

  function contactsDirective () {
    return {
      scope: {
        contact: '='
      },
      restrict: 'E',
      replace: 'true',
      template: (
        '<div class="contact">' +
          '<span class="contactTitle">' +
            '<img ng-src="{{contact.url}}" />' +
          '</span>' +
          '<span class="contactTitle">' +
            '<h4>{{contact.name}}</h4>' +
          '</span>' +
          '{{contact.phone}}<br>' +
          '<a href="mailto:{{contact.email}}">{{contact.email}}</a><br>' +
          '{{contact.address}}' +
          '<input type="checkbox" ng-model="contact.done">'+
        '</div>'
      ),
      link: link
    };
  }

  function link (scope) {
  if (!scope.contact.url) {
    scope.contact.url = 'https://i.imgflip.com/4a8he.jpg';
  }
}
