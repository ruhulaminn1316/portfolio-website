import { useEffect } from "react";
import { portfolioMarkup } from "./portfolioMarkup";
import { initPortfolioInteractions } from "./portfolioInteractions";

function App() {
  useEffect(() => {
    const cleanup = initPortfolioInteractions();
    return cleanup;
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: portfolioMarkup }} />;
}

export default App;
