import Header from "../components/Header";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import ThreeDText from "../components/ThreeDText";
import Section from "../components/Section";

const Home = () => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <ThreeDText />
        <Section
          leftContent={
            <>
              <h1>Welcome to Our Site</h1>
              <p>
                We believe that mental well-being is the cornerstone of a
                fulfilling and balanced life. Our mission is to provide you with
                the resources, insights, and tools you need to cultivate a
                peaceful mind, improve your sleep, and build strong, meaningful
                social connections.
              </p>
              <button onClick={() => navigateTo("/mental-health")}>
                <p>Explore</p>
                <svg
                  stroke="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button>
            </>
          }
          rightContent={<></>}
        />
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div>
              <h2>Improve Your Mental Well-being</h2>
              <p>
                Your mental health is paramount to living a happy and productive
                life. Explore our comprehensive resources designed to help you:
              </p>
            </div>
            <button
              onClick={() => navigateTo("/mental-health")}
              className=".card button"
            >
              <p>Explore</p>
              <svg
                stroke="currentColor"
                strokeWidth="1"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
          </div>

          <div className={styles.card}>
            <div>
              <h2>Enhance Your Sleep</h2>
              <p>
                A good nights sleep is essential for overall health and
                well-being. We offer a variety of resources to help you achieve
                better sleep quality.
              </p>
            </div>
            <button onClick={() => navigateTo("/sleep")}>
              <p>Learn More</p>
              <svg
                stroke="currentColor"
                strokeWidth="1"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
          </div>

          <div className={styles.card}>
            <div>
              <h2>Foster Meaningful Social Connections</h2>
              <p>
                Strong social connections are vital for emotional support and
                personal growth. We provide insights and tips on.
              </p>
            </div>
            <button onClick={() => navigateTo("/social-wellbeing")}>
              <p>Get Started</p>
              <svg
                stroke="currentColor"
                strokeWidth="1"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <section id="mental-health" className={styles.whyChooseUs}>
          <div className={styles.whyChooseUsContent}>
            <h2>Why Choose Us?</h2>
            <p>
              At Calm Your Mind. Change Your Life, we are dedicated to
              supporting. your journey towards a balanced and enriched life. Our
              content is curated by mental health professionals, sleep experts,
              and relationship coaches to ensure you receive reliable and
              effective guidance.
            </p>
          </div>
        </section>

        <section id="sleep" className={styles.section}>
          <h2>Join Our Community</h2>
          <p>
            Become a part of our growing community of like-minded individuals
            who are committed to improving their mental well-being, sleep
            quality, and social connections.
          </p>
          <p>
            Subscribe to our newsletter for the latest updates, tips, and
            exclusive content.
          </p>
          <button
            onClick={() => navigateTo("/page1")}
            className={styles.exploreButton}
          >
            <p>Explore</p>
            <svg
              stroke="currentColor"
              strokeWidth="1"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </button>
        </section>

        <section id="wellbeing" className={styles.section}>
          <h2>Foster Meaningful Social Connections</h2>
          <p>
            Strong social connections are vital for emotional support and
            personal growth. We provide insights and tips on:
          </p>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h2>Building Relationships</h2>
              <p>
                Learn how to create and maintain deep, meaningful relationships.
              </p>
            </div>
            <div className={styles.card}>
              <h2>Effective Communication</h2>
              <p>
                Enhance your communication skills to foster better understanding
                and connection with others.
              </p>
            </div>
            <div className={styles.card}>
              <h2>Community Engagement</h2>
              <p>
                Find ways to get involved in your community and build a
                supportive network.
              </p>
            </div>
          </div>
          <p>
            Discover how meaningful interactions can transform your life and
            well-being.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
