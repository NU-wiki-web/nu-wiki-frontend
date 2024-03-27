export default defineNuxtRouteMiddleware((to, _) => {
  // クライアントサイドでは実行しない。
  if (process.client) return;
  const sessionId = useCookie("SESSIONID");
  const pathsAllowNonLogin = ["/login", "/", "/signup"];
  const signUpPaths = ["/signup/auth", "/signup/register"];

  if (sessionId.value) {
    // ログイン済みのとき
    if (to.path === "/login" || signUpPaths.includes(to.path)) {
      return navigateTo("/lecture-list");
    }
    return;
  } else {
    if (pathsAllowNonLogin.includes(to.path) || signUpPaths.includes(to.path)) {
      // ログイン無しで見れるページなら許可
      return;
    } else {
      // それ以外はログインページにリダイレクト
      return navigateTo("/login");
    }
  }
});
