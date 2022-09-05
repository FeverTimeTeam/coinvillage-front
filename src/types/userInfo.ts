export interface UserInfoType {
  memberResponseDto: {
    authorityDtoSet: [
      {
        authorityName: 'ROLE_NATION' | 'ROLE_RULER';
      }
    ];
    email: 'string';
    memberId: 0;
    nickname: 'string';
    password: 'string';
    phoneNumber: 'string';
    property: 0;
  };
  token: 'string';
}
