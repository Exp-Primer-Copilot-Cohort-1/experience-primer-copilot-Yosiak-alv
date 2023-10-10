function skillsMember(){
    return {
        restrict:'E',
        templateUrl:'modules/skills/views/member.html',
        controller: 'Skills/MemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope:{
            member:'=='
        }
    }
}