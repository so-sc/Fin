import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class OTPForm extends StatelessWidget {
  const OTPForm({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Form(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: const [
          Input4OPT(),
          Input4OPT(),
          Input4OPT(),
          Input4OPT(),
        ],
      )
    );
  }
}

class Input4OPT extends StatelessWidget {
  const Input4OPT({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
        height: 68,
        width: 64,
        child: TextFormField(
          onChanged: (v) {
            if(v.length==1) {
              FocusScope.of(context).nextFocus();
            }
          },
          onSaved: (pin) {},
          decoration: const InputDecoration(hintText: "0"),
          style: Theme.of(context).textTheme.headline6,
          keyboardType: TextInputType.number,
          textAlign: TextAlign.center,
          inputFormatters: [
            LengthLimitingTextInputFormatter(1),
            FilteringTextInputFormatter.digitsOnly,
          ],
        )
    );
  }
}
