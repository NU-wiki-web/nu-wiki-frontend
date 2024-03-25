export default defineNuxtRouteMiddleware((to, from) => {
  const sessionId = useCookie("SESSIONID");
  console.log("middleware: sessionId", sessionId.value);
  console.log("middleware: to.path", to.path);
  //   if (to.path === "/login" || to.path === "/") {
  //     return true;
  //   }
  //   if (!sessionId.value) {
  //     return navigateTo("/login");
  //   }
  // }
  const signupId = useCookie("SIGNUPID");
  const pathsAllowNonLogin = ["/login", "/", "/signup"];
  const signUpPaths = ["/signup/auth", "/signup/register"];

  // if (to.path == "/login" && sessionId.value) {
  //   console.log("middleware: redirect to /lecture-list");
  //   return navigateTo("/lecture-list");
  // }
  // ログイン無しで見れるページは全て許可する
  if (pathsAllowNonLogin.includes(to.path)) {
    return true;
  }

  // ユーザー登録の途中なら許可
  if (from.path == "/signup" && to.path == "/signup/auth") {
    return true;
  } else if (from.path == "/signup/auth" && to.path == "/signup/register") {
    return true;
  }

  // ログインしていない場合はログイン画面へリダイレクト
  if (!sessionId.value) {
    console.log("middleware: redirect to /login");
    return navigateTo("/login");
  } else {
    return true;
  }
});
