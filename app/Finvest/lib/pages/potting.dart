import 'dart:async';

import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';


class FinPot extends StatefulWidget {
  const FinPot({Key? key}) : super(key: key);
  @override
  State<FinPot> createState() => _FinPotState();
}

class _FinPotState extends State<FinPot> {
  bool showFirstAnimation = true;

  @override
  void initState() {
    super.initState();
    Timer(const Duration(seconds: 5), () {
      setState(() {
        showFirstAnimation = false;
      });
    });
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: showFirstAnimation
            ? Lottie.asset('assets/lottie/money.json') // Replace with first animation file path
            : Lottie.asset('assets/lottie/.json'), // Replace with second animation file path
      ),
    );
  }
}
