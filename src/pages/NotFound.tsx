
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
<Helmet>
  <title>Page Not Found | 2GreekDevs</title>
  <meta
    name="description"
    content="The page you're looking for doesn't exist. Explore 2GreekDevs projects, services, and partners instead."
  />
  <link rel="canonical" href="https://2greekdevs.gr/*" />

  {/* Open Graph */}
  <meta property="og:title" content="Page Not Found | 2GreekDevs" />
  <meta
    property="og:description"
    content="This page could not be found. Discover 2GreekDevs projects, services, and collaborations instead."
  />
  <meta property="og:url" content="https://2greekdevs.gr/*" />
</Helmet>

      
  
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-medium">Page Not Found</h2>
        <p className="text-muted-foreground">
          Sorry, we couldn't find the page you're looking for.
        </p>

        <Button asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
