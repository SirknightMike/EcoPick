import 'package:flutter/material.dart';
import "package:ecopick_frontend/component/sign_in_button.dart";
import "package:ecopick_frontend/component/square_tile.dart";
import "package:ecopick_frontend/component/text_field.dart";
import "package:flutter/material.dart";

class RegisterPage extends StatefulWidget {
  final Function()? onTap;
  RegisterPage({super.key, required this.onTap});

  @override
  State<RegisterPage> createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  final emailController = TextEditingController();

  final passwordController = TextEditingController();

  // sign the user in method
  void signInUser() {}

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
          child: Center(
        child: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const SizedBox(
                height: 25,
              ),
              // logo
              const Icon(
                Icons.recycling,
                size: 100,
                color: Colors.green,
              ),
          
              const SizedBox(
                height: 20,
              ),
              // welcome back/Hello
              Text(
                "Create EcoPick Account!",
                style: TextStyle(
                  color: Colors.green[900],
                  fontSize: 25,
                  fontWeight: FontWeight.bold
                ),
              ),
          
              const SizedBox(
                height: 25,
              ),
              // user email textfield
              MyTextfield(
                controller: emailController,
                hintText: 'Email',
                obscureText: false,
              ),
              // password textfield
              const SizedBox(
                height: 10,
              ),
              MyTextfield(
                controller: passwordController,
                hintText: 'Password',
                obscureText: true,
              ),

// confirm password
              const SizedBox(
                height: 10,
              ),
              MyTextfield(
                controller: passwordController,
                hintText: 'Confirm Password',
                obscureText: true,
              ),
              const SizedBox(
                height: 10,
              ),

              // forgot password
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 25.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    Text(
                      'Forgot Password?',
                      style: TextStyle(color: Colors.grey[600]),
                    ),
                  ],
                ),
              ),
              const SizedBox(
                height: 25,
              ),
              // sign in button
              MyButton(
                onTap: signInUser,
              ),
          
              const SizedBox(
                height: 50,
              ),
              // or Continue with Optional
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 25.0),
                child: Row(
                  children: [
                    Expanded(
                        child: Divider(
                      thickness: 0.5,
                      color: Colors.grey[400],
                    )),
                    const Padding(
                      padding: EdgeInsets.symmetric(horizontal: 10.0),
                      child: Text("Or continue with "),
                    ),
                    Expanded(
                        child: Divider(
                      thickness: 0.5,
                      color: Colors.grey[400],
                    ))
                  ],
                ),
              ),
          
              // google + apple sign up
              // const Row(
              //   mainAxisAlignment: MainAxisAlignment.center,
              //   children: [
              //     // google button
              //     SquareTile(imagePath: 'put in image path'),
          
              //     SizedBox(
              //       height: 10,
              //     ),
              //     // apple button
              //     SquareTile(imagePath: 'put in image path')
              //   ],
              // )
              // sign up
              SizedBox(
                height: 50,
              ),
          
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text("Already have an account?"),
                  const SizedBox(
                    width: 4,
                  ),
                  GestureDetector(
                    onTap: widget.onTap,
                    child: Text(
                      "Login now",
                      style: TextStyle(
                          color: Colors.blue, fontWeight: FontWeight.bold),
                    ),
                  )
                ],
              )
            ],
          ),
        ),
      )),
    );
  }
}





















