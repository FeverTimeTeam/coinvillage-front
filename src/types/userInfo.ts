export interface UserInfoType {
  memberId: number;
  email: string;
  password: string;
  nickname: string;
  phoneNumber: string | null;
  property: number | null;
  countryName: string;
  authorityDtoSet: [
    {
      authorityName: 'ROLE_NATION' | 'ROLE_RULER';
    }
  ];
  jobName: string;
  jobContent: string;
  payCheck: number;
  profileUrl: string;
}
