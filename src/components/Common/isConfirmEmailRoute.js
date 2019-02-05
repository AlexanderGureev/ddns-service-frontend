import MessageConstructor from "./LoadingMessage";

const message = MessageConstructor();
const isConfirmEmailRoute = ({ pathname = "", search = "" }, isAuth) => {
  const validPathname = "/managed/verify";
  if (search && pathname === validPathname && !isAuth) {
    const querySearch = new URLSearchParams(search);
    const code = querySearch.get("code");

    if (!code) message.error("Verification link is not valid.");
    else message.error("You must be logged in to verify your mail.");
  }
};

export default isConfirmEmailRoute;
