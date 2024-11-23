import 'package:ecopick_frontend/pages/login_pages.dart';
import 'package:ecopick_frontend/pages/register_page.dart';
import 'package:flutter/material.dart';



class LoginOrRegisterPage extends StatefulWidget {
  const LoginOrRegisterPage({super.key});

  @override
  State<LoginOrRegisterPage> createState() => _LoginOrRegisterPage();
}

class _LoginOrRegisterPage extends State<LoginOrRegisterPage> {

// initially show login page
bool showLoginPage = true;


// toggle between login and register

void togglePage(){
  setState(() {
    showLoginPage = !showLoginPage;
  });
}

  @override
  Widget build(BuildContext context) {
    if(showLoginPage){
      return LoginPage(
        onTap: togglePage,
      );
    }else {
      return RegisterPage(
        onTap:togglePage,
      );
      }
  }
}




















