import 'dart:async';
import 'package:flutter/material.dart';
import 'package:finvest/pages/edu/home_screen.dart';
import 'package:finvest/pages/onboard/onboarding.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({Key? key}) : super(key: key);
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    Timer(const Duration(seconds: 5), () {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => HomeScreen()),//OnBoardingScreen
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
        child: Text(
          'Your Splash Screen Content',
          style: TextStyle(fontSize: 24),
        ),
      ),
    );
  }
}
