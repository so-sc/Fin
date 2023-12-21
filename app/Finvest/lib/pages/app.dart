import 'package:flutter/material.dart';

import '../components/nav.dart';


class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
        body: BottomTabs()
    );
  }
}
