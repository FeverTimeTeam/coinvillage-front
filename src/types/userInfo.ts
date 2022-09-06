export interface UserInfoType {
  memberResponseDto: {
    authorityDtoSet: [
      {
        authorityName: 'ROLE_NATION' | 'ROLE_RULER';
      }
    ];
    email: string;
    memberId: number;
    nickname: string;
    password: string;
    phoneNumber: string;
    property: number;
  };
  token: string;
}
