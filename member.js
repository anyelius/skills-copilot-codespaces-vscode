function skillsMember(){
    return{
        restrict: 'E',
        templeateUrl: 'modules/skills/views/member.html',
        controller: 'skillsMemberController',
        controllerAs: 'vm',
        bindToController:True,
        scope:{
            member:'m'
        }
    };
}