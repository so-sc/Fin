class OnBoardingUsers {
  final String name;
  final int age;
  final int gender;
  final int living;
  final bool disabled;
  final String PhNo;
  final bool finExp;

  // Initialize all final variables in the constructor
  OnBoardingUsers({
    required this.name,
    required this.age,
    required this.gender,
    required this.living,
    required this.disabled,
    required this.PhNo,
    required this.finExp,
  });

  factory OnBoardingUsers.fromJson(Map<String, dynamic> json) => OnBoardingUsers(
    name: json['name'],
    age: json['age'],
    gender: json['gender'],
    living: json['living'],
    PhNo: json['PhNo'],
    disabled: json['disabled'],
    finExp: json['finExp'],
  );
}
