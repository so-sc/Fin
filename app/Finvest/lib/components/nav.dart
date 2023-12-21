import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:google_nav_bar/google_nav_bar.dart';

class QRCode extends StatelessWidget {
  const QRCode({super.key});
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 424,
      height: 144,
      clipBehavior: Clip.antiAlias,
      decoration: BoxDecoration(),
      child: Stack(
        children: [
          Positioned(
            left: 0,
            top: 0,
            child: Container(
              width: 424,
              height: 144,
              decoration: ShapeDecoration(
                color: Colors.black,
                shape: RoundedRectangleBorder(
                  side: BorderSide(width: 7, color: Color(0xFFC76988)),
                  borderRadius: BorderRadius.circular(75),
                ),
              ),
            ),
          ),
          Positioned(
            left: 48,
            top: 38,
            child: Container(
              width: 68,
              height: 68,
              decoration: BoxDecoration(
                image: DecorationImage(
                  image: NetworkImage("https://via.placeholder.com/68x68"),
                  fit: BoxFit.contain,
                ),
              ),
            ),
          ),
          Positioned(
            left: 48,
            top: 38,
            child: Container(
              width: 68,
              height: 68,
              decoration: ShapeDecoration(
                shape: RoundedRectangleBorder(
                  side: BorderSide(width: 3, color: Colors.white),
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
            ),
          ),
          Positioned(
            left: 48,
            top: 56,
            child: Container(
              width: 5,
              height: 33,
              decoration: BoxDecoration(color: Colors.black),
            ),
          ),
          Positioned(
            left: 111,
            top: 56,
            child: Container(
              width: 5,
              height: 33,
              decoration: BoxDecoration(color: Colors.black),
            ),
          ),
          Positioned(
            left: 65,
            top: 43,
            child: Transform(
              transform: Matrix4.identity()..translate(0.0, 0.0)..rotateZ(-1.57),
              child: Container(
                width: 5,
                height: 33,
                decoration: BoxDecoration(color: Colors.black),
              ),
            ),
          ),
          Positioned(
            left: 65,
            top: 106,
            child: Transform(
              transform: Matrix4.identity()..translate(0.0, 0.0)..rotateZ(-1.57),
              child: Container(
                width: 5,
                height: 33,
                decoration: BoxDecoration(color: Colors.black),
              ),
            ),
          ),
          Positioned(
            left: 157,
            top: 36,
            child: Text(
              'Scan QR',
              style: TextStyle(
                color: Colors.white,
                fontSize: 48,
                fontFamily: 'Poppins',
                fontWeight: FontWeight.w600,
                height: 0,
              ),
            ),
          ),
        ],
      ),
    );
  }
}


class BottomTabs extends StatefulWidget {
  const BottomTabs({super.key});

  @override
  State<BottomTabs> createState() => _BottomTabsState();
}

class _BottomTabsState extends State<BottomTabs> {
  int _selectedIndex = 0;
  final List<Widget> _pages = [
    Container(color: Colors.lightBlue,),
    Container(color: Colors.black,),
    Container(color: Colors.black,),
    Container(color: Colors.black,),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _pages[_selectedIndex],
      bottomNavigationBar: Column(
        children: [
          const QRCode(),
          const SizedBox(height: 10,),
          GNav(
            rippleColor: Colors.grey.shade800, // tab button ripple color when pressed
            hoverColor: Colors.grey.shade700, // tab button hover color
            haptic: true, // haptic feedback
            tabBorderRadius: 15,
            tabActiveBorder: Border.all(color: Colors.black, width: 1), // tab button border
            tabBorder: Border.all(color: Colors.grey, width: 1), // tab button border
            tabShadow: [BoxShadow(color: Colors.grey.withOpacity(0.5), blurRadius: 8)], // tab button shadow
            curve: Curves.easeOutExpo, // tab animation curves
            duration: const Duration(milliseconds: 900), // tab animation duration
            gap: 8, // the tab button gap between icon and text
            color: Colors.grey[800], // unselected icon color
            activeColor: Colors.purple, // selected icon and text color
            iconSize: 24, // tab button icon size
            tabBackgroundColor: Colors.purple.withOpacity(0.1), // selected tab background color
            padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 5), // navigation bar padding
            tabs: [
              GButton(
                icon: Icons.home,
                text: 'Home',
                onPressed: (index){
                  setState(() {
                    _selectedIndex=index;
                  });
                }
              ),
              GButton(
                icon: Icons.insert_chart,
                text: 'Invest',
                  onPressed: (index){
                    setState(() {
                      _selectedIndex=index;
                    });
                  }
              ),
              GButton(
                icon: Icons.menu_book_rounded,
                text: 'Search',
                  onPressed: (index){
                    setState(() {
                      _selectedIndex=index;
                    });
                  }
              ),
              GButton(
                icon: Icons.person_pin,
                text: 'Profile',
                  onPressed: (index){
                    setState(() {
                      _selectedIndex=index;
                    });
                  }
              )
            ]
          ),
        ],
      )
    );
  }
}
// class _BottomTabsState extends State<BottomTabs> {
//   int _selectedIndex = 0;
//   final List<Widget> _pages = [
//     Container(color: Colors.lightBlue,),
//     Container(color: Colors.black,),
//   ];
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       body: _pages[_selectedIndex],
//       bottomNavigationBar: BottomNavigationBar(
//         type: BottomNavigationBarType.fixed,
//         showSelectedLabels: false,
//         showUnselectedLabels: false,
//         currentIndex: _selectedIndex,
//         onTap: (index){
//           setState(() {
//             _selectedIndex=index;
//           });
//         },
//         items: [
//           BottomNavigationBarItem(
//               label: 'Home',
//               icon: SvgPicture.asset('assets/vectors/home.svg')
//           ),
//           BottomNavigationBarItem(
//               label: 'Home',
//               icon: SvgPicture.asset('assets/vectors/home.svg')
//           ),
//           BottomNavigationBarItem(
//               label: 'Home',
//               icon: SvgPicture.asset('assets/vectors/home.svg')
//           ),
//           BottomNavigationBarItem(
//               label: 'Home',
//               icon: SvgPicture.asset('assets/vectors/home.svg')
//           ),
//         ],
//       ),
//     );
//   }
// }

