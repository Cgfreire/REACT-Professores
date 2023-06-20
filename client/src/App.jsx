import { AppRouter } from "./routes"
import { GlobalStyles } from './styles/global/styles.jsx'

export const App = () => {
  return (
    <>
      <AppRouter />
      <GlobalStyles />
    </>
  );
}

/*
cd client
npm run dev
 */