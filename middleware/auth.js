export default function ({ store, redirect, route }) {
  // If the user is not authenticated
  if (!store.state.auth.token && route.path !== "/") {
    alert("Seu token expirou!");
    return redirect('/');
  }
}