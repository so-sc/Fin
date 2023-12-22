import 'package:flutter/material.dart';

import '../components/nav.dart';


class App extends StatelessWidget {
  const App({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
        body: BottomTabs()
    );
  }
}
