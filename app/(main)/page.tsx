import { Hero } from "@/components/HomePageSections/Hero";

export const revalidate = 3600;

const Home = async () => {

  return (
    <>
      <Hero />
      {/* <GettingStarted />
      <OpenSource
        contributors={contributors}
        stargazers={stargazers}
        categoriesCount={categoriesCount}
        templatesCount={templatesCount}
      />
      <ExploreTemplates templatesCount={templatesCount!} /> */}
    </>
  );
};

export default Home;
