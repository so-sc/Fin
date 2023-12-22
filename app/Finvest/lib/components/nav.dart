import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:google_nav_bar/google_nav_bar.dart';

import 'package:finvest/pages/edu/home_screen.dart';


class BottomTabs extends StatefulWidget {
  const BottomTabs({Key? key}) : super(key: key);

  @override
  State<BottomTabs> createState() => _BottomTabsState();
}

class _BottomTabsState extends State<BottomTabs> {
  int _selectedIndex = 0;
  final List<Widget> _pages = [
    Container(color: Colors.lightBlue,),
    Container(color: Colors.black,),
    const HomeScreen(),
    Container(color: Colors.black,),
  ];
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.black,
      child: Stack(
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 20),
            child: Scaffold(
              body: _pages[_selectedIndex],
              bottomNavigationBar: GNav(
                gap: 8,
                color: Colors.white,
                activeColor: Colors.white,
                iconSize: 24,
                tabBackgroundColor: Colors.grey.shade800,
                backgroundColor: Colors.black,
                padding: const EdgeInsets.all(16),
                onTabChange: (index) {
                  setState(() {
                    _selectedIndex = index;
                  });
                },
                tabs: const [
                  GButton(
                    icon: Icons.home,
                    text: 'Home',
                  ),
                  GButton(
                    icon: Icons.insert_chart,
                    text: 'Invest',
                  ),
                  // GButton(
                  //   icon: Icons.audio,
                  //   text: 'Invest',
                  //   textStyle: TextStyle(
                  //     fontSize: 16,
                  //     fontWeight: FontWeight.w500,
                  //     color: Colors.black,
                  //     fontFamily: 'Roboto',
                  //   ),
                  //
                  //   iconActiveColor: Colors.indigo,
                  //   iconColor: Colors.grey,
                  //   backgroundColor: Colors.white,
                  // ),
                  GButton(
                    icon: Icons.menu_book_rounded,
                    text: 'Education',
                  ),
                  GButton(
                    icon: Icons.person_pin,
                    text: 'Profile',
                  )
                ],
              ),
            ),
          ),
          Positioned(
            top: 20,
            right: 20,
            child: FloatingActionButton(
              onPressed: () {

              },
              child: const Icon(Icons.message_outlined),
            ),
          ),
        ],
      ),
    );
  }
}