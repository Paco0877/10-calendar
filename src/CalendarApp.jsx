import { BrowserRouter } from "react-router";
import { AppRouter } from "./router";

export const CalendarApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
