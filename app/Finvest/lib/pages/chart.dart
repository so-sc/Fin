import 'package:flutter/material.dart';
import 'package:charts_flutter/flutter.dart' as charts;


class PieChart extends StatelessWidget {
  final List<charts.Series<_SalesData, String>> data = [
    charts.Series<_SalesData, String>(
      id: 'Sales',
      data: [
        _SalesData('Item A', 30),
        _SalesData('Item B', 25),
        _SalesData('Item C', 20),
        _SalesData('Item D', 15),
        _SalesData('Item E', 10),
      ],
      domainFn: (_SalesData sales, _) => sales.item,
      measureFn: (_SalesData sales, _) => sales.value,
      labelAccessorFn: (_SalesData sales, _) => '${sales.item}: ${sales.value}%',
    )
  ];

  @override
  Widget build(BuildContext context) {
    return charts.PieChart(
      data,
      animate: true,
      defaultRenderer: charts.ArcRendererConfig(
        arcRendererDecorators: [
          charts.ArcLabelDecorator(
            labelPosition: charts.ArcLabelPosition.auto,
          ),
        ],
      ),
    );
  }
}

class _SalesData {
  final String item;
  final int value;

  _SalesData(this.item, this.value);
}